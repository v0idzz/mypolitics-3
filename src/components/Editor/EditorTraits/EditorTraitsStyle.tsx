import styled from "styled-components";
import { transparentize } from "polished";

export const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => transparentize(0.25, theme.colors.textMuted)};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;

export const Info = styled.button`
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem;
  grid-column: 1 / -1;

  &:disabled {
    cursor: default;
  }
`;

export const TraitsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  display: grid;
  padding: 0.75rem;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
`;
