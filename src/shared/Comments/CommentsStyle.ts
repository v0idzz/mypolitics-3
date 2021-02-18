import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: auto;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
`;
