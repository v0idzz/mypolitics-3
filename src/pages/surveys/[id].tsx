import React from "react";
import { SinglePage } from "@components/Survey";
import StandardPage from "@shared/StandardPage";
import GoogleAd from "@shared/GoogleAd";

const SurveyPage: React.FC = () => (
  <StandardPage>
    <GoogleAd id="myp3-standard-top" />
    <SinglePage />
    <GoogleAd id="myp3-standard-middle" />
  </StandardPage>
);

export default SurveyPage;
