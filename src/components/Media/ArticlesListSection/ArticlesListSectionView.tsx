import React from "react";
import { ArticlesSection } from "@components/Media";
import { PostOrPage } from "@tryghost/content-api";
import { useArticlesListHeader } from "@components/Media/ArticlesListSection/ArticlesListSectionUtils";
import { BasicTalkPartsFragment } from "@generated/graphql";
import { ListType } from "./ArticlesListSectionTypes";

interface Props {
  posts?: PostOrPage[];
  talks?: BasicTalkPartsFragment[];
  type: ListType;
}

const ArticlesListSection: React.FC<Props> = ({
  posts = [],
  talks = [],
  type,
}) => {
  const { title, lead, imageSrc, align } = useArticlesListHeader(type);

  return (
    <ArticlesSection
      title={title}
      lead={lead}
      imageSrc={imageSrc}
      align={align}
      posts={posts}
      talks={talks}
    />
  );
};

export default ArticlesListSection;
