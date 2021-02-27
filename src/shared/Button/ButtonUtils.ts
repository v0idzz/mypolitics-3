import { css, DefaultTheme } from "styled-components";
import { darken, transparentize } from "polished";
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
  bluish: css`
    background: ${transparentize(0.9, theme.colors.primary)};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${transparentize(0.85, theme.colors.primary)};
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
  white: css`
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    border: none;

    &:hover {
      background: ${darken(0.0125, theme.colors.background)};
    }

    // TODO: Implement proper box-shadow
    ${showShadow &&
    `
      box-shadow: 0px 0px 24px ${theme.colors.background};
    `}
  `,
  discord: css`
    background: #6f87e3;
    color: ${theme.colors.background};
    border: none;

    &:hover {
      background: ${darken(0.0125, "#6f87e3")};
    }

    // TODO: Implement proper box-shadow
    ${showShadow &&
    `
      box-shadow: 0px 0px 24px #6f87e3;
    `}
  `,
});
