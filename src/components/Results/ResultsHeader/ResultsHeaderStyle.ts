import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from "polished";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1rem);
  padding: 1rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  ${breakpoint("md")`
    width: calc(100% - 6rem);
    padding: 2rem;
  `}

  ${breakpoint("xs", "md")`
    display: grid;
    grid-gap: 1rem;
    text-align: center;
    grid-template-columns: 100%;
  `}
`;

export const PoliticianSubHeader = styled(Header)`
  border-radius: 0;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding: 1.25rem;
  text-align: center;
  justify-content: center;

  ${breakpoint("md")`
    font-size: 1.25rem;
    padding: 1.5rem;
  `}
`;

export const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryDarken};
  width: calc(100% - 1rem);
  margin: auto;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    background: ${({ theme }) =>
      transparentize(0.9, theme.colors.backgroundLighten)};
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }

  ${breakpoint("xs", "sm")`
    flex-direction: column;
    
    span {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  `}

  ${breakpoint("md")`
    width: calc(100% - 6rem);
  `}
`;

export const Logo = styled.img`
  height: 1.5rem;
  width: auto;
  display: block;

  ${breakpoint("md")`
    height: 2rem;
  `}

  ${breakpoint("xs", "md")`
    margin: auto;
  `}
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: right;
  flex-direction: column;

  ${breakpoint("xs", "md")`
    align-items: center;
  `}
`;

export const Date = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  }
`;

export const Id = styled(Date)`
  margin-top: 0.5em;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    margin-right: 0.25em;
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;

  ${breakpoint("sm")`
    font-size: 1.1rem;
  `};

  ${breakpoint("md")`
    font-size: 1.25rem;
  `};
`;
