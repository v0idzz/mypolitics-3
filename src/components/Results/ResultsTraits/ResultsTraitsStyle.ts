import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

export const HeaderTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Content = styled.div`
  display: block;
  text-align: center;
  margin-bottom: -0.5rem;
`;

export const TraitContainer = styled.div<{ background: string }>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  vertical-align: top;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-bottom: 0.5rem;

  & > img {
    display: block;
    height: 1rem;
    width: 1rem;
  }

  & > img,
  & > span:first-child {
    margin-right: 0.5rem;
  }

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  ${({ background }) => `
    background: ${background};
    box-shadow: 0px 0px 24px 0px ${transparentize(0.67, background)};
  `}
`;
