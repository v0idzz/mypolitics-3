import styled, { css } from "styled-components";

export const Container = styled.article<{ featured: boolean }>`
  background: ${({ theme }) => theme.colors.backgroundDarken};
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ featured, theme }) =>
    featured &&
    css`
      border: 4px solid ${theme.colors.primary};
      box-shadow: 0px 0px 24px rgba(0, 179, 219, 0.33);
    `}
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1.5rem;
`;

export const Image = styled.img`
  height: 2rem;
  width: auto;
  display: block;
`;

export const FeaturesList = styled.div`
  display: flex;
`;

export const Feature = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryDarken};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1rem;
  margin-right: 0.5rem;
`;
