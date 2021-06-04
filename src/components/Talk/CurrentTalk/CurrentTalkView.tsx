import React, { useEffect } from "react";
import { CurrentTalkQuery } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { Title, Lead } from "@shared/Typography";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { getVideoId } from "./CurrentTalkUtils";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
  Container,
  Header,
  Content,
  HeaderContent,
  Badge,
  BadgeDot,
  BadgeTitle,
} from "./CurrentTalkStyle";

interface Props {
  data: CurrentTalkQuery["talksConnection"];
}

const CurrentTalk: React.FC<Props> = ({ data }) => {
  const { t } = useTranslation("common");

  if (!data || data?.values.length === 0) {
    return null;
  }

  const { type, title, url } = data.values[0];
  const videoId = getVideoId(url);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>{t(`talkType.${type}`)}</Title>
          <Lead>{title}</Lead>
        </HeaderContent>
        <Badge>
          <BadgeDot />
          <BadgeTitle>na żywo</BadgeTitle>
        </Badge>
      </Header>
      <Content>
        <LiteYouTubeEmbed id={videoId} title={title} />
      </Content>
    </Container>
  );
};

export default CurrentTalk;
