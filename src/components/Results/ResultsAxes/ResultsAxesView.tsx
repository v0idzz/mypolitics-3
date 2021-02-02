import React from "react";
import {
  ResultsAxisPartsFragment,
  ResultsPartsFragment,
} from "@generated/graphql";
import * as R from "ramda";
import { Container } from "./ResultsAxesStyle";
import ResultsAxis from "./ResultsAxis";

interface Props {
  results: ResultsPartsFragment;
}

const ResultsAxes: React.FC<Props> = ({ results }) => {
  const toAxis = (axis: ResultsAxisPartsFragment) => (
    <ResultsAxis axis={axis} />
  );

  const axisList = R.map(toAxis, results.axes);

  return <Container>{axisList}</Container>;
};

export default ResultsAxes;
