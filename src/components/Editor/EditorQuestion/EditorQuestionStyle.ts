import styled, { css } from "styled-components";
import { mix, transparentize } from "polished";

export const NumberWrapper = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteButton = styled.button<{ deleteConfirmed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  margin-right: 0.5rem;
  color: ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => transparentize(0.9, theme.colors.red)};
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.red)};
  }

  ${({ deleteConfirmed }) =>
    deleteConfirmed &&
    css`
      color: ${({ theme }) => theme.colors.backgroundLighten};
      background: ${({ theme }) => theme.colors.red};

      &:hover {
        background: ${({ theme }) => mix(0.1, "#000", theme.colors.red)};
      }
    `}
`;

export const OpenButton = styled.button<{ opened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 0;
  background: transparent;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
`;