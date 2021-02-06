import styled from "styled-components";
import { rgba } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Overlay = styled.div`
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => rgba(theme.colors.text, 0.25)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  overflow: hidden;
  max-width: 90vw;
  min-width: 80vw;

  ${breakpoint("md")`
      width: 30rem;
    min-width: 30rem;
    `};
`;

export const Header = styled.div<{ background: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-size: 1rem;
  background: ${({ background }) => background};

  img {
    height: 1rem;
  }

  ${breakpoint("sm")`
      padding: 1.25rem;
    `};

  ${breakpoint("md")`
      padding: 1.5rem;

    span {
      font-size: 1.25rem;
    }
    `};

  ${breakpoint("lg")`
      img {
      height: 1.5rem;
    }

    span {
      font-size: 1.5rem;
    }
    `};
`;

export const IconWrapper = styled.div`
  svg {
    font-size: 1rem;
    width: 1rem;
    color: ${({ theme }) => theme.colors.background};

    ${breakpoint("md")`
      font-size: 1.25rem;
      width: 1.25rem;
    `};

    ${breakpoint("lg")`
      font-size: 1.5rem;
    `};
  }
`;

export const Inner = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};

  ${breakpoint("sm")`
      padding: 1.25rem;
    grid-gap: 1.25rem;
    `};

  ${breakpoint("md")`
      padding: 1.5rem;
    grid-gap: 1.5rem;
    `};
`;

export const TitleHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  & > svg,
  & > img {
    height: 1.1rem;
    width: 1.1rem;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
`;
