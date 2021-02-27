import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Element = styled.button<{ active: boolean; light: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background: ${({ theme, light }) =>
    light ? theme.colors.background : theme.colors.backgroundDarken};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &:not(:first-child) {
    border-left: 1px solid
      ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  }

  &:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  ${({ active, theme }) =>
    active &&
    `
    background: ${theme.colors.primary};
    color: ${theme.colors.backgroundLighten};
  `}
`;
