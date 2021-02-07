import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: inherit;
  color: ${({ theme }) => transparentize(0.5, theme.colors.textMuted)} !important;
  transition: 0.2s ease-in-out;
  border: 0;
  background: transparent;

  &:hover {
    transform: scale(1.25);
    color: ${({ theme }) => theme.colors.textMuted} !important;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5em;
  }
`;
