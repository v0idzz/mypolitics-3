import React, { useState } from "react";
import { ResultsPartyPartsFragment } from "@generated/graphql";
import PartyInfo from "@components/Results/ResultsParty/PartyInfo";
import Button from "@shared/Button";
import * as R from "ramda";
import InformationButton from "@shared/InformationButton";
import { useCurrentResults } from "@components/Results";
import {
  Container,
  List,
  Header,
  CountrySelect,
  HeaderTitle,
  ButtonWrapper,
} from "./ResultsPartyStyle";

interface Props {
  parties: ResultsPartyPartsFragment[];
  authorizedPartiesIds: string[];
}

const ResultsParty: React.FC<Props> = ({ parties, authorizedPartiesIds }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { isClassic } = useCurrentResults();
  const maxParties = isClassic ? 1 : 2;
  const partiesList = showMore
    ? parties
    : parties.filter((_, i) => i < maxParties);

  const handleShowMore = () => setShowMore(true);

  const toPartyInfo = (data: ResultsPartyPartsFragment) => (
    <PartyInfo
      key={data.id}
      data={data}
      authorized={authorizedPartiesIds.includes(data.id)}
    />
  );
  const partiesInfoList = R.map(toPartyInfo, partiesList);

  const information = (
    <InformationButton title="Jak działa dopasowanie partii?">
      <div>
        Procent oznacza ważoną kategoriami pytań zgodność odpowiedzi użytkownika
        ze stanowiskami partii.
      </div>
      <div>
        Pod wynikami, w sekcji "Analiza odpowiedzi", możesz sprawdzić z czym
        konkretnie się zgadzasz (bądź nie) z daną opcją.
      </div>
    </InformationButton>
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>Partia</HeaderTitle>
        {!isClassic && information}
      </Header>
      <List>{partiesInfoList}</List>
      {!showMore && (
        <ButtonWrapper>
          <Button onClick={handleShowMore}>Pokaż więcej</Button>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default ResultsParty;
