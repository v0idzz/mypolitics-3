import React from "react";
import { Title } from "@shared/Typography";
import {
  Container,
  Content,
  Header,
  ContentFill,
  Illustration,
  AdditionalContent,
  ContentInner,
  Lead,
} from "./HomeSectionStyle";

interface ImageUrl {
  src: string;
  srcSet: string;
}

interface Props {
  title: string;
  slogan: string;
  variant: "left" | "right";
  content: JSX.Element;
  additionalContent: JSX.Element;
  ref?: any;
  illustrationUrls: {
    modern: string;
    fallback: ImageUrl;
  };
}

const HomeSection: React.FC<Props> = ({
  title,
  slogan,
  variant,
  content,
  additionalContent,
  illustrationUrls,
  ref,
}) => (
  <Container variant={variant}>
    <div className="container" ref={ref}>
      <Illustration>
        <source srcSet={illustrationUrls.modern} type="image/webp" />
        <source srcSet={illustrationUrls.fallback.srcSet} type="image/png" />
        <img src={illustrationUrls.fallback.src} alt={title} />
      </Illustration>
      <Header>
        <Lead>{slogan}</Lead>
        <Title>{title}</Title>
      </Header>
      <Content>
        <ContentFill />
        <ContentInner>{content}</ContentInner>
        <AdditionalContent>{additionalContent}</AdditionalContent>
      </Content>
    </div>
  </Container>
);

export default HomeSection;
