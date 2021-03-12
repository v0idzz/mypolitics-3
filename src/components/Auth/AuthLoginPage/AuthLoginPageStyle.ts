import styled from "styled-components";
import { Lead } from "@shared/Typography";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.25rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.75rem;
  max-width: ${({ theme }) => theme.breakpoints.sm}px;
  margin: auto;
  width: 100%;

  ${breakpoint("sm")`
    padding: 1.5rem;
  `}

  ${breakpoint("md")`
    padding: 3rem;
    grid-gap: 1.5rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  & > ${Lead} {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Content = styled.form`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  width: 100%;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;
