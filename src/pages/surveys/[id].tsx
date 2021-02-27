import React from "react";
import { SinglePage } from "@components/Survey";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import GoogleAd from "@shared/GoogleAd";
import { PoliticiansResults } from "@components/Quiz";

interface Props {
  standardPageProps: StandardPageProps;
}

const SurveyPage: React.FC<Props> = ({ standardPageProps }) => (
  <StandardPage {...standardPageProps}>
    <GoogleAd id="myp3-standard-top" />
    <SinglePage />
    <GoogleAd id="myp3-standard-middle" />
    <PoliticiansResults />
  </StandardPage>
);

export const getServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const standardPageProps = await getStandardPageProps(context);

  return {
    props: {
      standardPageProps,
    },
  };
};

export default SurveyPage;
