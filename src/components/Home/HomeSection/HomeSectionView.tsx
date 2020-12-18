import React from "react";
import { Title } from "@shared/Typography";
import {
  Container,
  Inner,
  Content,
  Header,
  ContentFill,
  Illustration,
  AdditionalContent,
  ContentInner,
  Lead,
} from "./HomeSectionStyle";

interface Props {
  title: string;
  slogan: string;
  variant: "left" | "right";
  illustrationUrl: string;
  content: JSX.Element;
  additionalContent: JSX.Element;
}

const HomeSection: React.FC<Props> = ({
  title,
  slogan,
  variant,
  content,
  additionalContent,
  illustrationUrl,
}) => (
  <Container variant={variant}>
    <Inner>
      <Illustration
        src={illustrationUrl}
        alt={title}
      />
      <Header>
        <Lead>{slogan}</Lead>
        <Title>{title}</Title>
      </Header>
      <Content>
        <ContentFill />
        <ContentInner>{content}</ContentInner>
        <AdditionalContent>{additionalContent}</AdditionalContent>
      </Content>
    </Inner>
  </Container>
);

export default HomeSection;
