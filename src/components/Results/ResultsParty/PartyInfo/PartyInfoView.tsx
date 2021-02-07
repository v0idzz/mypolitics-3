import React, { useState } from "react";
import { ResultsPartyPartsFragment } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import {
  Container,
  Header,
  Image,
  Name,
  Agreement,
  AuthorizedIconWrapper,
  AuthorizedBackground,
} from "./PartyInfoStyle";

library.add(faCheckCircle);

interface Props {
  data: ResultsPartyPartsFragment;
  authorized: boolean;
}

const PartyInfo: React.FC<Props> = ({ data, authorized }) => {
  const theme = useTheme();
  const { logoUrl, name, percentAgreement } = data;
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      <Modal
        show={showInfo}
        onClose={() => setShowInfo(false)}
        header={{
          title: (
            <Header>
              <Image src={logoUrl} alt={name} small />
              <div>Zgodność odpowiedzi</div>
            </Header>
          ),
          color: theme.colors.primaryDarken,
        }}
      >
        {authorized && (
          <AuthorizedBackground>
            Niebieski znaczek informuje, że wyznaczona osoba reprezentująca
            partię {name} autoryzowała jej odpowiedzi w teście.
          </AuthorizedBackground>
        )}
        <div>
          Procent oznacza ważoną kategoriami pytań zgodność odpowiedzi
          użytkownika ze stanowiskami partii.
        </div>
      </Modal>
      <Container>
        <Header>
          <Image src={logoUrl} alt={name} />
          <Name>{name}</Name>
        </Header>
        <Agreement
          onClick={() => setShowInfo(true)}
          percentage={percentAgreement}
        >
          {authorized && (
            <AuthorizedIconWrapper title="Odpowiedź autoryzowana">
              <FontAwesomeIcon icon={faCheckCircle} />
            </AuthorizedIconWrapper>
          )}
          {percentAgreement}%
        </Agreement>
      </Container>
    </>
  );
};

export default PartyInfo;
