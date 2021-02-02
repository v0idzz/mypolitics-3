import styled, { css } from "styled-components";
import { Side } from "../ResultsAxisSide/ResultsAxisSideTypes";

export const Container = styled.div<{ percentages: Record<Side, number> }>`
  display: grid;
  width: 100%;
  ${({ percentages }) => {
    const { left, center, right } = percentages;

    return css`
      grid-template-columns: 3.5rem ${left}fr ${center}fr ${right}fr 3.5rem;
    `;
  }}
`;
