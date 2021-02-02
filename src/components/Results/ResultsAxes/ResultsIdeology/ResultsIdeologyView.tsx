import React from "react";
import { QuizCompassMode } from '@generated/graphql';

interface Props {
  compassMode: QuizCompassMode;
}

const ResultsIdeology: React.FC<Props> = ({ compassMode }) => {
  console.log(compassMode)

  return (
    <Container>
      <Info />
      <Verion>alpha</Verion>
    </Container>
  );
}

export default ResultsIdeology;
