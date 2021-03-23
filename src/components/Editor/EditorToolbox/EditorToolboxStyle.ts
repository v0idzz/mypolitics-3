import styled from "styled-components";
import { transparentize } from "polished";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 35vh;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: left;
`;

export const ListInner = styled.div`
  margin-top: -0.5rem;
  display: block;
  width: 100%;

  & > img,
  & > div {
    display: inline-flex;
    margin-top: 0.25rem;

    &:not(:last-child) {
      margin-right: 0.25rem;
    }
  }
`;

export const ListTitle = styled(Header)`
  font-size: 1rem;
  padding: 0;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  width: 6rem;
`;

export const ListDivider = styled.div`
  height: 100%;
  width: 1px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0 1rem;
  opacity: 0.5;
`;
