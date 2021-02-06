import React from "react";
import { Container, Spinner as SpinnerIcon } from "./LoadingStyle";

interface Props {
  thickness?: number;
  gap?: number;
  color?: string;
}

const Spinner: React.FC<Props> = ({ thickness = 4, gap = 4, color }) => (
  <SpinnerIcon role="img" viewBox="0 0 32 32">
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - thickness / 2}
      stroke={color}
      fill="none"
      strokeWidth={thickness}
      strokeDasharray={Math.PI * 2 * (11 - gap)}
      strokeLinecap="round"
    />
  </SpinnerIcon>
);

const Loading: React.FC<Props> = ({ thickness = 4, gap = 4, color }) => (
  <Container>
    <Spinner thickness={thickness} gap={gap} color={color} />
  </Container>
);

export { Spinner };
export default Loading;
