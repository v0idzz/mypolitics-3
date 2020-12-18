import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  height: auto;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xxl}px;
  object-fit: cover;
  display: block;

  ${breakpoint("xxl")`
    border-radius: 64px;
  `};
`;

export const Overlay = styled(Image)`
  background: linear-gradient(180deg, #002a33 0%, rgba(0, 42, 51, 0) 100%);
  margin-left: -1px;
`;

export const Inner = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.xxl}px;
  z-index: 1;
  width: 100%;

  ${breakpoint("md")`
    padding: 8rem;
  `};

  ${breakpoint("xs", "md")`
    flex-direction: column;
  `};
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;

  ${breakpoint("xs", "md")`
    text-align: center;
    margin-bottom: 2rem;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentTitle = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.background};
  opacity: 1;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.2;
  margin-bottom: 1rem;

  ${breakpoint("md")`
    font-size: 1.25rem;
    margin-bottom: 1.125rem;
  `};

  ${breakpoint("lg")`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  `};
`;

export const PartnerLink = styled.a`
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const PartnerImage = styled.img`
  display: block;
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  border-radius: 0.5rem;

  ${breakpoint("md")`
    height: 4rem;
    width: 4rem;
  `};
`;

export const ContentList = styled.div`
  display: flex;
  align-items: center;
`;
