import { Quiz, Survey } from "@generated/graphql";

export interface SurveyHistory {
  quiz: Pick<Quiz, "id" | "logoUrl">;
  surveys: Array<Pick<Survey, "id" | "finished" | "updatedAt">>;
}
