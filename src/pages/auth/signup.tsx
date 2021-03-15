import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { SignupPage as Page } from "@components/Auth";

const SignupPage: React.FC = () => (
  <CenteredPage>
    <NextSeo title="Zarejestruj się" titleTemplate="%s | myPolitics" />
    <Page />
  </CenteredPage>
);

export default SignupPage;
