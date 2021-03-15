import styled, { css } from "styled-components";
import { SurveyAnswerType } from "@generated/graphql";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;

  ${breakpoint("xs", "sm")`
    flex-direction: column;
  `}
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoint("xs", "sm")`
    margin-bottom: 1rem;
  `}
`;

export const Number = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const Question = styled(Number)`
  max-width: 35rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  line-height: 1.3;
  margin-bottom: 0;
  margin-right: 1rem;
`;

export const HeaderButton = styled.button<{ opened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 0;
  background: transparent;
  color: inherit;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Content = styled(Header)`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  width: 100%;
  grid-gap: 1rem;
`;

export const Container = styled.div<{ type: SurveyAnswerType }>`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.backgroundDarken};

  ${({ type, theme }) => {
    const borderColor: Record<SurveyAnswerType, string> = {
      [SurveyAnswerType.Agree]: theme.colors.green,
      [SurveyAnswerType.Disagree]: theme.colors.red,
      [SurveyAnswerType.Neutral]: "transparent",
    };

    return `border: 1px solid ${borderColor[type]}`;
  }};
`;

export const SubHeader = styled.div<{ type: SurveyAnswerType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  ${breakpoint("xs", "sm")`
    flex-direction: column;
  `}

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  }

  ${({ type, theme }) => {
    const backgroundColor: Record<SurveyAnswerType, string> = {
      [SurveyAnswerType.Agree]: theme.colors.green,
      [SurveyAnswerType.Disagree]: theme.colors.red,
      [SurveyAnswerType.Neutral]: theme.colors.textMuted,
    };

    return `background: ${backgroundColor[type]}`;
  }};
`;

export const IdeologyWrapper = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background: ${({ background }) => background};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  border: 0;
  cursor: pointer;

  & > img {
    height: 1rem;
    width: 1rem;
  }
`;

export const PartyImage = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  display: block;
`;

export const Chip = styled.div<{ variant: "neutral" | "agree" | "disagree" }>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  text-align: right;

  ${breakpoint("xs", "md")`
    padding: 0.5rem;
    font-size: 1rem;
  `}

  img {
    height: 1rem;
    width: 1rem;
    border-radius: 0.125rem;
    margin-left: 0.5rem;
  }

  ${({ variant }) => {
    const variants = {
      netural: css`
        background: ${({ theme }) =>
          transparentize(0.5, theme.colors.background)};
        color: ${({ theme }) => theme.colors.textMuted};
        text-align: center;
      `,
      agree: css`
        background: ${({ theme }) => transparentize(0.9, theme.colors.green)};
        color: ${({ theme }) => theme.colors.green};
        flex-shrink: 0;
      `,
      disagree: css`
        background: ${({ theme }) => transparentize(0.9, theme.colors.red)};
        color: ${({ theme }) => theme.colors.red};
        flex-shrink: 0;
      `,
    };

    return variants[variant];
  }}
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;
