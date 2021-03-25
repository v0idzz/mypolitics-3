import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  & > span {
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    margin-right: 0.5rem;
  }

  & > button {
    padding: 0.75rem;
    border-radius: 0.25rem;

    img {
      height: 1em;
      width: auto;
      display: block;
    }
  }

  & > * {
    margin-top: 0.5rem;
  }

  & > button:not(:last-child) {
    margin-right: 0.5rem;
  }
`;
