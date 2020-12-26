import styled from "styled-components";
import { Title } from "@shared/Typography";

import breakpoint from "styled-components-breakpoint";

export const Container = styled.main`
  text-align: left;
  padding: 2rem 0;

  ${Title} {
    margin-bottom: 2rem;
  }
`;

export const Inner = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 60rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  & > ol > li {
    &:before,
    & > h2 {
      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: 600;
      margin-top: 1.5rem;
    }

    li {
      font-weight: 500;

      &:before {
        font-weight: 600;
      }
    }

    ol,
    ul {
      ${breakpoint("xs", "sm")`
        margin-left: -1.75rem;
      `}
    }
  }

  ol {
    list-style-type: none;
    counter-reset: item;
    margin: 0;
    padding: 0;
  }

  ol > li {
    display: table;
    counter-increment: item;
    margin-bottom: 0.6em;
  }

  ol > li:before {
    content: counters(item, ".") ". ";
    display: table-cell;
    padding-right: 0.6em;
  }

  li ol > li {
    margin: 0 0 0.25em;
  }

  li ol > li:before {
    content: counters(item, ".") " ";
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  width: 100%;
`;
