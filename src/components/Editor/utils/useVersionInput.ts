import {
  EditorQuizQuery,
  QuizCompassAxis,
  QuizCompassIdeologyInput,
  QuizCompassMode,
  UpdateQuizVersionInput,
} from "@generated/graphql";
import { stripTypename } from '@utils/strip-typename';

export const convertToInput = (
  quizData: EditorQuizQuery
): UpdateQuizVersionInput => {
  const { quiz } = quizData;
  const {
    questions: quizQuestions,
    traits: quizTraits,
    compassModes: quizCompassModes,
    parties: quizParties,
    ideologies: quizIdeologies,
    axes: quizAxes,
    publishedOn,
  } = quiz.lastUpdatedVersion;
  const compassAxisToInput = ({
    name,
    leftIdeologies,
    rightIdeologies,
  }: QuizCompassAxis) => {
    const ideologyToInput = ({
      weight,
      ideology,
    }): QuizCompassIdeologyInput => ({
      ideology: ideology.id,
      weight,
    });

    return {
      name,
      leftIdeologies: (leftIdeologies || []).map(ideologyToInput),
      rightIdeologies: (rightIdeologies || []).map(ideologyToInput),
    };
  };

  const compassModeToInput = (data: QuizCompassMode) => {
    const { name, horizontal, vertical, third } = data;

    return {
      name,
      horizontal: compassAxisToInput(horizontal),
      vertical: compassAxisToInput(vertical),
      ...(third
        ? {
            third: compassAxisToInput(third),
          }
        : { third: null }),
    };
  };

  const axes = quizAxes
    .filter((axis) => !!axis?.left && !!axis?.right)
    .map(({ left, right }) => ({
      left: left?.id || null,
      right: right?.id || null,
    }));

  const toIds = (entity) => entity.id;
  const compassModes = stripTypename(quizCompassModes).map(compassModeToInput);
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
    axes,
  };
};

const useVersionInput = (
  quizData?: EditorQuizQuery
): UpdateQuizVersionInput | undefined => {
  if (!quizData) {
    return undefined;
  }

  return convertToInput(quizData);
};

export default useVersionInput;
