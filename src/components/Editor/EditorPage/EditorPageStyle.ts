import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { spacingY } from '@utils/stylesUtils';

export const Container = styled.section`
  ${spacingY(1.5)}
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};

  ${breakpoint("md")`
    ${spacingY(3)}
    padding: 3rem;
  `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.25rem;

  ${breakpoint("md")`
    font-size: 1.5rem;
  `}

  & > div {
    display: flex;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  width: auto;
  display: flex;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border: 0;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: inherit;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
