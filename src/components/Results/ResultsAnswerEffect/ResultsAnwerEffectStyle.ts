import styled from "styled-components";
import { SurveyAnswerType } from "@generated/graphql";
import breakpoint from "styled-components-breakpoint";

export const AnswerElementTitleWrapper = styled.div`
  display: flex;
`;

export const AnswerElementTitle = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const AnswerElementContent = styled(AnswerElementTitle)`
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 0;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};

  p {
    margin: 0;
    white-space: nowrap;
  }

  & > * {
    margin: 0.25rem;
  }
`;

export const AnswerElementContainer = styled.div<{ type: SurveyAnswerType }>`
  display: flex;
  flex-direction: column;
  justify-content: left;

  ${({ type, theme }) => {
    const backgroundColorVariants: Record<SurveyAnswerType, string> = {
      [SurveyAnswerType.Agree]: theme.colors.green,
      [SurveyAnswerType.Disagree]: theme.colors.red,
      [SurveyAnswerType.Neutral]: theme.colors.textMuted,
    };
    const backgroundColor = backgroundColorVariants[type];

    return `
      ${AnswerElementTitle} {
        background: ${backgroundColor};
      }
      
      ${AnswerElementContent} {
        border: 2px solid ${backgroundColor};
        background: ${theme.colors.background};
      }
    `;
  }};
`;
