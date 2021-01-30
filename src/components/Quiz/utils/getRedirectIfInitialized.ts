import { NextPageContext, Redirect } from "next";
import { Cookies as ConstCookies, paths } from "@constants";
import Cookies from "cookies";

export const getRedirectIfInitialized = ({
  req,
  res,
}: NextPageContext): Redirect | undefined => {
  const cookies = new Cookies(req, res);
  const initializedCookie = cookies.get(ConstCookies.INITIALIZED);

  if (initializedCookie) {
    return {
      permanent: false,
      destination: paths.quizzes,
    };
  }

  return undefined;
};
