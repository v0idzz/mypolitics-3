import styled, { css } from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div<{ highlighted: boolean }>`
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

  ${({ highlighted }) =>
    highlighted &&
    css`
      ${breakpoint("md")`
        padding: 1rem;
      `};
      max-width: ${({ theme }) => theme.breakpoints.xl + 32}px;
      box-shadow: 0 0 16px rgba(0, 86, 105, 0.25);
      background: ${({ theme }) =>
        transparentize(0.05, theme.colors.primaryDarken)};
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
