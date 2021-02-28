import styled from "styled-components";
import { Container as InternationalizedInputContainer } from "@shared/InternationalizedInput/InternationalizedInputStyle";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};

  ${InternationalizedInputContainer} {
    background: ${({ theme }) => theme.colors.backgroundDarken};
  }
`;

export const AxisWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.25rem;
`;

export const AxisTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.textMuted};
  opacity: 0.75;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;
