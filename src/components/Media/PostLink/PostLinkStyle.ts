import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Inner = styled.article`
  padding: 1rem;
  width: calc(100% - 2rem);
  line-height: 1.2;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  text-transform: uppercase;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  opacity: 0.75;
`;

export const Category = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  text-transform: capitalize;
`;

export const Divider = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.light};
  opacity: 0.25;
  margin: 0 0.25em;
`;

export const SubCategory = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.light};
`;

export const Container = styled.a<{ imageUrl: string; large: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
  min-height: 14rem;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 42, 51, 0.25) 0%, #002a33 100%),
    url(${({ imageUrl }) => imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }

  ${({ large }) =>
    large &&
    css`
      ${breakpoint("md")`
        ${Inner} {
          padding: 1.5rem;
        }
        
        ${Title} {
          font-size: 1.5rem;
        }
    `};
    `};
`;
