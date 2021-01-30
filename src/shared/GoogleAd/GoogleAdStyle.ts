import styled from "styled-components";

export const MockupAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.textMuted};
`;

export const Text = styled.div`
  padding: 0.5rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => theme.colors.textMuted};
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    margin-right: 0.5em;
  }
`;
