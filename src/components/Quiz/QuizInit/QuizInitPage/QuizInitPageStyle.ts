import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
