import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { BASE_PATH } from "@constants";

interface Output {
  url: string;
  getCustomLangUrl: (lang: string) => string;
}

const useCanonicalUrl = (): Output => {
  const { lang } = useTranslation("common");
  const { asPath } = useRouter();
  const path = asPath.split("?")[0];

  return {
    url: `${BASE_PATH}/${lang}${path}`,
    getCustomLangUrl: (customLang: string) =>
      `${BASE_PATH}/${customLang}${path}`,
  };
};

export default useCanonicalUrl;
