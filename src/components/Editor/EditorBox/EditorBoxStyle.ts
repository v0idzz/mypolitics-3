import styled from "styled-components";
import { spacingY } from "@utils/stylesUtils";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  ${spacingY(1)};
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};

  ${breakpoint("xs", "sm")`
    ${spacingY(0.75)};
    padding: 1rem;
  `}
`;

export const SideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${spacingY(1)};
`;
