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
import useEditorAxesActions, { AxesActions } from "./useEditorAxesActions";
import useEditorTraitsActions, {
  TraitsActions,
} from "./useEditorTraitsActions";
import useEditorCompassesActions, {
  CompassesActions,
} from "./useEditorCompassesActions";
import useEditorPartiesActions, {
  PartiesActions,
} from "./useEditorPartiesActions";
import useEditorIdeologiesActions, {
  IdeologiesActions,
} from "./useEditorIdeologiesActions";

export interface EditorActions extends CommonActions {
  question: QuestionActions;
  compasses: CompassesActions;
  axes: AxesActions;
  parties: PartiesActions;
  ideologies: IdeologiesActions;
  traits: TraitsActions;
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
  const axes = useEditorAxesActions(getCurrentData, update);
  const common = useEditorCommonActions(getCurrentData, update);
  const traits = useEditorTraitsActions(getCurrentData, update);
  const compasses = useEditorCompassesActions(getCurrentData, update);
  const parties = useEditorPartiesActions(getCurrentData, update);
  const ideologies = useEditorIdeologiesActions(getCurrentData, update);

  return {
    question,
    axes,
    traits,
    compasses,
    parties,
    ...common,
    ideologies,
    update,
    getCurrentData,
  };
};

export default useEditorActions;
