import React from "react";
import { ResultsCompassPartsFragment } from "@generated/graphql";
import { useIdeology } from "@components/Results/ResultsIdeology/ResultsIdeologyUtils";
import InformationButton from "@shared/InformationButton";
import { Container, Info, Version } from "./ResultsIdeologyStyle";

interface Props {
  compassMode: ResultsCompassPartsFragment;
}

const ResultsIdeology: React.FC<Props> = ({ compassMode }) => {
  const { point } = compassMode;
  const pointArray = [point.horizontal, point.vertical];
  const ideology = useIdeology(pointArray);

  const information = (
    <InformationButton title="Jak działa dopasowanie ideologii?">
      <div>
        W wersji Alpha dopasowanie ideologii opiera się tylko i wyłącznie na
        pozycji na kompasie.
      </div>
      <div>
        Na podstawie przygotowanej wcześniej mapki ideologii, algorytm dobiera
        tę na której znajdujesz się w danym momencie.
      </div>
    </InformationButton>
  );

  return (
    <Container>
      <Info>{ideology}</Info>
      <Version>
        <span>alpha</span>
        <span>{information}</span>
      </Version>
    </Container>
  );
};

export default ResultsIdeology;
