import React from "react";
import { ListPage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import {
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
} from "@generated/graphql";

interface Props {
  featuredQuizzes: FeaturedQuizzesQuery["featuredQuizzes"];
}

const QuizzesPage: React.FC<Props> = ({ featuredQuizzes }) => (
  <ListPage featuredQuizzes={featuredQuizzes} />
);

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
  });

  return {
    props: {
      featuredQuizzes: data.featuredQuizzes,
    },
  };
};

export default QuizzesPage;
