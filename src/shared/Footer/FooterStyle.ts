import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import breakpoints from "@theme/breakpoints";
import { darken } from "polished";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.primaryDarken};
  padding: 2rem 0;

  ${breakpoint("xs", "xl")`
    padding: 2rem 1rem;
  `};
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: ${breakpoints.xl}px;
  margin: auto;

  ${breakpoint("xs", "md")`
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `};
`;

export const Copyright = styled.section`
  display: flex;
  align-items: center;

  ${breakpoint("xs", "md")`
    margin-bottom: 2rem;
    flex-direction: column;
  `};
`;

export const MainCopyright = styled.div`
  display: flex;

  ${breakpoint("xs", "md")`
    margin-bottom: 1rem;
  `};
`;

export const Title = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};

  ${breakpoint("md")`
    margin-right: 2rem;
  `};
`;

export const MainLogo = styled.img`
  display: block;
  margin-right: 0.5rem;
  height: 1rem;
`;

export const CopyrightGroup = styled.div`
  background: ${({ theme }) => darken(0.025, theme.colors.primaryDarken)};
  display: flex;
  padding: 0.75rem;
  border-radius: 0.5rem;
`;

export const GroupLogo = styled.img`
  display: block;
  opacity: 0.5;
  height: 0.75rem;

  &:not(:last-child) {
    margin-right: 0.75rem;
  }
`;

export const Links = styled.section`
  display: flex;
  flex-direction: column;
`;

export const SocialLinksWrapper = styled.div`
  justify-content: flex-end;
  display: inline-flex;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-right: -0.5rem;

  ${breakpoint("md")`
    margin-bottom: 1.5rem;
    margin-right: -0.75rem;
    text-align: right;
  `};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => darken(0.05, theme.colors.primaryDarken)};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  transition: 0.2s ease-in-out;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  ${breakpoint("md")`
    margin-right: 0.75rem;
  `};

  &:hover {
    background: ${({ theme }) => darken(0.075, theme.colors.primaryDarken)};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;

export const WebsiteLinksWrapper = styled.div`
  display: inline;
  text-align: center;

  ${breakpoint("md")`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    flex-shrink: 0;
  `};

  a {
    display: inline;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.backgroundLighten};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    font-family: ${({ theme }) => theme.fontFamily.secondary};

    &:not(:last-child) {
      margin-right: 0.75rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
