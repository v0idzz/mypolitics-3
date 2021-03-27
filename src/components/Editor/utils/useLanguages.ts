import {
  EditorQuizQuery,
  Language as LanguageGraphql,
} from "@generated/graphql";
import { Language, languages } from "@constants";
import useTranslation from "next-translate/useTranslation";
import { toLanguageEnum } from "@utils/toLanguageEnum";

export const useLanguages = (data?: EditorQuizQuery): LanguageGraphql[] => {
  const { lang } = useTranslation();
  const defaultValue = [toLanguageEnum(lang)];

  if (!data) {
    return defaultValue;
  }

  const dataText = JSON.stringify(data, null, 2);
  const allRegex = (l) => new RegExp(`"${l}":`, "gm");
  const fulfilledRegex = (l) => new RegExp(`"${l}":(.+)"(.{3,})"`, "gm");

  try {
    const langRatio: [Language, number][] = languages.map((l) => {
      const { id } = l;
      const allMatched = dataText.match(allRegex(id)).length;
      const fulfilledMatched = dataText.match(fulfilledRegex(id)).length;
      const ratio = parseFloat((fulfilledMatched / allMatched).toFixed(2));

      return [l, ratio];
    });

    return langRatio.filter(([_, ratio]) => ratio > 0.7).map(([l]) => l.enum);
  } catch (e) {
    return defaultValue;
  }
};
