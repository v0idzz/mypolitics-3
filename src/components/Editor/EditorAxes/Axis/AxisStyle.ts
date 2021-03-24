import styled, { css } from "styled-components";
import { mix, transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Info = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 0.25rem;
  padding: 0.75rem;
  width: 50%;
`;

export const IdeologyContainer = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background: ${({ color }) => color};
  vertical-align: middle;
  width: 50%;

  span,
  img {
    font-size: 1rem;
    height: 1rem;
    width: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;

export const IdeologyName = styled.div`
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const IdeologyDeleteButton = styled.button`
  border: 0;
  border-radius: 0.125rem;
  background: ${({ theme }) =>
    transparentize(0.9, theme.colors.backgroundLighten)};
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) =>
      transparentize(0.8, theme.colors.backgroundLighten)};
  }

  svg {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;

export const DeleteButton = styled.button<{ deleteConfirmed: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  background: ${({ theme }) => transparentize(0.9, theme.colors.red)};
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin: auto;

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

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 2rem;
  grid-gap: 1rem;

  & > button {
    margin: auto;
  }
`;
