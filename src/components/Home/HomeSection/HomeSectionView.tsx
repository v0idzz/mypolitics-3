import React from "react";
import {
  Container,
  Inner,
  Content,
  Title,
  Header,
  Slogan,
  ContentFill,
  IconWrapper,
  AdditionalContent,
} from "./HomeSectionStyle";

interface Props {
  title: string;
  slogan: string;
  variant: "left" | "right";
  icon: React.FC;
  content: JSX.Element;
  additionalContent: JSX.Element;
}

const HomeSection: React.FC<Props> = ({
  title,
  slogan,
  variant,
  content,
  additionalContent,
  icon: Icon,
}) => (
  <Container>
    <Inner>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Header>
        <Slogan>{slogan}</Slogan>
        <Title>{title}</Title>
      </Header>
      <Content>
        <ContentFill />
        {content}
        <AdditionalContent>
          {additionalContent}
        </AdditionalContent>
      </Content>
    </Inner>
  </Container>
);

export default HomeSection;
