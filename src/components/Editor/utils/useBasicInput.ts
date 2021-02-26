import { EditorQuizQuery, UpdateQuizInput } from "@generated/graphql";

const useBasicInput = (
  quizData?: EditorQuizQuery
): UpdateQuizInput | undefined => {
  if (!quizData) {
    return undefined;
  }

  const { quiz } = quizData;
  const { title, logoUrl, description } = quiz;

  return {
    title,
    logoUrl,
    description,
  };
};

export default useBasicInput;
