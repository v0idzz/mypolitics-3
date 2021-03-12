import styled from "styled-components";
import { transparentize } from "polished";

export const Title = styled.div`
  padding: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  font-size: 1.25rem;
  width: 100%;
  margin: auto;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  svg {
    color: inherit;
    margin-right: 0.75em;
    height: 1em;
    width: 1em;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
