import styled, { css } from "styled-components";
import { Lead } from "@shared/Typography";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from "polished";

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

export const InfoTitle = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.2;
`;

export const InfoDescription = styled(InfoTitle)`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  line-height: 1.4;
  max-width: 90%;
`;

export const Info = styled.div<{ highlighted?: boolean }>`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};

  ${({ highlighted }) =>
    highlighted &&
    css`
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};

      ${InfoTitle}, ${InfoDescription} {
        color: ${({ theme }) => theme.colors.primary};
      }
    `}
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const UrlWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  text-align: center;

  span {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    overflow-wrap: anywhere;
  }
`;
