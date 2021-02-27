import {
  UpdateQuizInput,
  UpdateQuizVersionInput,
  useSaveQuizVersionMutation,
  useUpdateQuizVersionMutation,
  useUpdateQuizMutation,
} from "@generated/graphql";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface CommonActions {
  saveVersion(input: UpdateQuizVersionInput, publish: boolean): Promise<void>;
  updateVersion(input: UpdateQuizVersionInput): Promise<void>;
  updateBasic(input: UpdateQuizInput): Promise<void>;
}

const useEditorCommonActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): CommonActions => {
  const [saveVersion] = useSaveQuizVersionMutation();
  const [updateVersion] = useUpdateQuizVersionMutation();
  const [updateBasic] = useUpdateQuizMutation();

  const stripTypename = (object: any) => {
    const omitTypename = (key, value) =>
      key === "__typename" ? undefined : value;

    return JSON.parse(JSON.stringify(object), omitTypename);
  };

  return {
    saveVersion: async (values, publish) => {
      const currentData = getCurrentData();

      try {
        const result = await saveVersion({
          variables: {
            id: currentData.quiz.lastUpdatedVersion.id,
            values: stripTypename(values),
            publish,
          },
        });

        const { id, publishedOn } = result.data.saveQuizVersion;

        update({
          quiz: {
            lastUpdatedVersion: {
              id,
              publishedOn,
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    updateVersion: async (input: UpdateQuizVersionInput) => {
      const currentData = getCurrentData();

      try {
        await updateVersion({
          variables: {
            id: currentData.quiz.lastUpdatedVersion.id,
            values: stripTypename(input),
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    updateBasic: async (input: UpdateQuizInput) => {
      const currentData = getCurrentData();

      try {
        await updateBasic({
          variables: {
            id: currentData.quiz.id,
            values: stripTypename(input),
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
  };
};

export default useEditorCommonActions;
