import styled from "styled-components";

export const CompassSelect = styled.div`
  display: block;
  width: 10rem;
  border-radius: 0.5rem;
  height: 10rem;
  background-image: url(${require("@assets/images/compass_chart.png")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
`;

export const CompassPoint = styled.img<{ position: number[] }>`
  position: absolute;
  display: block;
  height: 1rem;
  width: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primaryDarken};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  ${({ position }) => {
    const x = (position[0] + 1) / 2;
    const y = (position[1] + 1) / 2;
    return `
      left: ${x * 100}%;
      top: ${y * 100}%;
    `;
  }}
`;
