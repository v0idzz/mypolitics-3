import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const RandomContentWrapper = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint("md")`
    iframe {
      max-width: 800px;
    }      
  `};
`;
