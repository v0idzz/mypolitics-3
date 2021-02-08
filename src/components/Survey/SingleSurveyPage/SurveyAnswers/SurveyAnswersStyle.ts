import styled, {
  css,
  DefaultTheme,
  SimpleInterpolation,
} from "styled-components";
import { lighten, transparentize } from "polished";
import { SurveyAnswerType } from "@generated/graphql";
import { SlimAnswer } from "@components/Survey/utils/useSurvey";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Answers = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 5rem);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${breakpoint("xs", "sm")`
      width: 100%;
  `}

  ${breakpoint("md")`
    button:not(:last-child) {
      margin-right: 1rem;
    }
  `}

  ${breakpoint("xs", "md")`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 0.5rem;
  `}
`;

const buttonStyle = ({
  primary,
  selected,
  secondary,
}: {
  primary: string;
  secondary: string;
  selected: boolean;
}) => css`
  color: ${primary};
  border: 2px solid ${primary};

  &:hover {
    background: ${transparentize(0.9, primary)};
  }

  ${selected &&
  css`
    color: ${secondary};
    background: ${primary};

    &:hover {
      color: ${primary};
    }
  `}
`;

const answerButtonStyle = (
  theme: DefaultTheme,
  selected: boolean
): Record<SurveyAnswerType, SimpleInterpolation> => ({
  [SurveyAnswerType.Agree]: buttonStyle({
    selected,
    primary: theme.colors.green,
    secondary: theme.colors.backgroundLighten,
  }),
  [SurveyAnswerType.Disagree]: buttonStyle({
    selected,
    primary: theme.colors.red,
    secondary: theme.colors.backgroundLighten,
  }),
  [SurveyAnswerType.Neutral]: buttonStyle({
    selected,
    primary: lighten(0.33, theme.colors.textMuted),
    secondary: theme.colors.backgroundLighten,
  }),
});

interface AnswerButtonProps {
  variant: SurveyAnswerType;
  answer: SlimAnswer;
}

export const AnswerButton = styled.button<AnswerButtonProps>`
  background: transparent;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  width: 100%;

  span:not(:last-child) {
    margin-right: 0.5rem;
  }

  svg {
    font-size: 1rem;
  }

  ${({ variant, answer }) => {
    if (typeof answer === "undefined") {
      return;
    }

    if (variant !== answer.type) {
      return `display: none;`;
    }
  }}

  ${({ theme, variant, answer }) => {
    const selected = answer !== undefined && answer.type === variant;

    return answerButtonStyle(theme, selected)[variant];
  }};
`;
