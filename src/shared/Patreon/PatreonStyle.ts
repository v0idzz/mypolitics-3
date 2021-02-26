import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

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

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 160px);
  color: ${({ theme }) => theme.colors.textMuted};
  grid-gap: 1rem;

  p {
    margin: 0;
    padding: 0;
  }
  
  ${breakpoint("xs", "md")`
    grid-gap: 0.75rem;
  `};
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
