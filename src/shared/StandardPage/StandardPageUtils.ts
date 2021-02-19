import {
  BasicTalkPartsFragment,
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  TalksByFilterDocument,
  TalksByFilterQuery,
} from "@generated/graphql";
import { initializeApollo } from "@services/apollo";
import { getRandomPosts } from '@services/ghost';
import { PostOrPage } from "@tryghost/content-api";

export interface StandardPageProps {
  articles: PostOrPage[];
  talks: BasicTalkPartsFragment[];
  quizzes: FeaturedQuizzesQuery["featuredQuizzes"];
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

  const [articles, talks, quizzes] = await Promise.all([
    articlesQuery,
    talksQuery,
    quizzesQuery,
  ]);

  return {
    articles: articles || [],
    talks: talks?.data.talks || [],
    quizzes: quizzes?.data.featuredQuizzes || [],
  };
};
