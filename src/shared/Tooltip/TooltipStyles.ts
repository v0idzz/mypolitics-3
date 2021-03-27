import styled from "styled-components";

const arrowStyles = {
  top: "bottom: -4px;",
  bottom: "top: -4px;",
  left: "right: -4px;",
  right: "left: -4px;",
};

export const TooltipContainer = styled.div<{ color: string }>`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  z-index: 10;

  ${() => {
    const keys = Object.keys(arrowStyles);
    let styles = "";
    for (const k of keys) {
      styles += `
      &[data-popper-placement^="${k}"] > div {
        ${arrowStyles[k]}
      }
      `;
    }
    return styles;
  }}

  &-enter {
    opacity: 0;
  }
  &-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  &-exit {
    opacity: 1;
  }
  &-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export const TooltipArrow = styled.div`
  visibility: hidden;

  &,
  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  &::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
`;
