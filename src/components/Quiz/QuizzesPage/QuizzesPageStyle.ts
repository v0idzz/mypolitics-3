import styled from "styled-components";
import { transparentize } from "polished";

export const SearchBox = styled.div`
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};

  input {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    border-radius: 0.25rem;
    border: 0;
    width: 100%;
    padding: 0.5rem;
    margin-right: 0.5rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundLighten};
  }
`;
