import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import breakpoints from "@theme/breakpoints";
import { Lead as DefaultLead } from "@shared/Typography";

export const Header = styled.header`
  text-align: right;
  line-height: 1.2;
  margin-bottom: 3rem;

  ${breakpoint("xs", "md")`
    max-width: 66%;
    margin-bottom: 1.5rem;
  `};
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.7;
  padding: 3rem 1.5rem 1.5rem;
  position: relative;
  font-size: 1rem;

  p {
    margin: 0;
    max-width: 100%;

    ${breakpoint("md")`
      max-width: 75%;
    `};
  }

  ${breakpoint("sm")`
    padding: 4rem 2rem 2rem;
  `};

  ${breakpoint("md")`
    font-size: 1.1rem;
  `};
`;

export const ContentInner = styled.div`
  display: inline-grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;

  a {
    display: inline-flex;
  }

  ${breakpoint("md")`
    grid-gap: 2rem;
  `};
`;

export const ContentFill = styled.div`
  position: absolute;
  top: 0;
  background: #eef2f3;
  z-index: -1;
  height: 80%;
  width: 100%;
  border-radius: 64px 32px 32px 32px;

  ${breakpoint("md")`
    height: 70%;
    width: 2000%;
    border-top-left-radius: 256px;
    border-bottom-left-radius: 256px;
  `};
`;

export const Lead = styled(DefaultLead)`
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.5;

  ${breakpoint("md")`
    max-width: 50%;
  `};

  ${breakpoint("lg")`
    max-width: 66%;
  `};
`;

export const Illustration = styled.picture`
  &, & > img {
    filter: drop-shadow(0px 0px 64px rgba(29, 114, 136, 0.25));
    position: absolute;
    top: 0;
    z-index: 1;
    height: auto;
    width: 33%;
    border-radius: 100%;
    overflow: hidden;
    max-width: 7rem;

    ${breakpoint("md")`
        height: 20rem;
        width: 20rem;
        max-width: unset;
      `};
  }
`;

export const AdditionalContent = styled.div`
  margin-top: 4rem;
  max-width: 100%;

  ${breakpoint("md")`
    max-width: 75%;
  `};
`;

export const Container = styled.section<{ variant: "left" | "right" }>`
  ${({ variant }) => {
    const variants = {
      left: css`
        ${Illustration} {
          right: 0;
          text-align: right;
        }

        ${Header} {
          text-align: left;
          margin-right: auto;
        }

        ${Lead}, ${AdditionalContent} {
          margin-right: auto;
        }

        ${Content} {
          text-align: left;

          p,
          button {
            margin-right: auto;
          }

          ${breakpoint("md")`
            margin-right: 6rem;
            padding: 4rem 4rem 4rem 0;
          `}
        }

        ${ContentFill} {
          border-radius: 32px 64px 32px 32px;
          right: 0;

          ${breakpoint("md")`
            border-top-right-radius: 256px;
            border-bottom-right-radius: 256px;
          `};
        }
      `,
      right: css`
        ${Illustration} {
          left: 0;
          text-align: left;
        }

        ${Header} {
          text-align: right;
          margin-left: auto;
        }

        ${Lead}, ${AdditionalContent} {
          margin-left: auto;
        }

        ${Content} {
          text-align: right;

          p,
          button {
            margin-left: auto;
          }

          ${breakpoint("md")`
            margin-left: 6rem;
            padding: 4rem 0 4rem 4rem;
          `}
        }

        ${ContentFill} {
          border-radius: 64px 32px 32px 32px;
          left: 0;

          ${breakpoint("md")`
            border-top-left-radius: 256px;
            border-bottom-left-radius: 256px;
          `};
        }
      `,
    };

    return variants[variant];
  }};
`;
