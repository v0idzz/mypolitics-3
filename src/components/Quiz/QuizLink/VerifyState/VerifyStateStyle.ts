import styled, { css } from "styled-components";
import { QuizVerificationState } from "@generated/graphql";
import { transparentize } from "polished";
import { Chip } from "../QuizLinkStyle";

export const Container = styled(Chip)<{ state: QuizVerificationState }>`
  button {
    padding: 0.33rem;
    margin: -0.33rem -0.33rem -0.33rem 0.5em;
    border: 0;
    border-radius: 0.25rem;
    transition: 0.2s ease-in-out;
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    cursor: pointer;
    font-size: 0.9rem;

    &:hover {
      filter: brightness(95%);
    }
  }

  ${({ theme, state }) => {
    const color = {
      [QuizVerificationState.Accepted]: theme.colors.green,
      [QuizVerificationState.Declined]: theme.colors.red,
      [QuizVerificationState.Idle]: theme.colors.primary,
    }[state];

    return css`
      background: ${transparentize(0.9, color)} !important;
      color: ${color} !important;

      button {
        background: ${color};
        color: ${theme.colors.backgroundLighten};
      }
    `;
  }}

  svg {
    height: 1em;
    width: 1em;
    margin-right: 0.5em;
  }
`;
