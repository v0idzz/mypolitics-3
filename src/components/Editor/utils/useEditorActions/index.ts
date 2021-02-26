import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { EditorQuizDocument, EditorQuizQuery } from "@generated/graphql";
import * as R from "ramda";
import useEditorQuestionActions, {
  QuestionActions,
} from "./useEditorQuestionActions";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";
import useEditorCommonActions, {
  CommonActions,
} from "./useEditorCommonActions";

export interface EditorActions extends CommonActions {
  question: QuestionActions;
  update: EditorUpdateFunction;
  getCurrentData: EditorGetCurrentDataFunction;
}

const useEditorActions = (): EditorActions => {
  const client = useApolloClient();
  const { query } = useRouter();
  const slug = `${query.slug}`;

  const fragment = {
    query: EditorQuizDocument,
    variables: {
      slug,
    },
  };

  const getCurrentData: EditorGetCurrentDataFunction = () =>
    client.readQuery(fragment);

  const update: EditorUpdateFunction = (updateData) => {
    const currentData = getCurrentData();
    const data = R.mergeDeepRight(currentData, updateData);

    client.writeQuery<EditorQuizQuery>({
      ...fragment,
      data,
    });
  };

  const question = useEditorQuestionActions(getCurrentData, update);
  const common = useEditorCommonActions(getCurrentData, update);

  return {
    question,
    ...common,
    update,
    getCurrentData,
  };
};

export default useEditorActions;
