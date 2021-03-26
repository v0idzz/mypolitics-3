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
import { translate } from "@utils/translation";
import { apiPaths } from "@constants";
import { objToBase64 } from "@utils/toBase64";

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
  const { lang, t } = useTranslation("results");
  const title = translate(results.quiz.title, lang);
  const description = translate(results.quiz.description, lang);
  const image = apiPaths.utils.image("quiz", objToBase64({ title }));

  const standardHeader = {
    title: t("SEO.title", { title }),
    description: t("SEO.description", { description }),
  };

  const standardSeo: NextSeoProps = {
    ...standardHeader,
    openGraph: {
      ...standardHeader,
      images: [
        {
          height: 600,
          width: 900,
          url: image,
        },
      ],
    },
  };

  const politicianHeader = {
    title: t("SEO_politician.title", { title, name: politician?.name }),
    description: t("SEO_politician.description", {
      biography: translate(politician?.biography, lang),
    }),
  };

  const politicianSeo: NextSeoProps = politician && {
    ...politicianHeader,
    openGraph: {
      ...politicianHeader,
      images: [
        {
          url: politician.image.url,
          alt: politician.name,
        },
      ],
    },
  };

  const seo = politician ? politicianSeo : standardSeo;

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
