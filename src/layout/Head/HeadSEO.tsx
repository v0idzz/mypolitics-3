import React from "react";
import { DefaultSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { BASE_PATH } from "@constants";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";

const HeadSEO: React.FC = () => {
  const { t, lang } = useTranslation("common");
  const { url, getCustomLangUrl } = useCanonicalUrl();
  const locale = {
    pl: "pl_PL",
    en: "en_US",
  };

  const languageAlternates = Object.keys(locale).map((key) => ({
    hrefLang: key,
    href: getCustomLangUrl(key),
  }));

  return (
    <DefaultSeo
      title={t("SEO.title")}
      description={t("SEO.description")}
      languageAlternates={languageAlternates}
      canonical={url}
      openGraph={{
        type: "website",
        site_name: "myPolitics",
        description: t("SEO.description"),
        locale: locale[lang],
        images: [
          {
            url: `${BASE_PATH}/static/thumbnail.png`,
            width: 1200,
            height: 630,
            alt: "myPolitics Thumbnail",
          },
        ],
        url,
      }}
      twitter={{
        handle: "@myPolitics__",
        site: "@myPolitics__",
        cardType: "summary",
      }}
    />
  );
};

export default HeadSEO;
