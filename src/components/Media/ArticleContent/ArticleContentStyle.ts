import styled from "styled-components";
import { Lead, Title } from "@shared/Typography";
import breakpoint from "styled-components-breakpoint";
import { transparentize } from "polished";

export const Container = styled.article`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundDarken};
  background: #fff;
  position: relative;
  overflow: hidden;

  ${breakpoint("lg")`
    padding: 2rem;
    grid-gap: 2rem;
    border-radius: 16px;
  `};

  ${breakpoint("md")`
    padding: 4rem;
    grid-gap: 4rem;
    border-radius: 32px;
  `};
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  max-width: ${({ theme }) => theme.breakpoints.lg}px;
  width: 100%;
  margin: auto;

  ${breakpoint("lg")`
    grid-gap: 2rem;
  `};

  ${breakpoint("md")`
    grid-gap: 4rem;
  `};
`;

export const ShowMoreOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, white 0%, transparent 75%);
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  padding-top: 25%;

  .CircularProgressbar {
    width: max(25%, 15rem);
    padding: 1rem;
    border-radius: 17.5rem;
    background: ${({
      theme: {
        colors: { backgroundDarken },
      },
    }) => transparentize(0.33, backgroundDarken)};
  }
`;

export const ContentWrapper = styled(Inner)`
  max-width: ${({ theme }) => theme.breakpoints.md}px;
  margin: auto;
  grid-gap: 1rem;

  ${breakpoint("lg")`
    grid-gap: 1.5rem;
  `};

  ${breakpoint("md")`
    grid-gap: 2rem;
  `};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  width: 100%;
  margin: auto;
  text-align: left;

  ${Title} {
    line-height: 1.3;
  }

  ${Lead} {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 1rem;
    opacity: 0.75;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 1rem;
  object-fit: cover;
  aspect-ratio: 4/3;

  @supports not (aspect-ratio: 4/3) {
    height: 15rem;

    ${breakpoint("sm")`
      height: 30rem;
    `};

    ${breakpoint("md")`
      height: 40rem;
    `};
  }

  ${breakpoint("md")`
    border-radius: 2rem;
  `};
`;

export const Content = styled.div`
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1rem;
  width: 100%;

  ${breakpoint("md")`
    font-size: 1.1rem;
  `};

  hr {
    height: 1px;
    background: ${({ theme }) => theme.colors.backgroundDarken};
    border: 0;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primaryDarken};
  }

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
