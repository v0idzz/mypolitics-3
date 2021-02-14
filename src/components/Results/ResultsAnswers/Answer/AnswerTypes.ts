import { SingleSurveyExtendedQuery } from "@generated/graphql";

export type LeanAnswer = SingleSurveyExtendedQuery["survey"]["answers"][0];
export type LeanEffect = LeanAnswer["question"]["effects"]["agree"];
