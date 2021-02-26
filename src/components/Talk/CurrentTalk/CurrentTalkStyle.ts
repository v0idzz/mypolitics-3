import styled, { keyframes } from "styled-components";
import { Lead } from "@shared/Typography";
import breakpoint from "styled-components-breakpoint";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  max-width: 900px;
  margin: auto;

  ${breakpoint("md")`
     border-radius: 1rem;
     grid-gap: 2rem;
     padding: 2rem;
  `}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoint("xs", "sm")`
     flex-direction: column-reverse;
  `}

  ${Lead} {
    color: ${({ theme }) => theme.colors.textMuted};
    opacity: 0.75;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoint("xs", "sm")`
     margin-top: 0.5rem;
     width: 100%;
  `}
`;

export const Content = styled.div`
  width: 100%;
  box-shadow: 0 0 32px 0 rgba(0, 86, 105, 0.25);
  border-radius: 0.5rem;
  overflow: hidden;

  iframe {
    width: 80vw;
    height: 100.5%;
    min-height: calc(80vw / 1.77777778);

    ${breakpoint("lg")`
       width: 700px;
       min-height: calc(700px / 1.77777778);
    `}
  }
`;

export const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: #fce0e2;
  box-shadow: 0 0 24px 0 #fce0e2;
  color: ${({ theme }) => theme.colors.red};
  flex-shrink: 0;
  
  ${breakpoint("xs", "sm")`
     margin-left: auto;
  `}
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const BadgeDot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.red};
  animation: ${blink} 4s infinite;
  margin-right: 0.5rem;
`;

export const BadgeTitle = styled.div`
  color: ${({ theme }) => theme.colors.red};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.primary.bold};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1rem;
`;
