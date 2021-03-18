import styled, { css } from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  max-height: 2rem;
  border-radius: 0.25rem;
  z-index: 10;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  overflow: hidden;
  padding: 0.5rem;
`;

export const CountryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  & > img:first-child {
    margin-right: 0.5em;
  }

  span {
    transition: 0.2s ease-in-out;
  }

  &:hover span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CountryImage = styled.img`
  border-radius: 0.125rem;
  height: 1rem;
  width: 1.6rem;
  border: 0;
  cursor: pointer;
  object-fit: cover;
  padding: 0;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border: 0;
  height: 2.25rem;
  width: 2.25rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  svg {
    height: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;

export const Container = styled.div<{
  showFull: boolean;
  color: string;
}>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme, color }) => theme.colors[color]};
  border-radius: 0.5rem;

  ${({ showFull }) =>
    !showFull &&
    css`
      max-height: 3rem;
      ${Inner} {
        max-height: 2.25rem;
      }
    `}

  ${({ showFull, theme }) =>
    showFull &&
    css`
      outline: 1px solid ${theme.colors.backgroundDarken};

      ${DropdownButton} {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0.5rem;
      }
    `}
`;
