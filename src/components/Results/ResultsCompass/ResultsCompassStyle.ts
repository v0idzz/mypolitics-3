import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 1fr);
  width: 100%;
`;

export const ListElement = styled.button<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.backgroundDarken};
  color: ${({ selected, theme }) =>
    selected ? theme.colors.backgroundLighten : theme.colors.primary};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in-out;

  &:first-child {
    border-bottom-left-radius: 0.5rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.5rem;
  }
`;
