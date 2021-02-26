import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDarken};
  padding: 1.5rem;
  border-radius: 0.5rem;

  ${breakpoint("md")`
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  ${breakpoint("xs", "md")`
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 1.5rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: block;

  ${breakpoint("xs", "md")`
    margin: auto;
  `}
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  ${breakpoint("xs", "md")`
    grid-gap: 0.75rem;
  `}
`;

export const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 2rem;
`;
