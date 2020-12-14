import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import breakpoints from "@theme/breakpoints";

export const Container = styled.section``;

export const Inner = styled.div`
  max-width: ${breakpoints.xl}px;
  margin: 0 1rem;
  position: relative;

  ${breakpoint("xl")`
    margin: auto;
  `};
`;

export const Header = styled.header`
  text-align: right;
  line-height: 1.2;
  margin-bottom: 3rem;
`;

export const Title = styled.h3`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.2;
`;

export const Slogan = styled.h4`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.5;
  font-weight: ${({ theme }) => theme.fontWeight.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  line-height: 1.2;
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.7;
  text-align: right;
  padding: 4rem 0 4rem 4rem;
  margin-left: 6rem;
  position: relative;
  font-size: 1.1rem;

  p {
    margin: 0;
    max-width: 75%;
    margin-left: auto;
  }
`;

export const ContentFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  background: #eef2f3;
  z-index: -1;
  border-top-left-radius: 256px;
  border-bottom-left-radius: 256px;
  height: 50%;
`;

export const IconWrapper = styled.div`
  filter: drop-shadow(0px 0px 64px rgba(29, 114, 136, 0.25));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  svg {
    height: 20rem;
    width: 20rem;
    border-radius: 100%;
    overflow: hidden;
  }
`;

export const AdditionalContent = styled.div`
  margin-top: 4rem;
  max-width: 75%;
  margin-left: auto;
`;
