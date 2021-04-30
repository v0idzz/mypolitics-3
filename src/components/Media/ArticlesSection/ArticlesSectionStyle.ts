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
