import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: grid;
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;

  ${breakpoint("xs", "md")`
    grid-template-columns: 100%;
    grid-template-rows: 10rem auto;
  `}

  ${breakpoint("sm", "md")`
    grid-template-rows: 15rem auto;
  `}

  ${breakpoint("md")`
    grid-template-columns: 15rem auto;
  `}
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Biography = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.backgroundDarken};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  text-align: left;
  padding: 2rem;
`;
