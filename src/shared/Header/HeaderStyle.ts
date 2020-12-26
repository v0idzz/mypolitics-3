import styled, { css } from "styled-components";
import { darken, transparentize } from 'polished';
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div<{
  highlighted: boolean;
  noTransparent: boolean;
}>`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  z-index: 100;
  transition: 0.2s ease-in-out;
  padding: 1.25rem 1rem;

  ${breakpoint("xl")`
    border-radius: 1rem;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 0;
  `}

  ${({ theme, highlighted, noTransparent }) =>
    highlighted &&
    css`
      ${breakpoint("md")`
        padding: 1rem;
      `};
      max-width: ${theme.breakpoints.xl + 32}px;
      box-shadow: 0 0 16px rgba(0, 86, 105, 0.25);
      background: ${noTransparent
        ? theme.colors.primaryDarken
        : transparentize(0.05, theme.colors.primaryDarken)};
    `}
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    transition: 0.2s ease-in-out;
  }
`;

export const Logo = styled.img`
  display: block;
  height: 1.25rem;
  width: auto;
  cursor: pointer;

  ${breakpoint("md")`
    height: 1.5rem;
  `}
`;

export const DesktopNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: right;

  ${breakpoint("xs", "md")`
    display: none;
  `}

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    margin-right: 1.5rem;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const MobileNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;

  ${breakpoint("md")`
    display: none;
  `}
`;

export const MobileNavigationButton = styled.button`
  display: flex;
  padding: 0;
  border: 0;
  background: transparent;
  margin: 0 0 0 1rem;

  svg {
    height: 1.5rem;
    min-width: 1.5rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;

export const MobileNavigation = styled.div<{ show: boolean }>`
  position: fixed;
  top: 4.5rem;
  right: -100%;
  transition: right 0.3s ease-in-out;
  box-shadow: 0 0 16px rgba(0, 86, 105, 0.25);
  background: ${({ theme }) => darken(0.05, theme.colors.primaryDarken)};
  height: calc(100% - 4.5rem);
  padding: 1.5rem;
  width: min(90%, 25rem);

  ${({ show }) =>
    show &&
    css`
      right: 0;
    `}
`;

export const MobileNavigationInner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;

  a {
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.backgroundLighten};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }
`;
