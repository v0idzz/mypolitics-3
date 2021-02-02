import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 2rem;
  grid-gap: 1.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.5rem;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Paragraph = styled.div`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  max-width: 80%;
`;
