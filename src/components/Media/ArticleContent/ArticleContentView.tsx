import React from "react";
import { Title, Lead } from "@shared/Typography";
import Comments from "@shared/Comments";
import ShareSocial from "@shared/ShareSocial";
import { PostOrPage } from "@tryghost/content-api";
import GoogleAd from "@shared/GoogleAd";
import dayjs from "dayjs";
import AuthorHeader from "@components/Media/ArticleContent/AuthorHeader";
import AuthorInfo from "@components/Media/ArticleContent/AuthorInfo";
import { paths } from "@constants";
import { Like } from "react-facebook";
import {
  Container,
  Inner,
  Header,
  ThumbnailImage,
  Content,
  ContentWrapper,
} from "./ArticleContentStyle";

interface Props {
  post: PostOrPage;
  commentsType?: "facebook" | "disqus";
}

const ArticleContent: React.FC<Props> = ({ post, commentsType = "disqus" }) => {
  const {
    published_at: publishedAt,
    feature_image: featureImage,
    html,
    title,
  } = post;

  const path = paths.article(post.slug, post.id);

  return (
    <Container>
      <Inner>
        <ContentWrapper>
          <Header>
            <Title>{title}</Title>
            <Lead as="div">{dayjs(publishedAt).format("DD.MM.YYYY")}</Lead>
          </Header>
          <AuthorHeader post={post} />
        </ContentWrapper>
        <ThumbnailImage src={featureImage} alt={title} />
        <ContentWrapper>
          <GoogleAd id="myp3-article-before" />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <GoogleAd id="myp3-article-after" />
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
        </ContentWrapper>
      </Inner>
    </Container>
  );
};

export default ArticleContent;
