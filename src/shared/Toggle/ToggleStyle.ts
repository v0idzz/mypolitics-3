import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
`;

export const Toggle = styled.div`
  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.primaryDarken};
  width: 4rem;
  height: 2rem;
  position: relative;
  transition: all 0.2s;
  margin-right: 0.5rem;

  &::before {
    background-color: white;
    border-radius: 999px;
    content: "";
    position: absolute;
    transition: all 0.2s;
    top: 2px;
    right: calc(50% + 2px);
    height: calc(100% - 4px);
    width: calc(50% - 4px);
  }

  &[aria-checked="true"] {
    background-color: ${({ theme }) => theme.colors.primary};

    &::before {
      right: 2px;
      height: calc(100% - 4px);
      width: calc(50% - 4px);
    }
  }
`;
