import {
  CreateQuestionInput,
  useCreateQuestionMutation,
} from "@generated/graphql";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface QuestionActions {
  delete(id: string);
  add(): Promise<void>;
}

const useEditorQuestionActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): QuestionActions => {
  const [createQuestion] = useCreateQuestionMutation();

  return {
    delete: (id: string) => {
      const currentData = getCurrentData();
      const currentQuestions = currentData.quiz.lastUpdatedVersion.questions;
      const questions = currentQuestions.filter((q) => q.id !== id);

      update({
        quiz: {
          lastUpdatedVersion: {
            questions,
          },
        },
      });
    },
    add: async () => {
      const currentData = getCurrentData();
      const currentQuestions = currentData.quiz.lastUpdatedVersion.questions;
      const values: CreateQuestionInput = {
        text: {
          pl: "",
          en: "",
        },
        effects: {
          agree: {
            ideologies: [],
            parties: [],
          },
          disagree: {
            ideologies: [],
            parties: [],
          },
        },
      };

      try {
        const newQuestion = await createQuestion({
          variables: {
            quizVersion: currentData.quiz.lastUpdatedVersion.id,
            values,
          },
        });

        const questions = [
          ...currentQuestions,
          newQuestion.data.createQuestion,
        ];

        update({
          quiz: {
            lastUpdatedVersion: {
              questions,
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
};

export default useEditorQuestionActions;
