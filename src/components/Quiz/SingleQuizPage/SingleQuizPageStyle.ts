import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 6rem);
  padding: 2rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: block;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
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

export const Chips = styled(Feature)`
  display: flex;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  align-items: baseline;

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
