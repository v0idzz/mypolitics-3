import { ResultsAxisPartsFragment } from "@generated/graphql";
import * as R from "ramda";
import useTranslation from "next-translate/useTranslation";
import { AxisSide } from "@components/Results/ResultsAxes/ResultsAxisSide/ResultsAxisSideTypes";
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

export const useAxisTitle = ({
  left,
  right,
  center,
}: AxisSides): string | undefined => {
  const { t, lang } = useTranslation("quiz");

  if (center.percentage === 1) {
    return undefined;
  }

  const side: AxisSide = R.cond([
    [R.gte(left.percentage), R.always(left)],
    [R.T, R.always(right)],
  ])(right.percentage);

  const ideologyName = side.data.name[lang].toLowerCase();
  const textTranslation = (type: string) =>
    t(`axesIdeologyGrades.${type}`, { ideology: ideologyName });

  return R.cond([
    [R.gte(R.__, 90), R.always(textTranslation("radical"))],
    [R.gte(R.__, 75), R.always(textTranslation("hard"))],
    [R.gte(R.__, 60), R.always(textTranslation("moderate"))],
    [R.T, R.always(textTranslation("center"))],
  ])(side.percentage * 100);
};
