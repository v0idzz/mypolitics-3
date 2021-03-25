import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  width: 100%;
`;
