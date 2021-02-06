import styled from "styled-components";
import { darken, mix } from "polished";

export const IconButton = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  background: ${({ background }) => background};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border: 0;
  margin: 0;

  &:hover {
    background: ${({ background }) => mix(0.1, "#FFF", background)};
  }

  & > img {
    display: block;
    height: 1.5rem;
    width: 1.5rem;
    object-fit: contain;
  }

  &:first-child {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &:last-child {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const Bar = styled.div<{ background?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  height: 100%;

  ${({ background, theme }) =>
    background
      ? `
    background: ${mix(0.1, "#000", background)};
    color: ${theme.colors.backgroundLighten};
  `
      : `
  background: ${theme.colors.backgroundDarken};
    color: ${theme.colors.textMuted};
    border-top: 1px solid rgba(0, 0, 0, 0.025);
    border-bottom: 1px solid rgba(0, 0, 0, 0.025);
  `};
`;
