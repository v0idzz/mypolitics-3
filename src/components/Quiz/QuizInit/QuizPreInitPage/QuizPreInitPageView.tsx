import React from "react";
import { NextSeo } from "next-seo";
import { InitStep } from "@components/Quiz";
import Button from "@shared/Button";
import Link from "next/link";
import { paths, titleTemplate } from "@constants";
import CenteredPage from "@shared/CenteredPage";
import GoogleAd from "@shared/GoogleAd";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import { Chips, TopText, Content } from "./QuizPreInitPageStyle";

const QuizPreInitPage: React.FC = () => {
  const { t } = useTranslation("quiz");

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo title={t("preInit.before")} titleTemplate={titleTemplate} />
      <GoogleAd id="myp3-standard-top" />
      <InitStep
        title={t("preInit.hey")}
        lead={t("preInit.beforeWeStart")}
        showDivider
      >
        <Content>
          <TopText>
            {t("preInit.top")}
            <Trans i18nKey="quiz:preInit.top" components={[<span />]} />
          </TopText>
          <Trans
            i18nKey="quiz:preInit.privacy"
            components={[<Chips key="0" />, <span key="1" />]}
          />
          <Chips>{t("preInit.data")}</Chips>
          <Link href={paths.quizzesInitialize} passHref>
            <Button as="a" showShadow>
              {t("preInit.next")}
            </Button>
          </Link>
        </Content>
      </InitStep>
      <GoogleAd id="myp3-standard-bottom" />
    </CenteredPage>
  );
};

export default QuizPreInitPage;
