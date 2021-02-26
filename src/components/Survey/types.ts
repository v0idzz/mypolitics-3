import { Survey } from "@generated/graphql";

export type LeanSurvey = Pick<Survey, "id" | "finished" | "updatedAt">;
