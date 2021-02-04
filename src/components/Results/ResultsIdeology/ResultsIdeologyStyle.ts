import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
`;

export const Info = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Version = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
