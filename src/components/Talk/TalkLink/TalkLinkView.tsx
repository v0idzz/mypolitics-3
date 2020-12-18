import React from "react";
import { BasicTalkPartsFragment } from "@generated/graphql";
import { Container } from "./TalkLinkStyle";

interface Props {
  data: BasicTalkPartsFragment;
}

const NewsLink: React.FC<Props> = ({ data }) => {
  const { url, thumbnail, title } = data;
  const thumbnailUrl = thumbnail.formats.small.url;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Container src={thumbnailUrl} alt={title} />
    </a>
  );
};

export default NewsLink;
