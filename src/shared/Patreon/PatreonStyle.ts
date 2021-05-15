import styled, { css, DefaultTheme } from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";
import { ParsedPatreonTypeExceptRegular } from "@shared/Patreon/types";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  max-width: 900px;
  margin: auto;

  ${breakpoint("md")`
    grid-gap: 2rem;
    padding: 3rem;
  `};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  background: #ed1b2d;
  box-shadow: 0 0 24px 0 ${transparentize(0.67, "#ED1B2D")};
  padding: 1rem;

  ${breakpoint("xs", "md")`
    flex-direction: column;
    justify-content: center;
  `};
`;

export const Logo = styled.img`
  display: block;
  height: 2rem;
  width: auto;

  ${breakpoint("xs", "md")`
    margin-bottom: 1rem;
  `};
`;

export const HeaderText = styled.div`
  text-align: right;
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 0.9rem;
  max-width: 66%;
  line-height: 1.4;

  ${breakpoint("xs", "md")`
    text-align: center;
  `};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.5rem;

  ${breakpoint("xs", "md")`
    grid-gap: 1rem;
    padding: 1rem;
  `};
`;

export const ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  color: ${({ theme }) => theme.colors.textMuted};
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0;
    padding: 0;
  }

  ${breakpoint("xs", "md")`
    grid-gap: 0.75rem;
  `};
`;

const getPatreonsColor = (
  patreonType: ParsedPatreonTypeExceptRegular,
  theme: DefaultTheme
) => (patreonType === "diamond" ? theme.colors.primary : theme.colors.yellow);

interface BasePatreonProps {
  type?: ParsedPatreonTypeExceptRegular;
}

export const PatreonsContainer = styled.section<BasePatreonProps>`
  ${({ type }) =>
    type === "diamond" &&
    css`
      flex-direction: column;
    `}
  border-radius: 0.5rem;
  align-items: center;
  display: flex;
  background: ${({ theme, type }) =>
    transparentize(0.9, getPatreonsColor(type, theme))};
  padding: 1rem;

  & > h3 {
    border-radius: 0.5rem;
    background: ${({ theme, type }) => getPatreonsColor(type, theme)};
    padding: 0.5rem;
    color: white;
    white-space: nowrap;

    & > span {
      margin-right: 0.5rem;
    }
  }
`;

export const PatreonsList = styled.ul<BasePatreonProps>`
  ${({ type }) =>
    type === "diamond" &&
    css`
      flex-direction: column;
    `}

  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  flex-grow: 1;
  margin-top: ${({ type }) => (type === "diamond" ? "0.5rem" : "0")};
  margin-bottom: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  font-size: ${({ type }) => (type === "diamond" ? "1.25rem" : "1.125rem")};
  text-align: center;
  white-space: nowrap;
  flex-wrap: wrap;
  color: ${({ theme, type }) => getPatreonsColor(type, theme)};

  & > li {
    padding: 0.25rem 0.5rem;
  }
`;

export const Date = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 0.9rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};

  ${breakpoint("md")`
    font-size: 1.25rem;
  `};
`;
