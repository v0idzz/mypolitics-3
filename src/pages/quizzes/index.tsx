import React from "react";
import { ListPage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import {
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  QuizBasicPartsFragment,
} from "@generated/graphql";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";

interface Props {
  list: QuizBasicPartsFragment[];
  standardPageProps: StandardPageProps;
}

const QuizzesPage: React.FC<Props> = ({ list, standardPageProps }) => (
  <StandardPage {...standardPageProps}>
    <ListPage list={list} />
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
      list: [...data.featuredQuizzes, ...data.socialQuizzes],
      standardPageProps,
    },
  };
};

export default QuizzesPage;
