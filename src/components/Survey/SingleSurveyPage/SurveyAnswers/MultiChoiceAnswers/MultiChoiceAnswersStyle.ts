import styled, {
  css,
  DefaultTheme,
  SimpleInterpolation,
} from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { darken, lighten, transparentize } from "polished";
import { SurveyAnswerType } from "@generated/graphql";

export const Answers = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 15rem);

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
  selected: boolean,
  heavy?: boolean
): Record<SurveyAnswerType, SimpleInterpolation> => ({
  [SurveyAnswerType.Agree]: buttonStyle({
    selected,
    primary: darken(heavy ? 0.1 : 0, theme.colors.green),
    secondary: theme.colors.backgroundLighten,
  }),
  [SurveyAnswerType.Disagree]: buttonStyle({
    selected,
    primary: darken(heavy ? 0.1 : 0, theme.colors.red),
    secondary: theme.colors.backgroundLighten,
  }),
  [SurveyAnswerType.Neutral]: buttonStyle({
    selected,
    primary: lighten(0.2, theme.colors.textMuted),
    secondary: theme.colors.backgroundLighten,
  }),
});

interface AnswerButtonProps {
  filled?: boolean;
  variant: SurveyAnswerType;
  selected?: boolean;
  heavy?: boolean;
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

  ${({ theme, variant, selected, heavy }) => {
    return answerButtonStyle(theme, selected, heavy)[variant];
  }};
`;
