import React, { useState } from "react";
import { Country, ResultsPartyPartsFragment } from "@generated/graphql";
import PartyInfo from "@components/Results/ResultsParty/PartyInfo";
import Button from "@shared/Button";
import * as R from "ramda";
import InformationButton from "@shared/InformationButton";
import { useCurrentResults } from "@components/Results";
import {
  Container,
  List,
  Header,
  HeaderTitle,
  ButtonWrapper,
} from "./ResultsPartyStyle";
import CountrySelect from "@shared/CountrySelect";
import useTranslation from "next-translate/useTranslation";
import { langToCountry } from "@utils/langToCountry";

interface Props {
  parties: ResultsPartyPartsFragment[];
  authorizedPartiesIds: string[];
}

const ResultsParty: React.FC<Props> = ({ parties, authorizedPartiesIds }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { isClassic } = useCurrentResults();
  const { lang } = useTranslation();
  const [country, setCountry] = useState(langToCountry(lang));
  const maxParties = isClassic ? 1 : 2;
  const partiesList = parties
    .filter((p) => p.country === country)
    .slice(0, showMore ? parties.length : maxParties);

  const handleShowMore = () => setShowMore(true);

  const toPartyInfo = (data: ResultsPartyPartsFragment) => (
    <PartyInfo
      key={data.id}
      data={data}
      authorized={authorizedPartiesIds.includes(data.id)}
    />
  );
  const partiesInfoList = R.map(toPartyInfo, partiesList);

  const handleCountryChange = (c: Country) => {
    setCountry(c);
  };

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
        <CountrySelect
          value={country}
          onChange={handleCountryChange}
          color="background"
        />
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
