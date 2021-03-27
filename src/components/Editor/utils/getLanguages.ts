import {
  EditorQuizQuery,
  Language as LanguageGraphql,
} from "@generated/graphql";
import { Language, languages } from "@constants";

export const getLanguages = (data?: EditorQuizQuery): LanguageGraphql[] => {
  if (!data) {
    return [];
  }

  const dataText = JSON.stringify(data, null, 2);
  const allRegex = (lang) => new RegExp(`"${lang}":`, "gm");
  const fulfilledRegex = (lang) => new RegExp(`"${lang}":(.+)"(.{3,})"`, "gm");

  const langRatio: [Language, number][] = languages.map((lang) => {
    const { id } = lang;
    const allMatched = dataText.match(allRegex(id)).length;
    const fulfilledMatched = dataText.match(fulfilledRegex(id)).length;
    const ratio = parseFloat((fulfilledMatched / allMatched).toFixed(2));

    return [lang, ratio];
  });

  return langRatio
    .filter(([_, ratio]) => ratio > 0.7)
    .map(([lang]) => lang.enum);
};
