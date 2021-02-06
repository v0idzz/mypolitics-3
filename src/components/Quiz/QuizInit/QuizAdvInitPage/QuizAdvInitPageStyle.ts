import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const TopText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const FormWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const FormContainer = styled(TopText)`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-radius: 0.5rem;

  ${breakpoint("md")`
    padding: 1.5rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `}

  .compass {
    margin: auto;
    border-radius: 0.5rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  *:not(:last-child) {
    margin-right: 1rem;
  }
`;
