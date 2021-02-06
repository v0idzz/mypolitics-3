import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;

  ${breakpoint("md")`
    padding: 3rem;
    grid-gap: 3rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;

  ${breakpoint("md")`
    font-size: 1.5rem;
  `}

  & > div {
    display: flex;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: inherit;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.75rem;

  ${breakpoint("md")`
    grid-gap: 1rem;
  `}
`;
