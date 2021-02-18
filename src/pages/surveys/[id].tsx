import React from "react";
import { SinglePage } from "@components/Survey";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import GoogleAd from "@shared/GoogleAd";

interface Props {
  standardPageProps: StandardPageProps;
}

const SurveyPage: React.FC<Props> = ({ standardPageProps }) => (
  <StandardPage {...standardPageProps}>
    <GoogleAd id="myp3-standard-top" />
    <SinglePage />
    <GoogleAd id="myp3-standard-middle" />
  </StandardPage>
);

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const standardPageProps = await getStandardPageProps();

  return {
    props: {
      standardPageProps,
    },
  };
};

export default SurveyPage;
