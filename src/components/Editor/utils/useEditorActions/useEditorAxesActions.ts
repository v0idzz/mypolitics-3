import { useUpdateQuizVersionMutation } from "@generated/graphql";
import { convertToInput } from "@components/Editor/utils/useVersionInput";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface AxesActions {
  delete(id: string);
  add([left, right]: string[]): Promise<void>;
}

const useEditorAxesActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): AxesActions => {
  const [updateVersion, { loading }] = useUpdateQuizVersionMutation();

  return {
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
    add: async ([left, right]: (string | null)[]) => {
      if (loading) {
        return;
      }

      const currentData = getCurrentData();
      const versionInput = convertToInput(currentData);

      try {
        const { data } = await updateVersion({
          variables: {
            id: currentData.quiz.lastUpdatedVersion.id,
            values: {
              ...versionInput,
              axes: [
                ...versionInput.axes,
                {
                  left,
                  right,
                },
              ],
            },
          },
        });

        update({
          quiz: {
            lastUpdatedVersion: {
              axes: data.updateQuizVersion.axes,
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
};

export default useEditorAxesActions;
