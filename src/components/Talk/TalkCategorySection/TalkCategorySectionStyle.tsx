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

export const Header = styled.header<{ background: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ background }) => background};
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border-radius: 999px;
`;

export const Image = styled.img`
  max-height: 5rem;
  max-width: 100%;
`;
