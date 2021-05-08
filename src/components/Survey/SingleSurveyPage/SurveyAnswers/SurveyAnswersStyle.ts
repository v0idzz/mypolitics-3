import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import Toggle from "@shared/Toggle";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AnsweringModeToggle = styled(Toggle)`
  margin-bottom: 0.75rem;

  ${breakpoint("md")`
    margin-bottom: 1.5rem;
  `}
`;
