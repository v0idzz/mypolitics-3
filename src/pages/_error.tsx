import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Button from "@shared/Button";
import CenteredPage from "@shared/CenteredPage";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Obfuscate from "react-obfuscate";
import useTranslation from "next-translate/useTranslation";
import { Title } from "@shared/Typography";

interface Props {
  statusCode: number | null;
}

library.add(faEnvelope);

const ErrorPage: NextPage<Props> = ({ statusCode }: Props) => {
  const { t } = useTranslation("common");

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo title="Wystąpił błąd" titleTemplate="%s – myPolitics" />
      <Title>
        {statusCode ? `Wystąpił błąd ${statusCode}` : "Wystąpił nieznany błąd"}
      </Title>
      <p>Spróbuj odświeżyć stronę. Jeżeli to nie pomoże - daj nam znać!</p>
      <Button beforeIcon={<FontAwesomeIcon icon={faEnvelope} />} showShadow>
        <Obfuscate email={t("contact.email")} />
      </Button>
    </CenteredPage>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }

  return { statusCode };
};

export default ErrorPage;
