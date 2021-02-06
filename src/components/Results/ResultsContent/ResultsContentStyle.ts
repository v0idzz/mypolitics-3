import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  overflow: hidden;

  ${breakpoint("md")`
    grid-gap: 1.5rem;
    padding: 3rem;
  `}
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  grid-gap: 1rem;

  ${breakpoint("md")`
    grid-template-columns: 55fr 45fr;
    width: 100%;
    grid-gap: 1.5rem;
  `}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
