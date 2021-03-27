import { EditorQuizQuery, UpdateQuizInput } from "@generated/graphql";
import { useLanguages } from "@components/Editor/utils/getLanguages";

const useBasicInput = (
  quizData?: EditorQuizQuery
): UpdateQuizInput | undefined => {
  if (!quizData) {
    return undefined;
  }

  const { quiz } = quizData;
  const { title, logoUrl, description } = quiz;
  const languages = useLanguages(quizData);

  return {
    title,
    logoUrl,
    description,
    languages,
  };
};

export default useBasicInput;
