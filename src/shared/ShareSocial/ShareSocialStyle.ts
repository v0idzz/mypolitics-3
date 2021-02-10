import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${breakpoint("xs", "lg")`
    flex-direction: column;
    justify-content: center;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  `};

  ${breakpoint("lg")`
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  `};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  box-shadow: 0px 0px 24px 0px rgba(0, 179, 219, 0.33);

  ${breakpoint("xs", "lg")`
    width: 100%;
  `};

  ${breakpoint("xs", "sm")`
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  `};

  ${breakpoint("sm")`
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  button {
    padding: 1rem;
  }

  ${breakpoint("xs", "sm")`
    justify-content: center;
    margin-bottom: -1rem;

    & > * {
      margin-bottom: 1rem;
    }

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  `};

  ${breakpoint("sm")`
    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  `}
`;
