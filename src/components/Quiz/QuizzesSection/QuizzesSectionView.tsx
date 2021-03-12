import React from "react";
import {
  Container,
  Title,
  Content,
  Header,
  IconWrapper,
} from "./QuizzesSectionStyle";

interface Props {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  id?: string;
}

const QuizzesSection: React.FC<Props> = ({ icon, title, children, id }) => (
  <Container id={id}>
    <Header>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </Header>
    <Content>{children}</Content>
  </Container>
);

export default QuizzesSection;
