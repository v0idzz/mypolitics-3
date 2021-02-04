import React, { useState } from "react";
import { ResultsPartyPartsFragment } from "@generated/graphql";
import PartyInfo from "@components/Results/ResultsParty/PartyInfo";
import Button from "@shared/Button";
import * as R from "ramda";
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
}

const ResultsParty: React.FC<Props> = ({ parties }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const partiesList = showMore ? parties : parties.filter((_, i) => i === 0);

  const handleShowMore = () => setShowMore(true);

  const toPartyInfo = (data: ResultsPartyPartsFragment) => (
    <PartyInfo key={data.id} data={data} />
  );
  const partiesInfoList = R.map(toPartyInfo, partiesList);

  return (
    <Container>
      <Header>
        <HeaderTitle>Partia</HeaderTitle>
        <CountrySelect />
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
