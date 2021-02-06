import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Side } from "../ResultsAxisSide/ResultsAxisSideTypes";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  grid-template-columns: 100%;
`;

export const Inner = styled.div<{ percentages: Record<Side, number> }>`
  display: grid;
  grid-template-rows: auto auto;
  width: 100%;
  ${({ percentages }) => {
    const { left, center, right } = percentages;

    return css`
      grid-template-columns: 3.5rem ${left}fr ${center}fr ${right}fr 3.5rem;
    `;
  }}
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 0.5rem;
  margin: auto;
  width: calc(100% - 3.5rem);
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  ${breakpoint("md")`
    width: calc(100% - 7rem);
  `}
`;
