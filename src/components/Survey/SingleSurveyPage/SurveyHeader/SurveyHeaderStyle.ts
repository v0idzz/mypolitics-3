import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 0px 24px 0px
    ${({ theme }) => transparentize(0.66, theme.colors.primary)};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.div<{ warning?: boolean; hasText?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${({ theme }) =>
    transparentize(0.66, theme.colors.backgroundDarken)};
  margin-right: 0.5rem;
  width: ${({ hasText }) => (hasText ? "auto" : "2.5rem")};
  padding: 0 1rem;
  transition: 0.2s ease-in-out;
  height: 2.5rem;
  cursor: pointer;
  color: ${({ theme, warning }) =>
    warning ? theme.colors.red : theme.colors.backgroundDarken};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  svg {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    color: inherit;
  }

  &:hover {
    background: ${({ theme }) =>
      transparentize(0.5, theme.colors.backgroundDarken)};
  }

  ${({ hasText }) =>
    hasText &&
    `
    color: ${({ theme }) => transparentize(0.5, theme.colors.backgroundDarken)};
    background: ${({ theme, warning }) =>
      warning ? theme.colors.red : theme.colors.backgroundDarken};
  `}
`;

export const Info = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }
`;
