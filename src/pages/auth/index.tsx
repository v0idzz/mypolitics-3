import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { LoginPage as Page } from "@components/Auth";

const LoginPage: React.FC = () => (
  <CenteredPage>
    <NextSeo title="Zaloguj się" titleTemplate="%s | myPolitics" />
    <Page />
  </CenteredPage>
);

export default LoginPage;
