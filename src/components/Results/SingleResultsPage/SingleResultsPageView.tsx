import React from "react";
import {
  QuizType,
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import { Header, Content, Answers, ResultsContext } from "@components/Results";
import GoogleAd from "@shared/GoogleAd";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const SingleResultsPage: React.FC<Props> = ({ results, politician }) => {
  const isClassic = results.quiz.type === QuizType.Classic;

  return (
    <ResultsContext.Provider value={{ ...results, isClassic }}>
      <>
        <GoogleAd id="myp3-standard-top" />
        <div>
          <Header results={results} politician={politician} />
          <Content results={results} politician={politician} />
        </div>
        <GoogleAd id="myp3-standard-middle" />
        {!isClassic && (
          <Answers parties={results.parties} surveyId={results.id} />
        )}
      </>
    </ResultsContext.Provider>
  );
};

export default SingleResultsPage;
