import styled from "styled-components";

export const Container = styled.div<{ clickable: boolean }>`
  display: block;
  width: 9.75rem;
  height: 9.75rem;
  background-image: url(${require("@assets/images/compass_chart.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  ${({ clickable }) => clickable && `cursor: pointer;`}
`;

export const Point = styled.div<{ position: number[] }>`
  position: absolute;
  display: block;
  height: 1rem;
  width: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primaryDarken};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: 0.2s ease-in-out;
  ${({ position }) => {
    const x = (position[0] + 1) / 2;
    const y = (-position[1] + 1) / 2;
    return `
      left: ${x * 100}%;
      top: ${y * 100}%;
    `;
  }}
`;
