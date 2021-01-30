import { css, DefaultTheme } from "styled-components";
import { darken } from "polished";
import { Sizes, Backgrounds } from "./ButtonTypes";

export const sizes: Sizes = {
  middle: css`
    padding: 1rem;
    font-size: 1rem;
    line-height: 100%;
    border-radius: 0.5rem;
  `,
  large: css`
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
    line-height: 100%;
    border-radius: 0.5rem;
  `,
};

export const getBackgrounds = (
  theme: DefaultTheme,
  showShadow: boolean
): Backgrounds => ({
  blue: css`
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.primary)};
    }

    ${showShadow &&
    `
      box-shadow: 0px 0px 24px rgba(0, 179, 219, 0.33);
    `}
  `,
  black: css`
    background: rgba(0, 0, 0, 0.8);
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${darken(0.0125, "rgba(0, 0, 0, 0.8)")};
    }

    ${showShadow &&
    `
      box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.33);
    `}
  `,
  gray: css`
    background: ${theme.colors.backgroundDarken};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.backgroundDarken)};
    }

    ${showShadow &&
    `
      box-shadow: 0px 0px 24px rgba(0, 179, 219, 0.33);
    `}
  `,
});
