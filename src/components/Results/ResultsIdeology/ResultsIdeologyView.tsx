import React from "react";
import { ResultsCompassPartsFragment } from "@generated/graphql";
import { useIdeology } from "@components/Results/ResultsIdeology/ResultsIdeologyUtils";
import InformationButton from "@shared/InformationButton";
import { useCurrentResults } from "@components/Results";
import useTranslation from "next-translate/useTranslation";
import { Container, Info, Version } from "./ResultsIdeologyStyle";

interface Props {
  compassMode: ResultsCompassPartsFragment;
}

const ResultsIdeology: React.FC<Props> = ({ compassMode }) => {
  const { point } = compassMode;
  const pointArray = [point.horizontal, point.vertical];
  const ideology = useIdeology(pointArray);
  const { isClassic } = useCurrentResults();
  const { t } = useTranslation("results");

  const information = (
    <InformationButton title={t("ideology.title")}>
      <div>{t("ideology.desc1")}</div>
      <div>{t("ideology.desc2")}</div>
    </InformationButton>
  );

  return (
    <Container>
      <Info>{ideology}</Info>
      {!isClassic && (
        <Version>
          <span>alpha</span>
          <span>{information}</span>
        </Version>
      )}
    </Container>
  );
};

export default ResultsIdeology;
