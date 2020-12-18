import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 4rem;
  overflow: hidden;
  
  ${breakpoint("md")`
    grid-gap: 6rem;
  `};
`;
