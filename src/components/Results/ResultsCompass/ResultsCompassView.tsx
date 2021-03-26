import React, { memo, useMemo } from "react";
import { ResultsCompassPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import CompassContent from "@components/Results/ResultsCompass/CompassContent";
import { Container, ListElement, List } from "./ResultsCompassStyle";
import { translate } from '@utils/translation';

interface Props {
  compasses: ResultsCompassPartsFragment[];
  selectedCompass: ResultsCompassPartsFragment;
  onChange(compass: ResultsCompassPartsFragment): void;
}

const ResultsCompass: React.FC<Props> = ({
  compasses,
  selectedCompass,
  onChange,
}) => {
  const { lang } = useTranslation();
  const deps = JSON.stringify({ compasses, selectedCompass });

  const toListElement = (compass: ResultsCompassPartsFragment) => (
    <ListElement
      key={JSON.stringify(compass.name)}
      selected={selectedCompass === compass}
      onClick={() => onChange(compass)}
    >
      {translate(compass.name, lang)}
    </ListElement>
  );
  const elements = R.map(toListElement, compasses);

  return useMemo(
    () => (
      <Container>
        <CompassContent selectedCompass={selectedCompass} />
        <List length={elements.length}>{elements}</List>
      </Container>
    ),
    [deps]
  );
};

export default ResultsCompass;
