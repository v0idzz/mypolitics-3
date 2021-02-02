import React from "react";
import {
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import { PoliticianInfo, Description, Axes } from "@components/Results";
import { Container } from "./ResultsContentStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsContent: React.FC<Props> = ({ results, politician }) => (
  <Container>
    {politician && <PoliticianInfo politician={politician} />}
    <Description />
    <Axes results={results} />
  </Container>
);

export default ResultsContent;
