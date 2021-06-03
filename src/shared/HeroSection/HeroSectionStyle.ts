import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const backgroundImageImg = ({ theme }) => `
  max-height: 90%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: -1;
  object-fit: cover;
  max-width: ${theme.breakpoints.xxl}px;
  width: 100%;
`;

export const BackgroundImage = styled.picture`
  height: 100%;
  max-height: unset;
  display: block;

  img {
    ${backgroundImageImg}

    ${breakpoint("md")`
      max-height: 75%;
    `};

    ${breakpoint("xxl")`
      border-bottom-left-radius: 128px;
      border-bottom-right-radius: 128px;
    `};
  }
`;

export const Overlay = styled.div`
  ${backgroundImageImg};

  ${breakpoint("md")`
    max-height: 75%;
  `};

  ${breakpoint("xxl")`
    border-bottom-left-radius: 128px;
    border-bottom-right-radius: 128px;
  `};

  background: linear-gradient(135deg, #002a33 0%, rgba(0, 42, 51, 0) 100%);
  margin-left: -1px;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  width: 100%;
  margin: 0 1rem;
  position: relative;

  ${breakpoint("md")`
    margin: 0 1.5rem;
  `};

  ${breakpoint("lg")`
    margin: 0 3rem;
  `};
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 90vh;
  position: relative;

  ${breakpoint("md")`
    height: max(75vh, 48rem);
    &, ${Inner}, ${Overlay}, ${BackgroundImage} > img {
      max-height: 768px;
    };
  `};
`;
