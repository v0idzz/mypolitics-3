import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 3rem;
  padding: 3rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    height: 1.5rem;
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
  grid-gap: 1rem;
`;
