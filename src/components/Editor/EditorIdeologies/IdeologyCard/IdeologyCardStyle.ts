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
