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

export interface StandardPageProps {
  articles: PostOrPage[];
  talks: BasicTalkPartsFragment[];
  quizzes: FeaturedQuizzesQuery["featuredQuizzes"];
  patreons: PatreonQuery["patreon"];
}

export const getStandardPageProps = async (): Promise<StandardPageProps> => {
  const client = initializeApollo();

  const articlesQuery = getRandomPosts({
    limit: 6,
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

  const [articles, talks, quizzes, patreons] = await Promise.all([
    articlesQuery,
    talksQuery,
    quizzesQuery,
    patreonQuery,
  ]);

  return {
    articles: articles || [],
    talks: talks?.data.talks || [],
    quizzes: quizzes?.data.featuredQuizzes || [],
    patreons: patreons?.data.patreon,
  };
};
