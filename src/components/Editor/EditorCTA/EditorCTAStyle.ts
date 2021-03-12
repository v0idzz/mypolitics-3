import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-size: 1.1rem;
  text-align: center;

  & > div:first-child {
    margin-bottom: 1rem;

    ${breakpoint("md")`
      margin-bottom: 2rem;
    `};
  }

  b {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }

  ${breakpoint("md")`
    font-size: 1.25rem;
    padding: 2rem;
  `};
`;
