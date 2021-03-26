import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { VerifyRequested as Page } from "@components/Editor";
import GoogleAd from "@shared/GoogleAd";
import useTranslation from "next-translate/useTranslation";

const VerifyRequestedPage: React.FC = () => {
  const { t } = useTranslation("editor");

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo title={t("verifyRequested.title")} noindex />
      <GoogleAd id="myp3-standard-top" />
      <Page />
      <GoogleAd id="myp3-standard-bottom" />
    </CenteredPage>
  );
};

export default VerifyRequestedPage;
