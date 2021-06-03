import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Title } from "@shared/Typography";

export const HeroGridContent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  width: 100%;

  ${breakpoint("md")`
    ${Title} {
      display: none;
    }
  `};

  ${breakpoint("xs", "md")`
    padding-top: 10rem;
  `};
`;

export const HeroGridRow = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;
  width: 100%;

  a {
    box-shadow: 0px 0px 32px rgba(0, 20, 24, 0.5);
  }

  ${breakpoint("md")`
    grid-template-columns: 2fr 1fr;
  `};
`;

export const HeroGridCol = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 2rem;

  ${breakpoint("md")`
    &:first-child > a {
      grid-row: 1 / 3;
      grid-template-rows: 1fr 1fr;
    }

    &:nth-child(2) > iframe {
      max-height: calc(50% - 1rem);
    }
  `};

  &:last-child > :last-child {
    ${breakpoint("xs", "md")`
      display: none;
    `};
  }
`;
