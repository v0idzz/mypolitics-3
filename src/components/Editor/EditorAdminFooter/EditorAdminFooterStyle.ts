import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => transparentize(0.95, theme.colors.primary)};
  padding: 1rem;
  border-radius: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    margin-right: 0.5rem;
  }
`;
