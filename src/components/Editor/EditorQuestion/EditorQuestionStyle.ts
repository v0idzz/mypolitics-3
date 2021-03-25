import styled, { css } from "styled-components";
import { mix, transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";
import { spacingX, spacingY } from "@utils/stylesUtils";
import { AnswerElementContainer } from "@components/Results/ResultsAnswerEffect/ResultsAnwerEffectStyle";

export const NumberWrapper = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }
`;

export const Row = styled.div`
  display: flex;

  ${breakpoint("xs", "md")`
    ${spacingY(1)};
    flex-direction: column;
  `};

  ${breakpoint("md")`
    ${spacingX(1)};
    justify-content: space-between;
    
    & > div {
      width: 50%;
    }
  `};
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OpenButton = styled.button<{ opened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 0;
  background: transparent;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.5rem;

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Info = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem;
  width: 100%;
`;
