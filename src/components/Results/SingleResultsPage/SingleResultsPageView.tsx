import React from "react";
import {
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import StandardPage from "@shared/StandardPage";
import { Header, Content, Answers } from "@components/Results";
import Head from "next/head";
import GoogleAd from "@shared/GoogleAd";

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
    <GoogleAd id="myp3-standard-top" />
    <div>
      <Header results={results} politician={politician} />
      <Content results={results} politician={politician} />
    </div>
    <GoogleAd id="myp3-standard-middle" />
    {results.quiz.title.pl !== "myPolitics" && (
      <Answers parties={results.parties} surveyId={results.id} />
    )}
  </StandardPage>
);

export default SingleResultsPage;
