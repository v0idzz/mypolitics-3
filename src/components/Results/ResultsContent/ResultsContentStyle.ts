import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 55fr 45fr;
  width: 100%;
  grid-gap: 1.5rem;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
