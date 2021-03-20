import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};

  ${breakpoint("md")`
    padding: 2rem;
  `}
`;

export const Value = styled.div<{ positive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  background: ${({ theme, positive }) =>
    positive ? theme.colors.green : theme.colors.red};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};

  span:last-child {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    margin-left: 0.5rem;
  }
`;

export const VoteWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 1rem;

  button {
    margin-left: 0.5rem;
  }
`;
