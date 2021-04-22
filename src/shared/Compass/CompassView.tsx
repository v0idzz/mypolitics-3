import React from "react";
import { Container, Point } from "./CompassStyle";

type PointType = number[];

interface Props {
  value: PointType;
  onChange?(point: PointType): void;
}

const QuizCompassInput: React.FC<Props> = ({ value, onChange }) => {
  const clickable = typeof onChange !== "undefined";

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!onChange) {
      return;
    }

    const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const compass = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - compass.x;
    const clickY = e.clientY - compass.y;
    const roundedX = round(clickX / compass.width);
    const roundedY = round(clickY / compass.height);
    const x = roundedX * 2 - 1;
    const y = roundedY * 2 - 1;

    onChange([x, -y]);
  };

  return (
    <Container className="compass" clickable={clickable} onClick={handleClick}>
      <Point position={value} />
    </Container>
  );
};

export default QuizCompassInput;
