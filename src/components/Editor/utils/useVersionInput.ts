import {
  EditorQuizQuery,
  QuizCompassAxis,
  QuizCompassAxisInput,
  QuizCompassIdeology,
  QuizCompassMode,
  UpdateQuizVersionInput,
} from "@generated/graphql";

const useVersionInput = (
  quizData?: EditorQuizQuery
): UpdateQuizVersionInput | undefined => {
  if (!quizData) {
    return undefined;
  }

  const { quiz } = quizData;
  const {
    questions: quizQuestions,
    traits: quizTraits,
    compassModes: quizCompassModes,
    parties: quizParties,
    ideologies: quizIdeologies,
    publishedOn,
  } = quiz.lastUpdatedVersion;
  const compassAxisToInput = ({
    name,
    leftIdeologies,
    rightIdeologies,
  }: QuizCompassAxis): QuizCompassAxisInput => {
    const ideologyToInput = ({ weight, ideology }: QuizCompassIdeology) => ({
      ideology: ideology.id,
      weight,
    });

    return {
      name,
      leftIdeologies: leftIdeologies.map(ideologyToInput),
      rightIdeologies: rightIdeologies.map(ideologyToInput),
    };
  };

  const compassModeToInput = ({
    name,
    horizontal,
    vertical,
    third,
  }: QuizCompassMode) => ({
    name,
    horizontal: compassAxisToInput(horizontal),
    vertical: compassAxisToInput(vertical),
    ...(third
      ? {
          third: compassAxisToInput(third),
        }
      : {}),
  });

  const toIds = (entity) => entity.id;
  const compassModes = quizCompassModes.map(compassModeToInput);
  const questions = quizQuestions.map(toIds);
  const traits = quizTraits.map(toIds);
  const parties = quizParties.map(toIds);
  const ideologies = quizIdeologies.map(toIds);

  return {
    compassModes,
    traits,
    questions,
    publishedOn,
    parties,
    ideologies,
  };
};

export default useVersionInput;
