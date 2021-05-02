import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const BaseSectionHeader = styled.header<{ align: "left" | "center" }>`
  position: relative;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  width: 100%;

  ${({ align }) => {
    const variants = {
      left: `align-items: flex-start;`,
      center: `align-items: center; justify-content: center;`,
    };

    return variants[align];
  }};
`;

export const BaseSectionContent = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 100%;
  padding: 2rem;
  max-width: calc(100% - 4rem);
  width: 100%;

  ${breakpoint("xs", "md")`
    max-width: 100%;
  `};
`;

export const BaseSectionList = styled.div<{ numberOfColumns?: number }>`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 100%;
  width: 100%;
  height: 90%;

  ${breakpoint("xs", "md")`
    max-width: 100%;
  `};

  ${breakpoint("md")`
    grid-template-columns: repeat(${({ numberOfColumns }) =>
      numberOfColumns ?? "auto-fit"}, minmax(330px, 1fr));
  `};
`;

export const BaseSectionBackground = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  width: 100%;
  height: calc(100% - 4rem);
`;
