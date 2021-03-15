import { css, DefaultTheme, keyframes } from "styled-components";
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

const pulse = (color) => keyframes`
  0% {
		box-shadow: 0 0 0 0 ${transparentize(0.3, color)};
	}

	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

export const getBackgrounds = (
  theme: DefaultTheme,
  {
    showShadow,
    pulsating,
  }: {
    showShadow?: boolean;
    pulsating: boolean;
  }
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
    `};

    ${pulsating &&
    css`
      animation: ${pulse(theme.colors.primary)} 2s infinite;
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

    ${pulsating &&
    css`
      animation: ${pulse(transparentize(0.9, theme.colors.primary))} 2s infinite;
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

    ${pulsating &&
    css`
      animation: ${pulse("rgba(0, 0, 0, 0.8)")} 2s infinite;
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

    ${pulsating &&
    css`
      animation: ${pulse(theme.colors.backgroundDarken)} 2s infinite;
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

    ${pulsating &&
    css`
      animation: ${pulse("#6f87e3")} 2s infinite;
    `}
  `,
  facebook: css`
    background: #1773ea;
    color: ${theme.colors.background};
    border: none;

    &:hover {
      background: ${darken(0.0125, "#1773EA")};
    }

    // TODO: Implement proper box-shadow
    ${showShadow &&
    `
      box-shadow: 0px 0px 24px #1773EA;
    `}

    ${pulsating &&
    css`
      animation: ${pulse("#1773EA")} 2s infinite;
    `}
  `,
});
