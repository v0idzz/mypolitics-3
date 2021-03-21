import { MeRespondentSurveysQuery } from "@generated/graphql";
import { LeanSurvey } from "@components/Survey";

export interface SurveyHistory {
  quiz: MeRespondentSurveysQuery["meRespondent"]["surveys"][0]["quizVersion"]["quiz"];
  surveys: LeanSurvey[];
}
