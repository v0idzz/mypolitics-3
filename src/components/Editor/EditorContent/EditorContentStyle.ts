import styled from "styled-components";
import { transparentize } from "polished";
import breakpoint from "styled-components-breakpoint";

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  ${breakpoint("xs", "md")`
    grid-template-columns: 100%;
  `};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & & {
    gap: 1rem;
  }
`;

export const ToolboxCol = styled(Col)`
  ${breakpoint("xs", "md")`
    display: none;
  `};
`;

export const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border: 0;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  span:last-child {
    margin-left: 0.5em;
  }

  &:hover {
    background: ${({ theme }) => transparentize(0.85, theme.colors.primary)};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
