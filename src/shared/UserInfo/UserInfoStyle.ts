import styled, { css } from "styled-components";
import { mix, transparentize } from "polished";

export const Inner = styled.div<{ as?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${({ theme }) =>
    mix(0.5, theme.colors.primaryDarken, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1;
  border: 0;
  transition: 0.2s ease-in-out;

  & > span:nth-child(2),
  & > div:nth-child(2) {
    margin-left: 0.5rem;
  }

  svg {
    color: inherit;
    height: 1em;
    width: 1em;
  }

  ${({ as }) =>
    as === "button" &&
    css`
      cursor: pointer;

      &:hover {
        filter: brightness(95%);
      }
    `}
`;

export const Name = styled(Inner)`
  background: ${({ theme }) => theme.colors.primary};
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  height: 100%;
`;

export const LogoutButton = styled(Inner)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  height: 100%;
`;

export const Container = styled.div<{ cols: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, auto);
`;

export const BadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 2px;
  background: ${({ theme }) =>
    transparentize(0.9, theme.colors.backgroundLighten)};
  color: ${({ theme }) => theme.colors.backgroundLighten};

  svg {
    height: 0.75rem;
    width: 0.75rem;
  }
`;
