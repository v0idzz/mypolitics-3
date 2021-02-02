import { ResultsAxisPartsFragment } from "@generated/graphql";
import { AxisSides } from "./ResultsAxisTypes";

const defaultIfNaN = (value: number, defaultNumber: number) =>
  Number.isNaN(value) ? defaultNumber : value;

export const getSides = ({
  maxPoints,
  right,
  left,
}: ResultsAxisPartsFragment): AxisSides => ({
  left: {
    data: left,
    percentage: defaultIfNaN(left.points / maxPoints, 0),
  },
  center: {
    percentage: defaultIfNaN(
      (maxPoints - (left.points + right.points)) / maxPoints,
      1
    ),
  },
  right: {
    data: right,
    percentage: defaultIfNaN(right.points / maxPoints, 0),
  },
});
