import {
  BasicTalkPartsFragment,
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  PatreonDocument,
  PatreonQuery,
  TalksByFilterDocument,
  TalksByFilterQuery,
} from "@generated/graphql";
import { initializeApollo } from "@services/apollo";
import { getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { NextPageContext } from "next";

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

  const newsQuery = getRandomPosts({
    limit: 1,
    filter: `tag:${newsTag}+${notCurrentFilter}`,
  });

  const viewQuery = getRandomPosts({
    limit: 2,
    filter: `tag:${viewTag}+${notCurrentFilter}`,
  });

  const randomArticleQuery = getRandomPosts({
    limit: 1,
    filter: `tag:${viewTag}+${notCurrentFilter}`,
    fields: ["id", "title", "slug", "feature_image", "published_at"],
    include: ["tags", "authors"],
  });

  const talksQuery = client.query<TalksByFilterQuery>({
    query: TalksByFilterDocument,
    variables: {
      limit: 3,
      sort: "end:desc",
    },
  });

  const quizzesQuery = client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
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
