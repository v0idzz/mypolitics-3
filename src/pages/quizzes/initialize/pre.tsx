import React from "react";
import { PreInitPage } from "@components/Quiz";
import CenteredPage from "@shared/CenteredPage";
import { NextPageContext } from "next";
import { getRedirectIfInitialized } from "@components/Quiz/utils/getRedirectIfInitialized";

const QuizPreInitializePage: React.FC = () => <PreInitPage />;

export const getServerSideProps = (context: NextPageContext) => {
  const redirect = getRedirectIfInitialized(context);

  return {
    redirect,
    props: {},
  };
};

export default QuizPreInitializePage;
