import React from "react";
import { SinglePage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import { SingleQuizDocument, SingleQuizQuery } from "@generated/graphql";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

interface Props {
  quiz: SingleQuizQuery["quiz"];
}

const SingleQuizPage: React.FC<Props> = ({ quiz }) => {
  const { lang } = useTranslation();
  const title = quiz.title[lang];
  const description = quiz.description[lang];

  return (
    <>
      <NextSeo
        title={`Test polityczny ${title}`}
        description={`Sprawdź swoje poglądy polityczne w teście wyborczym ${title}! ${description}`}
      />
      <SinglePage quiz={quiz} />
    </>
  );
};

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
