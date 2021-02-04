import React from "react";
import IdeologyIcon from "@shared/IdeologyIcon";
import { AxisSide, Side } from "./ResultsAxisSideTypes";
import { Bar, Icon } from "./ResultsAxisSideStyle";

interface Props {
  side: AxisSide;
  type: Side;
}

const ResultsAxisSide: React.FC<Props> = ({ side, type }) => {
  const AxisIcon = () => {
    if (!side.data) {
      return null;
    }

    const { icon, color } = side.data;

    return (
      <Icon background={color}>
        <IdeologyIcon icon={icon} />
      </Icon>
    );
  };

  const AxisBar = () => {
    const { percentage } = side;
    const background = side.data && side.data.color;
    const text = percentage > 0.2 ? `${(percentage * 100).toFixed(0)}%` : "";

    return <Bar background={background}>{text}</Bar>;
  };

  const elements = [<AxisIcon key="0" />, <AxisBar key="1" />];

  return <>{type === "left" ? elements : elements.reverse()}</>;
};

export default ResultsAxisSide;
