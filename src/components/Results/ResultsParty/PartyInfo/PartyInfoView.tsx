import React, { useState } from "react";
import { ResultsPartyPartsFragment } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCheck,
  faTimes,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import { useCurrentResults } from "@components/Results";
import * as R from "ramda";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Header,
  Image,
  Name,
  Agreement,
  AuthorizedIconWrapper,
  AuthorizedBackground,
} from "./PartyInfoStyle";

library.add(faCheckCircle, faCheck, faTimes, faMinus);

interface Props {
  data: ResultsPartyPartsFragment;
  authorized: boolean;
}

const PartyInfo: React.FC<Props> = ({ data, authorized }) => {
  const theme = useTheme();
  const { logoUrl, name, percentAgreement } = data;
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const { isClassic } = useCurrentResults();
  const { t } = useTranslation("results");

  const classicAgreement = R.cond([
    [R.gte(R.__, 85), R.always(<FontAwesomeIcon icon={faCheck} />)],
    [R.gte(R.__, 70), R.always(<FontAwesomeIcon icon={faMinus} />)],
    [R.T, R.always(<FontAwesomeIcon icon={faTimes} />)],
  ])(percentAgreement);

  return (
    <>
      <Modal
        show={showInfo}
        onClose={() => setShowInfo(false)}
        header={{
          title: (
            <Header>
              <Image src={logoUrl} alt={name} small />
              <div>{t("party.agreement")}</div>
            </Header>
          ),
          color: theme.colors.primaryDarken,
        }}
      >
        {authorized && (
          <AuthorizedBackground>
            {t("party.authorized", { name })}
          </AuthorizedBackground>
        )}
        <div>{t("party.percentage")}</div>
      </Modal>
      <Container>
        <Header>
          <Image src={logoUrl} alt={name} />
          <Name>{name}</Name>
        </Header>
        <Agreement
          onClick={() => setShowInfo(true)}
          percentage={percentAgreement}
          isClassic={isClassic}
        >
          {authorized && (
            <AuthorizedIconWrapper title={t("party.auth")}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </AuthorizedIconWrapper>
          )}
          {isClassic ? classicAgreement : `${percentAgreement}%`}
        </Agreement>
      </Container>
    </>
  );
};

export default PartyInfo;
