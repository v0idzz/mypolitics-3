import React from "react";
import { ListPage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import {
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
} from "@generated/graphql";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";

interface Props {
  featuredQuizzes: FeaturedQuizzesQuery["featuredQuizzes"];
  standardPageProps: StandardPageProps;
}

const QuizzesPage: React.FC<Props> = ({
  featuredQuizzes,
  standardPageProps,
}) => (
  <StandardPage {...standardPageProps}>
    <ListPage featuredQuizzes={featuredQuizzes} />
  </StandardPage>
);

export const getServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
  });

  const standardPageProps = await getStandardPageProps(context);

  return {
    props: {
      featuredQuizzes: data.featuredQuizzes,
      standardPageProps,
    },
  };
};

export default QuizzesPage;
