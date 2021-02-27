import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background: ${({ color }) => color};
  vertical-align: middle;

  span,
  img {
    font-size: 1rem;
    height: 1rem;
    width: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0 0.5rem;
`;

export const EditButton = styled.button`
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
