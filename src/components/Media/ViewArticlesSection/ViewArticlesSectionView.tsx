import React from "react";
import { ArticlesSection } from "@components/Media";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

interface Props {
  posts: BasicPostPartsFragment[];
}

const ViewArticlesSection: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("articles");

  return (
    <ArticlesSection
      title={t("view.title")}
      lead={t("view.lead")}
      imageSrc={require("@assets/images/media/view-section.png")}
      posts={posts}
    />
  );
};

export default ViewArticlesSection;
