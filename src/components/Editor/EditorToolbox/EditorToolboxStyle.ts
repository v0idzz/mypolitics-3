import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Container = styled.div`
  position: sticky;
  top: 50vh;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => transparentize(0.85, theme.colors.primary)};
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

export const Title = styled.div`
  display: flex;
  align-items: center;

  & > span:last-child {
    margin-left: 0.5em;
  }
`;

export const HeaderInfo = styled(Title)`
  padding: 0.5rem;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  background: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
`;
