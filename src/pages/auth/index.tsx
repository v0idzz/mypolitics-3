import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { LoginPage as Page } from "@components/Auth";
import GoogleAd from "@shared/GoogleAd";
import useTranslation from "next-translate/useTranslation";
import { titleTemplate } from "@constants";

const LoginPage: React.FC = () => {
  const { t } = useTranslation("auth");

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo title={t("SEO.login")} titleTemplate={titleTemplate} />
      <GoogleAd id="myp3-standard-top" />
      <Page />
      <GoogleAd id="myp3-standard-bottom" />
    </CenteredPage>
  );
};

export default LoginPage;
