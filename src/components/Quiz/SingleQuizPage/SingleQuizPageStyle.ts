import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 1rem);
  padding: 1rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  ${breakpoint("md")`
    width: calc(100% - 6rem);
    padding: 2rem;
  `}
`;

export const AuthorHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primaryDarken};
  width: calc(100% - 1rem);
  margin: auto;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
    background: ${({ theme }) =>
      transparentize(0.9, theme.colors.backgroundLighten)};
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }

  ${breakpoint("xs", "sm")`
    flex-direction: column;
    
    span {
      margin-left: 0;
      margin-top: 0.5rem;
    }
  `}

  ${breakpoint("md")`
    width: calc(100% - 6rem);
  `}
`;

export const Logo = styled.img`
  height: 1.5rem;
  width: auto;
  display: block;

  @media only screen and (max-width: 360px) {
    height: 1.25rem;
  }

  ${breakpoint("md")`
    height: 2rem;
  `}
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.75rem;
  padding: 1rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  ${breakpoint("md")`
    grid-gap: 1.5rem;
    padding: 3rem;
  `}
`;

export const Description = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 1;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.5;
`;

export const FeaturesList = styled.div`
  display: flex;

  ${breakpoint("xs", "md")`
    display: block;
    margin-bottom: -0.5rem;
    text-align: center;
  `}
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

  ${breakpoint("xs", "md")`
    display: inline-block;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
  `}
`;

export const Chips = styled(Feature)`
  display: flex;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  align-items: baseline;
  line-height: 1.2;

  ${breakpoint("xs", "md")`
    align-items: center;
  `}

  span {
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MetaWrapper = styled.div`
  display: flex;
  align-items: center;

  ${breakpoint("xs", "md")`
    justify-content: center;
    flex-direction: column;
    
    & > ${Chips}:not(:last-child) {
      margin-bottom: 1rem;
    }
  `};

  ${breakpoint("md")`
    & > ${Chips}:not(:last-child) {
      margin-right: 1rem;
    }
  `}
`;

export const PoliticiansResultsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  width: 100%;
`;

export const SurveysHistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > a,
  & > button,
  & > div {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;

  ${breakpoint("sm")`
    font-size: 1.1rem;
  `};

  ${breakpoint("md")`
    font-size: 1.25rem;
  `};
`;
