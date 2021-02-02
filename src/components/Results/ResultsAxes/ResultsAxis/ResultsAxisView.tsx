import React from "react";
import { ResultsAxisPartsFragment } from "@generated/graphql";
import * as R from "ramda";
import ResultsAxisSide from "@components/Results/ResultsAxes/ResultsAxisSide";
import { getSides } from "./ResultsAxisUtils";
import { Side } from "../ResultsAxisSide/ResultsAxisSideTypes";
import { Container } from "./ResultsAxisStyle";

interface Props {
  axis: ResultsAxisPartsFragment;
}

const ResultsAxis: React.FC<Props> = ({ axis }) => {
  const sides = getSides(axis);

  const toPercentageEntry = (type: Side): [Side, number] => [
    type,
    sides[type].percentage,
  ];
  const percentages: Record<Side, number> = R.fromPairs(
    R.map<Record<Side, number>>(toPercentageEntry, R.keys(sides))
  );

  const toSide = (type: Side) => {
    const side = sides[type];

    return <ResultsAxisSide key={type} side={side} type={type} />;
  };
  const sidesElements = R.map(toSide, R.keys(sides));

  return <Container percentages={percentages}>{sidesElements}</Container>;
};

export default ResultsAxis;
