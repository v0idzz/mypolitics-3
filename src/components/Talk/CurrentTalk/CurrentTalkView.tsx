import React, { useEffect } from "react";
import { useCurrentTalkLazyQuery } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { Title, Lead } from "@shared/Typography";
import { useInView } from "react-hook-inview";
import { getVideoId } from "./CurrentTalkUtils";
import {
  Container,
  Header,
  Content,
  HeaderContent,
  Badge,
  BadgeDot,
  BadgeTitle,
} from "./CurrentTalkStyle";

const CurrentTalk: React.FC = () => {
  const { t } = useTranslation("common");
  const [getData, { data }] = useCurrentTalkLazyQuery();
  const [ref, inView] = useInView({ unobserveOnEnter: true });

  useEffect(() => {
    getData({
      variables: {
        date: new Date().toISOString(),
      },
    });
  }, []);

  if (!data || data?.talksConnection.values.length === 0) {
    return null;
  }

  const { type, title, url } = data.talksConnection.values[0];
  const videoId = getVideoId(url);

  return (
    <div ref={ref}>
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
          {inView && (
            <iframe
              title={title}
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </Content>
      </Container>
    </div>
  );
};

export default CurrentTalk;
