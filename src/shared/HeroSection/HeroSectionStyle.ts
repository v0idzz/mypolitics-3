import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const BackgroundImage = styled.img`
  max-height: 90%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  z-index: -1;
  object-fit: cover;
  max-width: ${({ theme }) => theme.breakpoints.xxl}px;
  width: 100%;

  ${breakpoint("md")`
    max-height: 75%;
  `};

  ${breakpoint("xxl")`
    border-bottom-left-radius: 128px;
    border-bottom-right-radius: 128px;
  `};
`;

export const Overlay = styled(BackgroundImage)`
  background: linear-gradient(90deg, #002a33 0%, rgba(0, 42, 51, 0) 100%);
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

  ${breakpoint("md")`
    height: 75vh;
    &, ${Inner}, ${Overlay}, ${BackgroundImage} {
      max-height: 768px;
    };
  `};
`;
