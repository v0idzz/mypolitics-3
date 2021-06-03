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

interface Props {
  title: string;
  slogan: string;
  variant: "left" | "right";
  illustrationUrl: string;
  content: JSX.Element;
  additionalContent: JSX.Element;
  ref?: any;
}

const HomeSection: React.FC<Props> = ({
  title,
  slogan,
  variant,
  content,
  additionalContent,
  illustrationUrl,
  ref,
}) => (
  <Container variant={variant}>
    <div className="container" ref={ref}>
      <Illustration src={illustrationUrl} alt={title} />
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
