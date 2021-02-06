import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  ${breakpoint("md")`
    grid-gap: 4rem;
    margin-top: 4rem;
  `}
`;

export const Content = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  width: 100%;

  ${breakpoint("md")`
    grid-gap: 2rem;
  `}
`;
