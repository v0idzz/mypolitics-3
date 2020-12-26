export const paths = {
  privacy: "/privacy",
  rules: "/rules",
  gdpr: "/gdpr",
  articles: "/articles",
  article(slug: string, id?: string): string {
    return `/articles/${slug}${id ? `/${id}` : ""}`;
  },
  quizzes: "/quizzes",
  quiz(slug: string, id?: string): string {
    return `/quizzes/${slug}${id ? `/${id}` : ""}`;
  },
  talks: "/talks",
  talk(slug: string, id?: string): string {
    return `/talk/${slug}${id ? `/${id}` : ""}`;
  },
};
