import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import * as R from "ramda";
import { transparentize } from "polished";

export const Container = styled.article<{ featured: boolean }>`
  background: ${({ theme }) => theme.colors.backgroundDarken};
  padding: 1.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-gap: 1rem;

  ${breakpoint("md")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  `}

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
  grid-gap: 1.25rem;
`;

export const Image = styled.img`
  height: 2rem;
  width: auto;
  display: block;

  ${breakpoint("xs", "md")`
    margin: auto;
  `}
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${breakpoint("xs", "md")`
    display: block;
    margin-bottom: -0.5rem;
    text-align: center;
  `}
`;

export const Chip = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primaryDarken};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1rem;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;

  ${breakpoint("xs", "md")`
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  `}
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
  text-align: center;

  ${breakpoint("sm")`
    font-size: 1.1rem;
  `};

  ${breakpoint("md")`
    font-size: 1.25rem;
    text-align: left;
  `};
`;

export const PointsChip = styled(Chip)<{ points: number }>`
  ${({ theme, points }) => {
    const background = R.cond([
      [() => points < 0, R.always(theme.colors.red)],
      [() => points > 0, R.always(theme.colors.green)],
      [R.T, R.always(theme.colors.primaryDarken)],
    ])();

    return `background: ${background} !important;`;
  }}
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${breakpoint("md")`
    justify-content: flex-start;
  `};
`;

export const TypeTitle = styled.div`
  padding: 0.5rem;
  border-radius: 0.25rem;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  display: inline-block;
  margin: 0.5rem auto auto;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};

  ${breakpoint("md")`
    margin: 0.5rem auto auto 0;
  `};

  span {
    margin-left: 0.5em;
  }
`;
