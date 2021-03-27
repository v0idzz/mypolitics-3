import { EditorQuizQuery, UpdateQuizInput } from "@generated/graphql";
import { useLanguages } from "@components/Editor/utils/useLanguages";

const useBasicInput = (
  quizData?: EditorQuizQuery
): UpdateQuizInput | undefined => {
  const languages = useLanguages(quizData);

  if (!quizData) {
    return undefined;
  }

  const { quiz } = quizData;
  const { title, logoUrl, description } = quiz;

  return {
    title,
    logoUrl,
    description,
    languages,
  };
};

export default useBasicInput;
