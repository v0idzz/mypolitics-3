import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  padding: 2rem;
  grid-gap: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
`;

export const Biography = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  text-align: left;
`;
