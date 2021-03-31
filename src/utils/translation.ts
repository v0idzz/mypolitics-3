import { TextTranslation } from "@generated/graphql";
import { stripTypename } from "@utils/strip-typename";
import { LANG_CODE } from "@constants";

export const translate = (
  translationObj: Omit<TextTranslation, "__typename"> = {},
  requestedLang: string
): string => {
  const translation = stripTypename(translationObj);
  const languages = [requestedLang, ...Object.keys(LANG_CODE)];

  for (let i = 0; i < languages.length; i += 1) {
    const lang = languages[i];
    const exists = typeof translation[lang] !== "undefined";

    if (exists && !!translation[lang]) {
      return translation[lang];
    }
  }

  return "";
};
