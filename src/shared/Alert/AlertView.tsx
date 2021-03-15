import React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

interface Props {
  type: "success" | "error" | "info";
}

const Alert = styled.div<Props>`
  padding: 1rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.5rem;
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  font-size: 1rem;
  
  a {
    text-decoration: underline;
  }

  ${({ type, theme }) => {
    const color = {
      info: theme.colors.primary,
      success: theme.colors.green,
      error: theme.colors.red,
    }[type];

    return css`
      color: ${color};
      background: ${transparentize(0.9, color)};
    `;
  }}
`;

export default Alert;
