import { QuizFeatures } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";

export const useQuizFeatures = (
  features: Omit<
    QuizFeatures,
    "authorizedParties" | "SingleQuizQuery" | "traits"
  >
): string[] => {
  const { value: firstTimer } = useFirstTimer();
  const { t } = useTranslation("quiz");
  const quizFeatures = [];
  const { questionsNumber, ...featuresWoQuestionsNumber } = features;
  const featuresData = firstTimer ? featuresWoQuestionsNumber : features;

  const getTranslatedName = (
    key: string,
    options?: Record<string, any>,
    fallback = true
  ) =>
    t(`features.${key}`, options, {
      fallback: fallback
        ? getTranslatedName(`${key}.other`, options, false)
        : `features.${key}`,
    });

  Object.entries(featuresData).forEach(([key, featureValue]) => {
    if (featureValue <= 0) {
      return;
    }

    if (typeof featureValue === "boolean") {
      quizFeatures.push(getTranslatedName(key));
    }

    if (typeof featureValue === "number") {
      quizFeatures.push(getTranslatedName(key, { count: featureValue }));
    }
  });

  return quizFeatures;
};
