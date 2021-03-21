import styled, { css } from "styled-components";

export const Container = styled.div<{ slideIn: boolean }>`
  left: 0;
  bottom: 0;
  position: fixed;
  transition: transform 0.2s;
  z-index: 10;
  width: 100%;

  ${({ slideIn }) =>
    slideIn
      ? css`
          transform: translateY(0);
        `
      : css`
          transform: translateY(100%);
        `}
`;

export const Inner = styled.div`
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Options = styled.div`
  display: flex;
  flex-wrap: 1;
`;
