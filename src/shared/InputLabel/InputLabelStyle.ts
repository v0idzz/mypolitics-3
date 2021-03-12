import styled from "styled-components";

export const Container = styled.label`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  opacity: 0.75;
`;
