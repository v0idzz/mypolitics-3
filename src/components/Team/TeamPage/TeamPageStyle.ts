import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;
  max-width: 900px;
  margin: auto;

  ${breakpoint("xs", "sm")`
    grid-gap: 1.5rem;
    width: 100%;
  `};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundDarken};
`;

export const DeptWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;

  ${breakpoint("xs", "md")`
    grid-gap: 1rem;
  `};
`;

export const DeptHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
`;

export const DeptImage = styled.img`
  display: block;
  height: 1.5rem;
  width: auto;
  box-shadow: 0 0 24px 0
    ${({ theme }) => transparentize(0.67, theme.colors.primary)};
`;

export const DeptInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;

  ${breakpoint("xs", "md")`
    grid-template-columns: 100%;
    grid-gap: 1rem;
  `};

  & > div div:not(:last-child) {
    margin-bottom: 0.75rem;

    ${breakpoint("xs", "md")`
      margin-bottom: 0.5rem;
    `};
  }
`;
