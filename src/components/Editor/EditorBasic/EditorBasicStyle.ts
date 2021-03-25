import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { spacingY } from '@utils/stylesUtils';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  
  ${breakpoint("xs", "md")`
    display: block;
    ${spacingY(1)};
  `};
`;

export const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.25rem;
  border: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
