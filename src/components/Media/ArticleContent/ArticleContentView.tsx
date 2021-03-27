import React, { useEffect, useState } from "react";
import { Title, Lead } from "@shared/Typography";
import Comments from "@shared/Comments";
import ShareSocial from "@shared/ShareSocial";
import { PostOrPage } from "@tryghost/content-api";
import GoogleAd from "@shared/GoogleAd";
import AuthorHeader from "@components/Media/ArticleContent/AuthorHeader";
import AuthorInfo from "@components/Media/ArticleContent/AuthorInfo";
import { Like } from "react-facebook";
import { ArticleHead } from "@components/Media";
import { paths } from "@constants";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import ContactActionSection from "@shared/ContactActionSection";
import { useInView } from "react-hook-inview";
import { useRouter } from "next/router";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTheme } from "styled-components";
import { Spinner } from "@shared/Loading";
import {
  Container,
  Inner,
  Header,
  ThumbnailImage,
  Content,
  ContentWrapper,
  ShowMoreOverlay,
} from "./ArticleContentStyle";

const getTime = () => Math.floor(new Date().getTime() / 1000);
const WAIT_SECONDS = 5;

const ProgressCircle: React.FC<{ timeoutStart: number }> = ({
  timeoutStart,
}) => {
  const theme = useTheme();
  const [time, setTime] = useState(getTime());
  const secondsRemaining = timeoutStart + WAIT_SECONDS - time;

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (secondsRemaining < 0) {
    return <Spinner color={theme.colors.primary} />;
  }

  return (
    <CircularProgressbar
      value={time}
      minValue={timeoutStart}
      maxValue={timeoutStart + WAIT_SECONDS}
      text={`${secondsRemaining}s`}
      styles={buildStyles({
        textSize: "16px",
        pathTransitionDuration: 0.5,
        pathColor: theme.colors.primary,
        textColor: theme.colors.primary,
        trailColor: theme.colors.backgroundDarken,
      })}
    />
  );
};

interface Props {
  post: PostOrPage;
  commentsType?: "facebook" | "disqus";
  showFull?: boolean;
}

const ArticleContent: React.FC<Props> = ({
  post,
  showFull = true,
  commentsType = "disqus",
}) => {
  const {
    published_at: publishedAt,
    feature_image: featureImage,
    html,
    title,
    excerpt,
    custom_excerpt: customExcerpt,
    reading_time: readingTime,
  } = post;
  const router = useRouter();
  const { t } = useTranslation("articles");
  const path = paths.article(post.slug);
  const [ref, inView] = useInView();
  const [timeout, setTimeoutValue] = useState<NodeJS.Timeout | undefined>();
  const [timeoutStart, setTimeoutStart] = useState<number>();

  useEffect(() => {
    if (!inView && timeout) {
      clearTimeout(timeout);
      return;
    }

    if (!inView || showFull) {
      return;
    }

    setTimeoutStart(getTime());

    const timeoutId = setTimeout(() => {
      router.push(path);
    }, WAIT_SECONDS * 1000);
    setTimeoutValue(timeoutId);
  }, [inView]);

  useEffect(() => {
    router.prefetch(path);
    router.events.on("routeChangeComplete", () => {
      if (typeof window !== "undefined") {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  }, []);

  const leadItems = [new Date(publishedAt).toLocaleDateString()];
  if (readingTime !== undefined) {
    leadItems.push("•", t("header.readingTime", { count: readingTime }));
  }

  return (
    <Container>
      {showFull && <ArticleHead post={post} />}
      <Inner>
        <ContentWrapper>
          <Header>
            <Title>{title}</Title>
            <Lead as="div">{leadItems.join(" ")}</Lead>
          </Header>
          <AuthorHeader post={post} />
        </ContentWrapper>
        <ThumbnailImage ref={ref} src={featureImage} alt={title} />
        {!showFull && (
          <ShowMoreOverlay>
            {timeout && <ProgressCircle timeoutStart={timeoutStart} />}
          </ShowMoreOverlay>
        )}
        {showFull && (
          <>
            <GoogleAd id="myp3-article-before" />
            <ContentWrapper>
              <div>
                <Content>
                  <b>{excerpt || customExcerpt}</b>
                </Content>
                <Content dangerouslySetInnerHTML={{ __html: html }} />
              </div>
              {post.authors.map((author) => (
                <AuthorInfo key={author.id} author={author} />
              ))}
              <ShareSocial defaultPath={path} />
              <Comments post={post} type={commentsType} />
              <Like
                href="http://www.facebook.com/myPoliticsTest"
                size="large"
                share
              />
              <ContactActionSection
                title={
                  <Trans
                    i18nKey="articles:contact.title"
                    components={[<React.Fragment key="0" />, <b key="1" />]}
                  />
                }
              />
            </ContentWrapper>
            <GoogleAd id="myp3-article-after" />
          </>
        )}
      </Inner>
    </Container>
  );
};

export default ArticleContent;
