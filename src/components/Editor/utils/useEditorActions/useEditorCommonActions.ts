import {
  UpdateQuizInput,
  UpdateQuizVersionInput,
  useSaveQuizVersionMutation,
  useUpdateQuizVersionMutation,
  useUpdateQuizMutation,
} from "@generated/graphql";
import { ErrorCode } from "@typeDefs/error";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface CommonActions {
  saveVersion(input: UpdateQuizVersionInput, publish: boolean): Promise<string>;
  updateVersion(input: UpdateQuizVersionInput): Promise<void>;
  updateBasic(input: UpdateQuizInput): Promise<void>;
}

const stripTypename = (object: any) => {
  const omitTypename = (key, value) =>
    key === "__typename" ? undefined : value;

  return JSON.parse(JSON.stringify(object), omitTypename);
};

const useEditorCommonActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): CommonActions => {
  const [
    saveVersionMutation,
    { loading: versionSaveLoading },
  ] = useSaveQuizVersionMutation();
  const [
    updateBasicMutation,
    { loading: basicUpdateLoading },
  ] = useUpdateQuizMutation();
  const [
    updateVersionMutation,
    { loading: versionUpdateLoading },
  ] = useUpdateQuizVersionMutation();

  const saveVersion = async (values, publish) => {
    if (versionSaveLoading) {
      return "";
    }

    const currentData = getCurrentData();

    try {
      const result = await saveVersionMutation({
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

      return id;
    } catch (e) {
      console.error(e);
    }

    return "";
  };

  const updateVersion = async (input: UpdateQuizVersionInput) => {
    if (versionUpdateLoading) {
      return;
    }

    const currentData = getCurrentData();

    try {
      await updateVersionMutation({
        variables: {
          id: currentData.quiz.lastUpdatedVersion.id,
          values: stripTypename(input),
        },
      });
    } catch (e) {
      console.error(e);

      if (
        typeof e.graphQLErrors === "object" &&
        e.graphQLErrors[0]?.message?.code === ErrorCode.QUIZ_VERSION_PUBLISHED
      ) {
        await saveVersion(input, false);
      }
    }
  };

  const updateBasic = async (input: UpdateQuizInput) => {
    if (basicUpdateLoading) {
      return;
    }

    const currentData = getCurrentData();

    try {
      await updateBasicMutation({
        variables: {
          id: currentData.quiz.id,
          values: stripTypename(input),
        },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    saveVersion,
    updateVersion,
    updateBasic,
  };
};

export default useEditorCommonActions;
