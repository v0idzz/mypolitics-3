import { QuizFeatures } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";

export const useQuizFeatures = (
  features: Omit<QuizFeatures, "authorizedParties">
): string[] => {
  const { t } = useTranslation("quiz");
  const quizFeatures = [];

  Object.entries(features).forEach(([key, featureValue]) => {
    if (featureValue < 0) {
      return;
    }

    if (typeof featureValue === "boolean") {
      quizFeatures.push(t(`features.${key}`));
    }

    if (typeof featureValue === "number") {
      quizFeatures.push(t(`features.${key}`, { number: featureValue }));
    }
  });

  return quizFeatures;
};
