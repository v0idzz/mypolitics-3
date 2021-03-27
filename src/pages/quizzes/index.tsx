import React from "react";
import { ListPage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import {
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  Language,
  QuizBasicPartsFragment,
} from "@generated/graphql";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import Head from "next/head";
import { languages } from "@constants";
import { toLanguageEnum } from '@utils/toLanguageEnum';

interface Props {
  list: QuizBasicPartsFragment[];
  standardPageProps: StandardPageProps;
}

const QuizzesPage: React.FC<Props> = ({ list, standardPageProps }) => (
  <StandardPage {...standardPageProps}>
    <Head>
      <script async src="https://cse.google.com/cse.js?cx=dee5ebc87d0ff909f" />
    </Head>
    <ListPage list={list} />
  </StandardPage>
);

export const getServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const languageEnum = toLanguageEnum(context.locale);
  const { data } = await client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
    variables: {
      lang: languageEnum,
    },
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
