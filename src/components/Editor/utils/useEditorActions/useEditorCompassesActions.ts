import { QuizCompassMode } from "@generated/graphql";
import { DeepPartial } from "@typeDefs/common";
import * as R from "ramda";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface CompassesActions {
  delete(id: number);
  add(): Promise<void>;
  update(index: number, data: DeepPartial<QuizCompassMode>);
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
  update: (index: number, data: DeepPartial<QuizCompassMode>) => {
    const currentData = getCurrentData();
    const { compassModes } = currentData.quiz.lastUpdatedVersion;
    const compasses = JSON.parse(JSON.stringify(compassModes));
    compasses[index] = R.mergeDeepRight(compasses[index], data);

    update({
      quiz: {
        lastUpdatedVersion: {
          compassModes: compasses,
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
