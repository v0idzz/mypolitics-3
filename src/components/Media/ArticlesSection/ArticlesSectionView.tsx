import React from "react";
import { Title, Lead } from "@shared/Typography";
import { PostOrPage } from "@tryghost/content-api";
import { Link as PostLink } from "@components/Media";
import { BasicTalkPartsFragment } from "@generated/graphql";
import * as R from "ramda";
import dynamic from "next/dynamic";
import { Container, Image, ImageTitleWrapper } from "./ArticlesSectionStyle";
import {
  BaseSectionBackground,
  BaseSectionContent,
  BaseSectionHeader,
  BaseSectionList,
} from "@shared/BaseSection";

interface Props {
  title: React.ReactNode;
  lead?: string;
  imageSrc: string;
  align?: "left" | "center";
  posts: PostOrPage[];
  talks: BasicTalkPartsFragment[];
}

const TalkLink = dynamic(() => import("@components/Talk/TalkLink"));

const ArticlesSection: React.FC<Props> = ({
  title,
  lead,
  imageSrc,
  posts,
  talks,
  align = "left",
}) => {
  const toPostLink = (post: PostOrPage) => (
    <PostLink key={post.id} data={post} />
  );
  const toTalkLink = (talk: BasicTalkPartsFragment) => (
    <TalkLink key={talk.id} data={talk} />
  );
  const isPost = posts.length > 0;
  const toListElement = isPost ? toPostLink : toTalkLink;
  const elements = isPost ? posts : talks;
  const elementsList = R.map(toListElement, elements);

  const isStringTitle = typeof title === "string";
  const titleElement = isStringTitle ? (
    <Title>{title}</Title>
  ) : (
    <ImageTitleWrapper>{title}</ImageTitleWrapper>
  );

  return (
    <Container className="container">
      <BaseSectionHeader align={align}>
        <Image src={imageSrc} alt="section-title" />
        {titleElement}
        {lead && <Lead>{lead}</Lead>}
      </BaseSectionHeader>
      <BaseSectionContent>
        <BaseSectionBackground />
        <BaseSectionList>{elementsList}</BaseSectionList>
      </BaseSectionContent>
    </Container>
  );
};

export default ArticlesSection;
