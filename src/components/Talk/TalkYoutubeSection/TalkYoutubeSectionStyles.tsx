import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
`;

export const Heading = styled.h2`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 1.25rem;
  text-align: center;

  ${breakpoint("md")`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  `};

  ${breakpoint("lg")`
    font-size: 1.5rem;
  `};
`;
