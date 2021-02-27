import styled from "styled-components";

export const Container = styled.div`
  display: block;

  & > div:first-child {
    display: inline-flex;
  }
`;

export const ListContainer = styled.div`
  margin-top: -0.5rem;

  & > div,
  & > button {
    display: inline-flex;
    margin-top: 0.5rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  & > button {
    border-radius: 0.25rem;
    vertical-align: top;
  }
`;
