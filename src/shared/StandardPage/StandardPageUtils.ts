import {
  BasicTalkPartsFragment,
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery, Language,
  PatreonDocument,
  PatreonQuery,
  TalksByFilterDocument,
  TalksByFilterQuery,
} from '@generated/graphql';
import { initializeApollo } from "@services/apollo";
import { getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { NextPageContext } from "next";
import { languages } from '@constants';

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
  const language = languages.find((lang) => lang.id === locale);
  const languageEnum = language ? language.enum : Language.English;

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

  const talksQuery = client.query<TalksByFilterQuery>({
    query: TalksByFilterDocument,
    variables: {
      limit: 3,
      sort: "end:desc",
      where: {
        lang: locale,
      },
    },
  });

  const quizzesQuery = client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
    variables: {
      lang: languageEnum,
    },
  });

  const patreonQuery = client.query<PatreonQuery>({
    query: PatreonDocument,
  });

  const [
    news,
    view,
    randomArticles,
    talks,
    quizzes,
    patreons,
  ] = await Promise.all([
    newsQuery,
    viewQuery,
    randomArticleQuery,
    talksQuery,
    quizzesQuery,
    patreonQuery,
  ]);

  return {
    articles: [...(news || []), ...(view || []), ...(randomArticles || [])],
    talks: talks?.data.talks || [],
    patreons: patreons?.data.patreon,
    quizzes: [
      ...(quizzes?.data.featuredQuizzes || []),
      ...(quizzes?.data.socialQuizzes.slice(0, 3) || []),
    ],
  };
};
