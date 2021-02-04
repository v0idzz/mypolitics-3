import { ResultsAxisPartsFragment } from "@generated/graphql";

export type ResultsAxisSideData = ResultsAxisPartsFragment["left"];

export interface AxisSide {
  data?: ResultsAxisSideData;
  percentage: number;
}

export type Side = "left" | "center" | "right";
