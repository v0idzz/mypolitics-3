import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  ${breakpoint("md")`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `}
`;

export const ButtonChips = styled.span<{ background: "blue" | "gray" }>`
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  margin-left: 1em;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};

  background: ${({ theme, background }) =>
    background === "blue" ? theme.colors.primary : theme.colors.background};
  color: ${({ theme, background }) =>
    background === "blue" ? theme.colors.background : theme.colors.primary};
`;
