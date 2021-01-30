import React from "react";
import { CompassPoint, CompassSelect } from "./QuizCompassInputStyle";

type Point = number[];

interface Props {
  value: Point;
  onChange(point: Point): void;
}

const QuizCompassInput: React.FC<Props> = ({ value, onChange }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const round = (num) => Math.round((num + Number.EPSILON) * 100) / 100;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const compass = e.target.getBoundingClientRect();
    const clickX = e.clientX - compass.x;
    const clickY = e.clientY - compass.y;
    const roundedX = round(clickX / compass.width);
    const roundedY = round(clickY / compass.height);
    const x = roundedX * 2 - 1;
    const y = roundedY * 2 - 1;

    onChange([x, y]);
  };

  return (
    <CompassSelect onClick={handleClick}>
      <CompassPoint position={value} />
    </CompassSelect>
  );
};

export default QuizCompassInput;
