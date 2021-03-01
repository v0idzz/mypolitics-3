import styled from "styled-components";
import { getSizes, getVariants } from "@shared/ActionButton/ActionButtonsUtils";
import { darken } from "polished";
import { Size, Variant } from "./ActionButtonTypes";

export const Container = styled.button<{
  variant: Variant;
  confirm: boolean;
  size: Size;
}>`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:last-child {
    margin-left: 0.25rem;
  }

  ${({ theme, variant }) => {
    const variants = getVariants(theme);
    return variants[variant];
  }}

  ${({ theme, size }) => {
    const sizes = getSizes(theme);
    return sizes[size];
  }}

  svg {
    color: inherit;
  }

  ${({ theme, confirm }) =>
    confirm &&
    `
    background: ${theme.colors.red};
      color: ${theme.colors.backgroundLighten};

    &:hover {
      background: ${darken(0.05, theme.colors.red)};
    }
  `}
`;
