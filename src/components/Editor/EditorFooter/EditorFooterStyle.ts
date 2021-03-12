import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDarken};
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

export const RequirementContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
  grid-gap: 1rem;
  width: 100%;

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    margin: auto 0;
  }
`;

export const RequirementIcon = styled.div<{ fulfilled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;

  ${({ fulfilled, theme }) => {
    const color = fulfilled ? theme.colors.green : theme.colors.red;
    const background = transparentize(0.9, color);

    return `
      color: ${color};
      background: ${background};
    `;
  }}

  svg {
    height: 1rem;
    width: 1rem;
    color: inherit;
  }
`;
