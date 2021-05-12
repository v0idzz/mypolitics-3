import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { spacingY } from "@utils/stylesUtils";

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 15rem);

  ${spacingY(0.5)}

  ${breakpoint("xs", "sm")`
      width: 100%;
  `}
`;
