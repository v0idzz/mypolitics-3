import React from "react";
import { BasicTalkPartsFragment } from "@generated/graphql";
import { Content } from "@components/Talk/CurrentTalk/CurrentTalkStyle";
import { Container } from "./TalkLinkStyle";

interface Props {
  data: BasicTalkPartsFragment;
}

const videoIdRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export const getVideoId = (url: string): string => {
  const match = url.match(videoIdRegExp);
  return match[2];
};

const NewsLink: React.FC<Props> = ({ data }) => {
  const { url, title } = data;
  const videoId = getVideoId(url);

  return (
    <Container
      title={title}
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default NewsLink;
