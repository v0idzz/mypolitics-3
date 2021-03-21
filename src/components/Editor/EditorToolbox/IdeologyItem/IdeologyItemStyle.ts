import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div<{ background: string; xl?: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ xl }) => (xl ? 3 : 2)}rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background: ${({ background }) => background};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  border: 0;
  width: ${({ xl }) => (xl ? 3 : 2)}rem;
  height: ${({ xl }) => (xl ? 3 : 2)}rem;
  vertical-align: middle;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  & > img {
    height: 1rem;
    width: 1rem;
  }

  &:hover {
    transform: scale(1.25);
    box-shadow: 0 0 24px 0
      ${({ background }) => transparentize(0.67, background)};
  }
`;
