import React, { useState } from "react";
import { ResultsTraitPartsFragment } from "@generated/graphql";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import * as R from "ramda";
import { IdeologyModal } from "@components/Results";
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
  const [traitSelected, setTrait] = useState<
    ResultsTraitPartsFragment | undefined
  >();
  const { lang } = useTranslation();

  const onChange = (trait) => setTrait(trait);
  const onClose = () => setTrait(undefined);

  const toTrait = (trait: ResultsTraitPartsFragment) => (
    <TraitContainer background={trait.color} onClick={() => onChange(trait)}>
      <IdeologyIcon icon={trait.icon} />
      <span>{trait.name[lang]}</span>
    </TraitContainer>
  );

  const traitsElements = R.map(toTrait, traits);

  return (
    <>
      <IdeologyModal
        show={!!traitSelected}
        onClose={onClose}
        data={traitSelected}
      />
      <Container>
        <Header>
          <HeaderTitle>Cechy</HeaderTitle>
        </Header>
        <Content>{traitsElements}</Content>
      </Container>
    </>
  );
};

export default ResultsTraits;
