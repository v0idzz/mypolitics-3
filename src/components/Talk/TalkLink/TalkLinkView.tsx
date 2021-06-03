import React from "react";
import { BasicTalkPartsFragment } from "@generated/graphql";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

interface Props {
  data: BasicTalkPartsFragment;
}

const videoIdRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export const getVideoId = (url: string): string => {
  const match = url.match(videoIdRegExp);
  return match[2];
};

const TalkLink: React.FC<Props> = ({ data }) => {
  const { url, title } = data;
  const videoId = getVideoId(url);

  return (
    <>
      <style>
        {`
          .yt-link {
            height: 100%;
            width: 100%;
            z-index: 1;
            min-height: 12rem;
            border-radius: 0.5rem;
            overflow: hidden;
          }
        `}
      </style>
      <LiteYouTubeEmbed
        wrapperClass="yt-lite yt-link"
        id={videoId}
        title={title}
      />
    </>
  );
};

export default TalkLink;
