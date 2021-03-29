import {
  BasicTalkPartsFragment,
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  PatreonDocument,
  PatreonQuery,
  StandardPageDocument,
  StandardPageQuery,
  TalksByFilterDocument,
  TalksByFilterQuery,
} from "@generated/graphql";
import { initializeApollo } from "@services/apollo";
import { getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { NextPageContext } from "next";
import { toLanguageEnum } from "@utils/toLanguageEnum";

export interface StandardPageProps {
  articles: PostOrPage[];
  talks: BasicTalkPartsFragment[];
  quizzes: FeaturedQuizzesQuery["featuredQuizzes"];
  patreons: PatreonQuery["patreon"];
}

export const getStandardPageProps = async ({
  locale,
  query,
}: NextPageContext & { locale: string }): Promise<StandardPageProps> => {
  const client = initializeApollo();
  const [viewTag, newsTag] = categoriesConfig[locale];
  const notCurrentFilter = `slug:-['${query.slug}']`;
  const languageEnum = toLanguageEnum(locale);

  const newsQuery = getRandomPosts({
    limit: 1,
    filter: `tags:${newsTag}+${notCurrentFilter}`,
  });

  const viewQuery = getRandomPosts({
    limit: 2,
    filter: `tags:${viewTag}+${notCurrentFilter}`,
  });

  const randomArticleQuery = getRandomPosts({
    limit: 1,
    filter: `tags:${viewTag}+${notCurrentFilter}`,
    fields: ["id", "title", "slug", "feature_image", "published_at"],
    include: ["tags", "authors"],
  });

  const standardPageQuery = client.query<StandardPageQuery>({
    query: StandardPageDocument,
    variables: {
      lang: languageEnum,
      locale,
    },
  });

  const [news, view, randomArticles, standardPage] = await Promise.all([
    newsQuery,
    viewQuery,
    randomArticleQuery,
    standardPageQuery,
  ]);

  return {
    articles: [...(news || []), ...(view || []), ...(randomArticles || [])],
    talks: standardPage?.data.talks || [],
    patreons: standardPage?.data.patreon,
    quizzes: [
      ...(standardPage?.data.featuredQuizzes || []),
      ...(standardPage?.data.socialQuizzes || []),
    ],
  };
};
