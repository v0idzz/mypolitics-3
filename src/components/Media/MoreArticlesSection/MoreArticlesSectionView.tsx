import React from "react";
import { ArticlesSection } from "@components/Media";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

interface Props {
  posts: BasicPostPartsFragment[];
}

const MoreArticlesSection: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("articles");

  return (
    <ArticlesSection
      title={t("checkMore.title")}
      align="center"
      imageSrc={require("@assets/images/media/more-articles-section.png")}
      posts={posts}
    />
  );
};

export default MoreArticlesSection;
