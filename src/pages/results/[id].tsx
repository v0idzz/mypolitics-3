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
import { NextSeo, NextSeoProps } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import "@fortawesome/fontawesome-svg-core/styles.css";

interface Props {
  results: ResultsPartsFragment;
  politician: ResultsPoliticianPartsFragment | null;
  standardPageProps: StandardPageProps;
}

const ResultsPage: React.FC<Props> = ({
  results,
  politician,
  standardPageProps,
}) => {
  const { lang } = useTranslation();
  const title = results.quiz.title[lang];
  const description = results.quiz.description[lang];

  const standardSeo: NextSeoProps = {
    title: `Sprawdź moje poglądy w ${title}!`,
    description: `Nowoczesna platforma testów politycznych i wyborczych. ${description}`,
  };

  const politicanSeo: NextSeoProps = politician && {
    title: `${politician.name} – wyniki w teście ${title}!`,
    description: `Porównaj swoje poglądy! ${politician.biography[lang]}`,
    openGraph: {
      images: [
        {
          url: politician.image.url,
          alt: politician.name,
        },
      ],
    },
  };

  const seo = politician ? politicanSeo : standardSeo;

  return (
    <StandardPage {...standardPageProps}>
      <Head>
        <link
          href="https://use.fontawesome.com/releases/v5.11.1/css/all.css"
          rel="stylesheet"
        />
      </Head>
      <NextSeo {...seo} />
      <SinglePage results={results} politician={politician} />
    </StandardPage>
  );
};

export const getServerSideProps = async ({
  query,
  ...context
}: NextPageContext & { locale: string }): Promise<{ props: Props }> => {
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

  const standardPageProps = await getStandardPageProps({ query, ...context });

  return {
    props: {
      results,
      politician,
      standardPageProps,
    },
  };
};

export default ResultsPage;
