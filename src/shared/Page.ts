import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const PageContainer = styled.main`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 4rem;
  overflow: hidden;

  ${breakpoint("xs", "md")`
    grid-gap: 1rem;
  `};
`;
