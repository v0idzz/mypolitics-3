import { SlimAnswer } from "@components/Survey/utils/useSurvey";

export interface BaseAnswersViewProps {
  questionId: string;
  onAnswer(answer: SlimAnswer);
}
