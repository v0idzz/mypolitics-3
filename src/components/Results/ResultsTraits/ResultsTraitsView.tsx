import React from "react";
import { ResultsTraitPartsFragment } from "@generated/graphql";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import {
  Container,
  Header,
  HeaderTitle,
  Content,
  TraitContainer,
} from "./ResultsTraitsStyle";

interface Props {
  traits: ResultsTraitPartsFragment[];
}

const ResultsTraits: React.FC<Props> = ({ traits }) => {
  const { lang } = useTranslation();

  const toTrait = (trait: ResultsTraitPartsFragment) => (
    <TraitContainer background={trait.color}>
      <IdeologyIcon icon={trait.icon} />
      <span>{trait.name[lang]}</span>
    </TraitContainer>
  );

  const traitsElements = R.map(toTrait, traits);

  return (
    <Container>
      <Header>
        <HeaderTitle>Cechy</HeaderTitle>
      </Header>
      <Content>{traitsElements}</Content>
    </Container>
  );
};

export default ResultsTraits;
