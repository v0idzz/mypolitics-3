export const BASE_PATH = "https://beta.mypolitics.pl";

export const localStorageTokens = {
  respondent: "mypolitics-respondent",
};

export const paths = {
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
