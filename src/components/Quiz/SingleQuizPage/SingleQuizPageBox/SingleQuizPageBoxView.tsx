import React from "react";
import {
  Container,
  IconWrapper,
  Header,
  Content,
  Title,
} from "./SingleQuizPageBoxStyle";

interface Props {
  header?: {
    title: string;
    icon: React.ReactNode;
  };
  children: React.ReactNode;
}

const SingleQuizPageBox: React.FC<Props> = ({ header, children }) => (
  <Container>
    {header && (
      <Header>
        <div>
          <IconWrapper>{header.icon}</IconWrapper>
          <Title>{header.title}</Title>
        </div>
      </Header>
    )}
    <Content>{children}</Content>
  </Container>
);

export default SingleQuizPageBox;
