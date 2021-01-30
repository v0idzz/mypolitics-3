import styled from "styled-components";

export const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-right: 2rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primaryDarken};
  background: ${({ theme }) => theme.colors.background};
  border: 0;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
  cursor: pointer;
  background-image: url(${require("@assets/images/icons/fa-solid_angle-down.png")});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 0.5rem);
  background-position-y: 50%;

  ::-ms-expand {
    display: none;
  }
`;

export const Option = styled.option``;
