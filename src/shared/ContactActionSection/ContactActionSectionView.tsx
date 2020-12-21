import React from "react";
import Button from "@shared/Button";
import Obfuscate from "react-obfuscate";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import { Container, Header } from "./ContactActionSectionStyle";

interface Props {
  title: React.ReactNode;
}

library.add(faEnvelope);

const ContactActionSection: React.FC<Props> = ({ title }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Header>{title}</Header>
      <Button beforeIcon={<FontAwesomeIcon icon={faEnvelope} />} showShadow>
        <Obfuscate email={t("contact.email")} />
      </Button>
    </Container>
  );
};

export default ContactActionSection;
