import React from "react";
import { Title, Lead } from "@shared/Typography";
import { Container, Header, Divider, Content } from "./QuizInitStepStyle";

interface Props {
  title: string;
  lead?: string;
  showDivider?: boolean;
  children: React.ReactNode;
}

const QuizInitStep: React.FC<Props> = ({
  title,
  lead,
  showDivider = false,
  children,
}) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      {lead && <Lead>{lead}</Lead>}
    </Header>
    {showDivider && <Divider />}
    <Content>{children}</Content>
  </Container>
);

export default QuizInitStep;
