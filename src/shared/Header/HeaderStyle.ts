import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";
import { Wrapper as LanguageSelectWrapper } from "@shared/LanguageSelect/LanguageSelectStyle";
import { Container as UserInfoContainer } from "@shared/UserInfo/UserInfoStyle";

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

  ${breakpoint("md")`
    ${({ highlighted }) =>
      highlighted &&
      css`
        padding: 1rem;
      `}
  `}

  ${breakpoint("xl")`
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 0;
  `}

  &::before {
    content: "";
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
    position: absolute;
    width: 100%;
    -webkit-backdrop-filter: blur(0);
    backdrop-filter: blur(0);
    transition: 0.2s ease-in-out;
    z-index: -1;

    ${({ theme, highlighted, noTransparent }) =>
      highlighted &&
      css`
        ${breakpoint("md")`
          width: calc(100% + 2rem);
        `};
        ${breakpoint("xl")`
          border-radius: 1rem;
        `};
        box-shadow: 0 0 16px rgba(0, 86, 105, 0.25);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        background: ${noTransparent
          ? theme.colors.primaryDarken
          : transparentize(0.05, theme.colors.primaryDarken)};
      `}
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint("md")`
    height: 3rem;
  `}

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

  ${breakpoint("xs", "lg")`
    display: none;
  `}

  a {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }

  & ~ ${LanguageSelectWrapper}, & ~ ${UserInfoContainer} {
    margin-left: 0.75rem;
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

  ${breakpoint("lg")`
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

export const MobileNavigation = styled.div<{
  show: boolean;
  buttonPadding: boolean;
}>`
  position: fixed;
  top: 4.5rem;
  right: -100%;
  transition: right 0.3s ease-in-out;
  box-shadow: 0 0 16px rgba(0, 86, 105, 0.25);
  background: ${({ theme }) => darken(0.05, theme.colors.primaryDarken)};
  height: calc(100vh - 4.5rem);
  padding: 1.5rem;
  width: min(90%, 25rem);

  ${breakpoint("md")`
    top: 5rem;
    height: calc(100vh - 5rem);
  `};

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
`;

export const LinkContentWrapper = styled.div<{ current: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  transition: 0.2s ease-in-out;

  & > span:first-child {
    margin-right: 0.5rem;
  }

  &:hover {
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 0.5rem;
    background: rgba(0, 179, 219, 0.1);
  }

  ${({ current }) =>
    current &&
    `
    padding: 0.5rem;
    margin: -0.5rem;
    border-radius: 0.5rem;
    background: rgba(0, 179, 219, 0.1);
  `}
`;

export const NavDivider = styled.div`
  background: rgba(255, 255, 255, 0.1);
  width: 100%;
  height: 1px;

  &:last-child {
    display: none;
  }

  ${breakpoint("lg")`
    background: rgba(255, 255, 255, 0.25);
    height: 1em;
    width: 1px;
    margin: 0 1rem;
  `}
`;
