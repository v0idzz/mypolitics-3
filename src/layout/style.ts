import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const ContentWrapper = styled.div`
  min-height: 80vh;
  margin-bottom: 4rem;

  ${breakpoint("md")`
    margin-bottom: 6rem;
  `};
`;
