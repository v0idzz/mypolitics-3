import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Image = styled.img`
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 0.125rem;
  object-fit: cover;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0 0.5rem;
`;
