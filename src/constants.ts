import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH = publicRuntimeConfig.BASE_PATH || "";

export const Cookies = {
  RESPONDENT: "mypolitics-respondent",
  INITIALIZED: "mypolitics-initialized",
};

export const paths = {
  home: "/",
  privacy: "/privacy",
  rules: "/rules",
  gdpr: "/gdpr",
  articles: "/articles",
  article(slug: string, id?: string): string {
    return `/articles/${slug}${id ? `/${id}` : ""}`;
  },
  quizzes: "/quizzes",
  quizzesPreInitialize: "/quizzes/initialize/pre",
  quizzesInitialize: "/quizzes/initialize",
  quizzesAdvancedInitialize: "/quizzes/initialize/advanced",
  quiz(slug: string, id?: string): string {
    return `/quizzes/${slug}${id ? `/${id}` : ""}`;
  },
  survey(id: string): string {
    return `/surveys/${id}`;
  },
  results(id: string): string {
    return `/results/${id}`;
  },
  talks: "/talks",
  talk(slug: string, id?: string): string {
    return `/talk/${slug}${id ? `/${id}` : ""}`;
  },
};
