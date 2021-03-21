import React from "react";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { VerifyRequested as Page } from "@components/Editor";
import GoogleAd from "@shared/GoogleAd";

const VerifyRequestedPage: React.FC = () => (
  <CenteredPage fullWidth={false}>
    <NextSeo title="Przesłano do weryfikacji!" noindex />
    <GoogleAd id="myp3-standard-top" />
    <Page />
    <GoogleAd id="myp3-standard-bottom" />
  </CenteredPage>
);

export default VerifyRequestedPage;
