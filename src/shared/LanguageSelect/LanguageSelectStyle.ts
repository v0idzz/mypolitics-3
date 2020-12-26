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

export const Container = styled.div<{ showFull: boolean }>`
  display: flex;
  align-items: flex-start;
  background: ${({ theme }) => transparentize(0.5, theme.colors.text)};
  border-radius: 0.25rem;
  padding: 0.5rem;

  ${({ showFull }) =>
    !showFull &&
    css`
      max-height: 2rem;
      ${Inner} {
        max-height: 1rem;
      }
    `}
`;

export const LanguageImage = styled.a<{ image: string; disabled: boolean }>`
  border-radius: 0.125rem;
  height: 1rem;
  width: 1.6rem;
  border: 0;
  cursor: pointer;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;

  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
`;

export const DropdownButton = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;

  svg {
    height: 1rem;
    color: ${({ theme }) => theme.colors.backgroundLighten};
    margin-left: 0.5rem;
  }
`;
