import React from "react";
import { ResultsCompassPartsFragment } from "@generated/graphql";
import { useIdeology } from "@components/Results/ResultsIdeology/ResultsIdeologyUtils";
import { Container, Info, Version } from "./ResultsIdeologyStyle";

interface Props {
  compassMode: ResultsCompassPartsFragment;
}

const ResultsIdeology: React.FC<Props> = ({ compassMode }) => {
  const { point } = compassMode;
  const pointArray = [point.horizontal, point.vertical];
  const ideology = useIdeology(pointArray);

  return (
    <Container>
      <Info>{ideology}</Info>
      <Version>alpha</Version>
    </Container>
  );
};

export default ResultsIdeology;
