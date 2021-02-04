import React from "react";
import { ResultsPartyPartsFragment } from "@generated/graphql";
import { Container, Header, Image, Name, Agreement } from "./PartyInfoStyle";

interface Props {
  data: ResultsPartyPartsFragment;
}

const PartyInfo: React.FC<Props> = ({ data }) => {
  const { logoUrl, name, percentAgreement } = data;

  return (
    <Container>
      <Header>
        <Image src={logoUrl} alt={name} />
        <Name>{name}</Name>
      </Header>
      <Agreement percentage={percentAgreement}>{percentAgreement}%</Agreement>
    </Container>
  );
};

export default PartyInfo;
