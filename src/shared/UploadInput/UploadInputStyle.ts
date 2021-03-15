import styled from "styled-components";
import { transparentize } from "polished";

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => transparentize(0.8, theme.colors.primary)};
  }

  & > svg {
    margin-right: 0.5em;
    color: ${({ theme }) => theme.colors.primary};
  }

  & > input {
    display: none;
  }
`;

export const ImageWrapper = styled(Label)`
  background: ${({ theme }) => theme.colors.text};
  cursor: unset;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
  }

  & > img {
    height: 2rem;
    width: 2rem;
    border-radius: 2px;
    object-fit: cover;
    margin-right: 0.5em;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActionButton = styled.button<{ danger?: boolean }>`
  border: 0;
  border-radius: 0.125rem;
  background: ${({ theme, danger }) =>
    transparentize(0.75, theme.colors[danger ? "red" : "primary"])};
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, danger }) =>
      transparentize(0.66, theme.colors[danger ? "red" : "primary"])};
  }

  &:last-child {
    margin-left: 0.25rem;
  }

  svg {
    font-size: 0.75rem;
    color: ${({ theme, danger }) => theme.colors[danger ? "red" : "primary"]};
  }
`;
