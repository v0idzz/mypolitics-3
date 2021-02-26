import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
`;

export const SideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;
