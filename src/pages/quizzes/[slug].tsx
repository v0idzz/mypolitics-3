import React from "react";
import { SinglePage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import { SingleQuizDocument, SingleQuizQuery } from "@generated/graphql";
import { NextPageContext } from "next";

interface Props {
  quiz: SingleQuizQuery["quiz"];
}

const SingleQuizPage: React.FC<Props> = ({ quiz }) => (
  <SinglePage quiz={quiz} />
);

export const getServerSideProps = async ({
  query,
}: NextPageContext): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<SingleQuizQuery>({
    query: SingleQuizDocument,
    variables: {
      slug: query.slug,
    },
  });

  return {
    props: {
      quiz: data.quiz,
    },
  };
};

export default SingleQuizPage;
