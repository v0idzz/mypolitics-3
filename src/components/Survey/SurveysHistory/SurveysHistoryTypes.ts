import { Quiz } from "@generated/graphql";
import { LeanSurvey } from "@components/Survey";

export interface SurveyHistory {
  quiz: Pick<Quiz, "id" | "logoUrl" | "slug">;
  surveys: LeanSurvey[];
}
