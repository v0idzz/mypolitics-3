import React from "react";
import { Title } from "@shared/Typography";
import { Divider } from "@shared/Common";
import Button from "@shared/Button";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { apiPaths, paths } from "@constants";
import Alert from "@shared/Alert";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { Container, Header } from "./AuthSignupPageStyle";
import Form from "./Form";

library.add(faFacebookF);

const AuthSignupPage: React.FC = () => {
  const { t } = useTranslation("auth");

  const RulesLink: React.FC = ({ children }) => (
    <Link href={paths.rules}>
      <a target="_blank">{children}</a>
    </Link>
  );

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
      </Header>
      <Divider />
      <Link href={apiPaths.facebook.auth} passHref>
        <Button
          background="facebook"
          beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
          pulsating
        >
          {t("facebook.signUp")}
        </Button>
      </Link>
      <Alert type="info">
        <span>{t("privacyInfo.0")}</span>
        <b>
          <Trans
            i18nKey="auth:privacyInfo.1"
            components={[<span key="0" />, <RulesLink key="1" />]}
          />
        </b>
      </Alert>
      <Divider />
      <Form />
    </Container>
  );
};

export default AuthSignupPage;
