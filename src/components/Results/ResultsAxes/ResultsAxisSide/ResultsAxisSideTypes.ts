import { ResultsAxisPartsFragment } from "@generated/graphql";

type ResultsAxisSide = ResultsAxisPartsFragment["left"];

export interface AxisSide {
  data?: ResultsAxisSide;
  percentage: number;
}

export type Side = "left" | "center" | "right";
