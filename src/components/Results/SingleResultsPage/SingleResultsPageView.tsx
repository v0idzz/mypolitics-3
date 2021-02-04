import React from "react";
import {
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import StandardPage from "@shared/StandardPage";
import { Header, Content } from "@components/Results";
import Head from "next/head";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const SingleResultsPage: React.FC<Props> = ({ results, politician }) => (
  <StandardPage>
    <Head>
      <script
        src="https://kit.fontawesome.com/74320b0657.js"
        crossOrigin="anonymous"
        async
      />
    </Head>
    <div>
      <Header results={results} politician={politician} />
      <Content results={results} politician={politician} />
    </div>
  </StandardPage>
);

export default SingleResultsPage;
