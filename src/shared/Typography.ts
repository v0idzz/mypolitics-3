import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.2;

  ${breakpoint("md")`
    font-size: 1.75rem;
  `};

  ${breakpoint("lg")`
    font-size: 2.25rem;
  `};
`;

export const Lead = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.background};
  opacity: 1;
  font-weight: ${({ theme }) => theme.fontWeight.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.5;

  ${breakpoint("md")`
    font-size: 1.25rem;
  `};

  ${breakpoint("lg")`
    font-size: 1.5rem;
  `};
`;
