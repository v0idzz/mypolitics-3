import React, { useState } from "react";
import { Country, ResultsPartyPartsFragment } from "@generated/graphql";
import PartyInfo from "@components/Results/ResultsParty/PartyInfo";
import Button from "@shared/Button";
import * as R from "ramda";
import InformationButton from "@shared/InformationButton";
import { useCurrentResults } from "@components/Results";
import CountrySelect from "@shared/CountrySelect";
import useTranslation from "next-translate/useTranslation";
import { langToCountry } from "@utils/langToCountry";
import {
  Container,
  List,
  Header,
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
  const { t, lang } = useTranslation("results");
  const [country, setCountry] = useState(langToCountry(lang));
  const maxParties = isClassic ? 1 : 2;
  const partiesList = parties
    .filter((p) => p.country === country)
    .slice(0, showMore ? parties.length : maxParties);
  const byCountry = R.groupBy(R.prop("country"));
  const countriesList = R.keys(byCountry(parties));

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
    <InformationButton title={t("party.title")}>
      <div>{t("party.desc1")}</div>
      <div>{t("party.desc2")}</div>
    </InformationButton>
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>{t("party.header")}</HeaderTitle>
        {!isClassic && information}
        {countriesList.length > 1 && (
          <CountrySelect
            value={country}
            onChange={handleCountryChange}
            color="background"
            list={countriesList}
          />
        )}
      </Header>
      <List>{partiesInfoList}</List>
      {!showMore && (
        <ButtonWrapper>
          <Button onClick={handleShowMore}>{t("answers.showMore")}</Button>
        </ButtonWrapper>
      )}
    </Container>
  );
};

export default ResultsParty;
