import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const AdditionalContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  width: 100%;
  filter: drop-shadow(0px 0px 32px rgba(0, 86, 105, 0.25));

  ${breakpoint("md")`
    grid-template-columns: 1fr 1fr;
  `};
`;
