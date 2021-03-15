import React from "react";
import { SurveyAnswerType } from "@generated/graphql";
import {
  AnswerElementContainer,
  AnswerElementContent,
  AnswerElementTitle,
  AnswerElementTitleWrapper,
} from "./ResultsAnwerEffectStyle";

interface Props {
  title: React.ReactNode;
  children: React.ReactNode;
  type: SurveyAnswerType;
  ref?: any;
}

const AnswerElement: React.FC<Props> = ({ title, ref, children, type }) => (
  <AnswerElementContainer ref={ref} type={type}>
    <AnswerElementTitleWrapper>
      <AnswerElementTitle>{title}</AnswerElementTitle>
    </AnswerElementTitleWrapper>
    <AnswerElementContent>{children}</AnswerElementContent>
  </AnswerElementContainer>
);

export default AnswerElement;
