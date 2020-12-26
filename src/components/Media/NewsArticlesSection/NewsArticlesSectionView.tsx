import React from "react";
import { ArticlesSection } from "@components/Media";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

interface Props {
  posts: BasicPostPartsFragment[];
}

const NewsArticlesSection: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("articles");

  return (
    <ArticlesSection
      title={t("news.title")}
      lead={t("news.lead")}
      imageSrc={require("@assets/images/media/news-section.png")}
      posts={posts}
    />
  );
};

export default NewsArticlesSection;
