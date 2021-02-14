import React from "react";
import { NextPageContext } from "next";
import { initializeApollo } from "@services/apollo";
import {
  SingleResultsDocument,
  SingleResultsQuery,
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import { SinglePage } from "@components/Results";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

interface Props {
  results: ResultsPartsFragment;
  politician: ResultsPoliticianPartsFragment | null;
}

const ResultsPage: React.FC<Props> = ({ results, politician }) => {
  const { lang } = useTranslation();
  const title = results.quiz.title[lang];
  const description = results.quiz.description[lang];

  return (
    <>
      <NextSeo
        title={`Sprawdź moje poglądy w ${title}!`}
        description={`Nowoczesna platforma testów politycznych i wyborczych. ${description}`}
      />
      <SinglePage results={results} politician={politician} />
    </>
  );
};

export const getServerSideProps = async ({
  query,
}: NextPageContext): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<SingleResultsQuery>({
    query: SingleResultsDocument,
    variables: {
      surveyId: query.id,
    },
  });

  const { results, politicianResultsConnection } = data;
  const politicianData = politicianResultsConnection.values[0];
  const politician =
    typeof politicianData !== "undefined" ? politicianData.politician : null;

  return {
    props: {
      results,
      politician,
    },
  };
};

export default ResultsPage;
