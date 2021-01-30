import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.section`
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 70%;
  grid-gap: 1rem;
`;

export const Title = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const CodesWrapper = styled.div`
  display: flex;
`;

export const CodeElement = styled.div`
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  background: ${({ theme }) => darken(0.05, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  opacity: 0.25;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  opacity: 0.75;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
