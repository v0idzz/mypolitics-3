import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 2rem;
  grid-gap: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;
