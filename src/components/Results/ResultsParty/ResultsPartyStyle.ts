import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const CountrySelect = styled.div``;

export const List = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  max-height: 10rem;
  overflow-y: auto;
  padding-right: 0.25rem;

  ::-webkit-scrollbar {
    width: 0.75rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgroundDarken};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0.25rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
