import { EditorAxisPartsFragment } from '@generated/graphql';
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface AxesActions {
  delete(id: string);
  add(): Promise<void>;
}

const useEditorAxesActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): AxesActions => ({
  delete: (id: string) => {
    const currentData = getCurrentData();
    const currentAxes = currentData.quiz.lastUpdatedVersion.axes;
    const axes = currentAxes.filter((a) => a.id !== id);

    update({
      quiz: {
        lastUpdatedVersion: {
          axes,
        },
      },
    });
  },
  add: async () => {
    const currentData = getCurrentData();

    const axis: EditorAxisPartsFragment = {
      __typename: "QuizAxis",
      id: (Math.random() * new Date().getTime()).toString(),
      left: {
        id: "",
      },
      right: {
        id: "",
      },
    };

    update({
      quiz: {
        lastUpdatedVersion: {
          axes: [...currentData.quiz.lastUpdatedVersion.axes, axis],
        },
      },
    });
  },
});

export default useEditorAxesActions;
