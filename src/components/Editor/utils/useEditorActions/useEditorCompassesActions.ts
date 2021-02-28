import { QuizCompassMode } from "@generated/graphql";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface CompassesActions {
  delete(id: number);
  add(): Promise<void>;
}

const useEditorCompassesActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): CompassesActions => ({
  delete: (index: number) => {
    const currentData = getCurrentData();
    const currentCompasses = currentData.quiz.lastUpdatedVersion.compassModes;
    const compassModes = currentCompasses.filter((_, k) => k !== index);

    update({
      quiz: {
        lastUpdatedVersion: {
          compassModes,
        },
      },
    });
  },
  add: async () => {
    const currentData = getCurrentData();
    const currentCompasses = currentData.quiz.lastUpdatedVersion.compassModes;

    const newCompass: QuizCompassMode = {
      name: {
        pl: "",
        en: "",
      },
      horizontal: {
        name: {
          pl: "",
          en: "",
        },
        rightIdeologies: [],
        leftIdeologies: [],
      },
      vertical: {
        name: {
          pl: "",
          en: "",
        },
        rightIdeologies: [],
        leftIdeologies: [],
      },
    };

    update({
      quiz: {
        lastUpdatedVersion: {
          compassModes: [...currentCompasses, newCompass],
        },
      },
    });
  },
});

export default useEditorCompassesActions;
