import styled from "styled-components";

export const ColorInputWrapper = styled.div`
  position: relative;

  input {
    width: 100%;
    cursor: pointer;
  }
`;

export const BlockPickerWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: 1000;
`;
