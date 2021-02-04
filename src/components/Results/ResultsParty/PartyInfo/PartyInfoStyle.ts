import styled from "styled-components";
import * as R from "ramda";
import { transparentize } from "polished";

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

export const Image = styled.img`
  display: block;
  border-radius: 0.25rem;
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
`;

export const Name = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: left;
`;

export const Agreement = styled.div<{ percentage: number }>`
  padding: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border-radius: 0.5rem;

  ${({ percentage, theme }) => {
    const background = R.cond([
      [R.gte(R.__, 80), R.always(theme.colors.green)],
      [R.gte(R.__, 50), R.always(theme.colors.yellow)],
      [R.T, R.always(theme.colors.red)],
    ])(percentage);

    return `
      background: ${background};
      box-shadow: 0px 0px 24px 0px ${transparentize(0.67, background)};
    `;
  }}
`;
