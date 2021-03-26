import getConfig from "next/config";
import { UrlObject } from "url";

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH = publicRuntimeConfig.BASE_PATH || "";

export const recaptchaSiteKey =
  publicRuntimeConfig.NODE_ENV === "production"
    ? "6LdUjm0aAAAAAJqiyWXILXdWCqVnNUPTZ12a7zKe"
    : "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export const Cookies = {
  RESPONDENT: "mypolitics-respondent",
  INITIALIZED: "mypolitics-initialized",
};

export const Headers = {
  ADMIN: "mypolitics-admin",
};

export const itemTypes = {
  party: "party",
  ideology: "ideology",
};

export const paths = {
  home: "/",
  team: "/team",
  privacy: "/privacy",
  rules: "/rules",
  gdpr: "/gdpr",
  authLogin: "/auth",
  authSignup: "/auth/signup",
  articles: "/articles",
  article(slug: string, id?: string): string {
    return `/articles/${slug}`;
  },
  quizzes: "/quizzes",
  quizzesHistory: "/quizzes#history",
  quizzesPreInitialize: "/quizzes/initialize/pre",
  quizzesInitialize: "/quizzes/initialize",
  quizzesAdvancedInitialize: "/quizzes/initialize/advanced",
  editorPanel: "/editor",
  editorAdmin: "/editor/admin",
  editorVerifyRequested(slug: string): string {
    return `/editor/${slug}/verify-requested`;
  },
  editor(slug: string, verifyVersion?: string): string {
    return `/editor/${slug}${
      verifyVersion ? `?verifyVersion=${verifyVersion}` : ""
    }`;
  },
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

export const API_BASE = "/api";

export const apiPaths = {
  upload: {
    icon: `${API_BASE}/upload/icon`,
  },
  facebook: {
    auth: `${API_BASE}/auth/facebook`,
  },
  auth: {
    login: `${API_BASE}/auth/login`,
    logout: `${API_BASE}/auth/logout`,
    facebook: `${API_BASE}/auth/facebook`,
  },
};

export const LANG_CODE = {
  en: "en",
  pl: "pl",
};

export interface Language {
  id: string;
  name: string;
}

export const languages: Language[] = [
  {
    id: LANG_CODE.pl,
    name: "Język polski",
  },
  {
    id: LANG_CODE.en,
    name: "English language",
  },
];
