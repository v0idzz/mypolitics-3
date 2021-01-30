import styled from "styled-components";

export const TopText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Chips = styled(TopText)`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;
