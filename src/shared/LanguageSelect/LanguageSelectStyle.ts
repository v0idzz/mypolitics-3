import styled, { css } from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  max-height: 2rem;
  border-radius: 0.25rem;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  overflow: hidden;
`;

export const LanguageImage = styled.a<{ image: string }>`
  border-radius: 0.125rem;
  height: 1rem;
  width: 1.6rem;
  border: 0;
  cursor: pointer;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
`;

export const DropdownButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    height: 1rem;
    margin-left: 0.5rem;
  }
`;

export const Container = styled.div<{
  showFull: boolean;
  color: "grayish" | "bluish";
}>`
  display: flex;
  align-items: flex-start;
  background: ${({ theme, color }) =>
    color === "grayish"
      ? transparentize(0.5, theme.colors.text)
      : transparentize(0.9, theme.colors.primary)};
  border-radius: 0.25rem;
  padding: 0.5rem;

  ${DropdownButton} svg {
    color: ${({ theme, color }) =>
      color === "grayish"
        ? theme.colors.backgroundLighten
        : theme.colors.primary};
  }

  ${({ showFull }) =>
    !showFull &&
    css`
      max-height: 2rem;
      ${Inner} {
        max-height: 1rem;
      }
    `}
`;
