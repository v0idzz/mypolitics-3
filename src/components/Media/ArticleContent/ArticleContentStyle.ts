import styled from "styled-components";
import { Lead } from "@shared/Typography";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.article`
  display: grid;
  grid-template-columns: 100%;
  padding: 1.5rem 0;
  grid-gap: 1.5rem;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  width: 100%;
  margin: auto;

  ${breakpoint("lg")`
    padding: 2rem 0;
    grid-gap: 2rem;
  `};

  ${breakpoint("md")`
    padding: 4rem 0;
    grid-gap: 4rem;
  `};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  max-width: ${({ theme }) => theme.breakpoints.md}px;
  width: 100%;
  margin: auto;
  text-align: left;

  ${Lead} {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1rem;
    opacity: 0.75;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 1rem;

  ${breakpoint("md")`
    border-radius: 2rem;
  `};
`;

export const Content = styled.div`
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  max-width: ${({ theme }) => theme.breakpoints.md}px;
  width: 100%;
  margin: auto;

  ${breakpoint("md")`
    font-size: 1.1rem;
  `};

  p {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }

  table {
    border-collapse: collapse;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    border-radius: 0.5rem;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  tr {
    transition: 0.2s ease-in-out;
    &:nth-child(even) {
      background: rgba(0, 0, 0, 0.025);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  img {
    border-radius: 0.5rem;
    width: 100%;
  }

  blockquote {
    font-style: italic;
    padding: 0.3em 1.6em 0.3em;
    margin: 0.3em 0 0.3em;
    border-left: 10px solid rgba(0, 0, 0, 0.1);
    opacity: 0.75;

    &:after {
      content: "";
      display: table;
      clear: both;
    }

    & cite {
      display: inline-block;
      float: right;
    }

    & p {
      margin-bottom: 0;
    }
  }

  figure {
    margin: 2rem;

    ${breakpoint("xs", "md")`
      margin-left: 0;
      margin-right: 0;
    `};

    &.table {
      overflow: auto;
    }
  }
`;

export const ShareContent = styled.div`
  display: flex;
  justify-content: center;

  ${breakpoint("xs", "md")`
    flex-direction: column;
    text-align: center;
  `};
`;

export const ShareLink = styled.a<{ type: "facebook" | "twitter" }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  margin-left: 1.5rem;

  ${breakpoint("xs", "md")`
    margin-left: 0;
    margin-top: 1rem;
  `};

  ${({ type }) => {
    const variants = {
      facebook: `background: #1773EA;`,
      twitter: `background: #009DEB;`,
    };

    return variants[type];
  }};
`;
