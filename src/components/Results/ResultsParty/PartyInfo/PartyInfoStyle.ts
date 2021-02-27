import styled from "styled-components";
import * as R from "ramda";
import { mix, transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<{ small?: boolean }>`
  display: block;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;

  ${({ small }) =>
    small &&
    `
    width: 1.5rem;
    height: 1.5rem;
  `}
`;

export const Name = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: left;
`;

export const Agreement = styled.div<{
  percentage: number;
  isClassic?: boolean;
}>`
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  ${({ percentage, theme, isClassic }) => {
    const [agree, partly] = isClassic ? [85, 70] : [80, 50];

    const background = R.cond([
      [R.gte(R.__, agree), R.always(theme.colors.green)],
      [R.gte(R.__, partly), R.always(theme.colors.yellow)],
      [R.T, R.always(theme.colors.red)],
    ])(percentage);

    return `
      background: ${background};
      box-shadow: 0px 0px 24px 0px ${transparentize(0.67, background)};
      
      &:hover {
        background: ${mix(0.1, "#000", background)};
      }
    `;
  }}

  ${({ isClassic }) =>
    isClassic &&
    `
    pointer-events: none;
    width: 2.25rem;
  `}
`;

export const AuthorizedIconWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 100%;
`;

export const AuthorizedBackground = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  color: ${({ theme }) => theme.colors.primary};
`;
