import { css, DefaultTheme } from "styled-components";
import { transparentize } from "polished";
import { Sizes, Variants } from "./ActionButtonTypes";

export const getVariants = (theme: DefaultTheme): Variants => ({
  bluish: css`
    background: ${transparentize(0.9, theme.colors.primary)};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${transparentize(0.85, theme.colors.primary)};
    }
  `,
  white: css`
    background: ${transparentize(0.8, theme.colors.backgroundLighten)};
    color: ${theme.colors.backgroundLighten};
    border: none;

    &:hover {
      background: ${transparentize(0.7, theme.colors.backgroundLighten)};
    }
  `,
  red: css`
    background: ${transparentize(0.9, theme.colors.red)};
    color: ${theme.colors.red};
    border: none;
  `,
});

export const getSizes = (theme: DefaultTheme): Sizes => ({
  regular: css`
    border-radius: 0.125rem;
    height: 1.5rem;
    width: 1.5rem;

    svg {
      font-size: 0.75rem;
    }
  `,
  large: css`
    border-radius: 0.25rem;
    height: 2rem;
    width: 2rem;

    svg {
      font-size: 1rem;
    }
  `,
});
