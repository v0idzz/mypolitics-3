import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint("md")`
    width: 100%;
  `};
`;

export const Header = styled.header<{ align: "left" | "center" }>`
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

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 32px;
  z-index: -1;

  ${breakpoint("xs", "md")`
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  `};
`;

export const Content = styled.div`
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

export const ImageTitleWrapper = styled.div`
  img {
    height: 1.25rem;

    ${breakpoint("md")`
      height: 1.75rem;
    `};

    ${breakpoint("lg")`
      height: 2.25rem;
    `};
  }
`;

export const Background = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.colors.background};
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  width: 100%;
  height: calc(100% - 4rem);
`;

export const List = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 100%;
  width: 100%;
  height: 90%;

  ${breakpoint("xs", "md")`
    max-width: 100%;
  `};

  ${breakpoint("md")`
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  `};
`;
