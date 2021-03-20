import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { SignupPage as Page } from "@components/Auth";
import GoogleAd from "@shared/GoogleAd";

const SignupPage: React.FC = () => (
  <CenteredPage fullWidth={false}>
    <NextSeo title="Zarejestruj się" titleTemplate="%s | myPolitics" />
    <GoogleAd id="myp3-standard-top" />
    <Page />
    <GoogleAd id="myp3-standard-bottom" />
  </CenteredPage>
);

export default SignupPage;
