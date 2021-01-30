import styled from "styled-components";
import { Lead } from "@shared/Typography";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 3rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  max-width: ${({ theme }) => theme.breakpoints.sm}px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  & > ${Lead} {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 1px;
`;

export const Content = styled.div`
  width: 100%;
`;
