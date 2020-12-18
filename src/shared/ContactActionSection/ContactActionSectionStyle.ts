import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    direction: ltr;
    & > span:not(:first-child) {
      unicode-bidi: bidi-override;
      direction: rtl;
    }
  }
`;

export const Header = styled.header`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.2;
  margin-bottom: 1.25rem;
  text-align: center;

  ${breakpoint("md")`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
  `};

  ${breakpoint("lg")`
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `};

  b {
    font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  }
`;
