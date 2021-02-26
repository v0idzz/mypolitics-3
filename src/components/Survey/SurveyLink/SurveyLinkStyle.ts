import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const ListElement = styled.a`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Chips = styled.span<{ background: "yellow" | "green" }>`
  margin-left: 1rem;
  padding: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;
  ${breakpoint("xs", "md")`
    padding: 0.5rem;
  `}

  ${({ background, theme }) =>
    background === "yellow"
      ? `
    background: ${theme.colors.yellow};
    box-shadow: 0px 0px 24px rgba(242, 201, 76, 0.5);
  `
      : `
    background: ${theme.colors.green};
    box-shadow: 0px 0px 24px 0px #2CD598 50%;
  `}
`;

export const RemoveButton = styled.button<{ clicked: boolean }>`
  padding: 0.75rem;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => transparentize(0.9, theme.colors.red)};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.red)};
  }

  ${({ clicked, theme }) =>
    clicked &&
    `
      &, &:hover {
        background: ${theme.colors.red};
        color: ${theme.colors.backgroundLighten};
      }
  `}
`;
