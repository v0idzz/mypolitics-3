import styled, { css } from "styled-components";
import { transparentize } from "polished";

export const ThirdAxisContainer = styled.div`
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 400px) {
    border-top-right-radius: 0.5rem;
  }
`;

export const ThirdAxisInner = styled.div`
  background: linear-gradient(180deg, #1abc9c 0%, #9b59b6 100%);
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;
  position: relative;
`;

export const ThirdAxisPointer = styled.div<{ position: number }>`
  position: absolute;
  width: calc(100% + 0.5rem);
  transform: translateY(-50%);
  left: -0.25rem;
  height: 0.5rem;
  border-radius: 0.15rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid
    ${({ theme }) => transparentize(0.9, theme.colors.primaryDarken)};
  top: ${({ position }) => ((-position + 1) / 2) * 100}%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;

  @media only screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: 0.5rem;
  }
`;

export const DescriptionElementContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
`;

export const DescriptionElementTitle = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1;
`;

export const DescriptionElementSide = styled(DescriptionElementTitle)`
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
`;

export const Container = styled.div<{ hasThird: boolean }>`
  display: grid;
  grid-template-columns: 8.5rem ${({ hasThird }) => hasThird && `2.5rem`} auto;

  @media only screen and (max-width: 400px) {
    grid-template-columns: ${({ hasThird }) =>
      hasThird ? `auto 3rem` : `6rem auto`};
  }

  .compass {
    border-top-left-radius: 0.5rem;
    width: 100%;
    height: auto;
    padding-top: 100%;
  }

  ${({ hasThird }) =>
    hasThird
      ? css`
          ${Description} {
            @media only screen and (max-width: 400px) {
              grid-column: 1 / 3;
              border-top-right-radius: 0;
            }
          }
        `
      : css`
          ${Description} {
            padding: 1rem;
          }
        `}
`;
