import React from "react";
import { Title } from "@shared/Typography";
import { Divider } from "@shared/Common";
import Button from "@shared/Button";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { apiPaths } from "@constants";
import Alert from "@shared/Alert";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { Container, Header } from "./AuthLoginPageStyle";
import Form from "./Form";

library.add(faFacebookF);

const AuthLoginPage: React.FC = () => {
  const { query } = useRouter();
  const { t } = useTranslation("auth");

  return (
    <Container>
      <Header>
        <Title>{t("title")}</Title>
      </Header>
      <Divider />
      {!query?.state && (
        <>
          <Link href={apiPaths.facebook.auth} locale={false} passHref>
            <Button
              background="facebook"
              beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
              pulsating
            >
              {t("facebook.login")}
            </Button>
          </Link>
          <Divider />
        </>
      )}
      {query?.state === "verified" && (
        <Alert type="success">{t("verificationSuccess")}</Alert>
      )}
      <Form />
    </Container>
  );
};

export default AuthLoginPage;
