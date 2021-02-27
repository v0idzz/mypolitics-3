import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { LogoType, useLogo } from "@utils/hooks/useLogo";
import { ListType } from "./ArticlesListSectionTypes";

interface UseArticlesListHeader {
  title: React.ReactNode;
  lead?: string;
  imageSrc: string;
  align: "left" | "center";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const imageSrc: Record<ListType, any> = {
  news: require("@assets/images/media/news-section.png"),
  view: require("@assets/images/media/view-section.png"),
  "short-news": require("@assets/images/media/short-news-section.png"),
  "short-talk": require("@assets/images/media/short-talk-section.png"),
};

const logoTypes = {
  "short-news": LogoType.Media,
  "short-talk": LogoType.Talk,
};

export const useArticlesListHeader = (
  type: ListType
): UseArticlesListHeader => {
  const { t } = useTranslation("articles");
  const isShort = type.includes("short");
  const { url, name } = useLogo(logoTypes[type]);

  if (isShort) {
    const title = <img src={url} alt={name} />;

    return {
      title,
      imageSrc: imageSrc[type],
      align: "center",
    };
  }

  return {
    title: t(`${type}.title`),
    lead: t(`${type}.lead`),
    imageSrc: imageSrc[type],
    align: "left",
  };
};
