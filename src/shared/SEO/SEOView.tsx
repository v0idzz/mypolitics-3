import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { SEOData } from "./SEOTypes";

interface Props {
  data?: SEOData;
}

const SEO: React.FC<Props> = ({ data }) => {
  const { t, lang } = useTranslation("home");

  const defaultData: SEOData = {
    title: t("SEO.title"),
    description: t("SEO.description"),
    image: t("SEO.image"),
    type: t("SEO.type"),
    url: t("SEO.url"),
  };

  const { title, description, image, type, url } = data || defaultData;

  return (
    <>
      <title>{data?.title || t("SEO.title")}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="test,quiz,polityka,edukacja,polityczna,polityczny,mypolitics,orlow,adrian,orłów,my politics"
      />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={lang} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@myPolitics__" />
      <meta name="twitter:creator" content="@myPolitics__" />
      <link rel="cannonical" href={url} />
    </>
  );
};

export default SEO;
