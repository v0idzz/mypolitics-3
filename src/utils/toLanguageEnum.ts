import { languages } from "@constants";
import { Language } from "@generated/graphql";

export const toLanguageEnum = (locale: string): Language => {
  const language = languages.find((lang) => lang.id === locale);
  return language ? language.enum : Language.English;
};
