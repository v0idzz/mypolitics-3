import React from "react";
import { InitPage } from "@components/Quiz";
import { NextPageContext } from "next";
import { getRedirectIfInitialized } from "@components/Quiz/utils/getRedirectIfInitialized";
import { Cookies as ConstCookies } from "@constants";
import Cookies from "cookies";
import {addMonths} from 'date-fns';

const QuizInitializePage: React.FC = () => <InitPage />;

export const getServerSideProps = (context: NextPageContext) => {
  const { req, res } = context;
  const redirect = getRedirectIfInitialized(context);
  const cookies = new Cookies(req, res);
  cookies.set(ConstCookies.INITIALIZED, new Date().toISOString(), {
    expires: addMonths(new Date(), 3),
  });

  return {
    redirect,
    props: {},
  };
};

export default QuizInitializePage;
