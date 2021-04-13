import {
  EditorQuizQueryHookResult,
  UpdateQuizInput,
  UpdateQuizVersionInput,
} from "@generated/graphql";
import { useEffect } from "react";
import hash from "object-hash";
import { useLanguages } from "./useLanguages";
import useBasicInput from "./useBasicInput";
import useVersionInput from "./useVersionInput";
import useEditorData from "./useEditorData";
import useEditorActions, { EditorActions } from "./useEditorActions";
import { useChangeTracker } from "@components/Editor/utils/ChangeTrackerContext";

export interface UseEditor {
  data: EditorQuizQueryHookResult;
  versionInput?: UpdateQuizVersionInput;
  basicInput?: UpdateQuizInput;
  actions: EditorActions;
}

export const useEditor = (): UseEditor => {
  const { enqueueChange } = useChangeTracker();
  const data = useEditorData();
  const actions = useEditorActions();
  const versionInput = useVersionInput(data?.data);
  const basicInput = useBasicInput(data?.data);
  const versionInputHash = hash({ versionInput });
  const basicInputHash = hash({ basicInput });
  const languages = useLanguages(data?.data);
  const languagesString = JSON.stringify(languages);

  const handleVersionInput = () =>
    enqueueChange(async () => {
      if (typeof versionInput === "undefined") {
        return;
      }

      await actions.updateVersion(versionInput);
    }, "version");

  const handleBasicInput = () =>
    enqueueChange(async () => {
      if (typeof basicInput === "undefined") {
        return;
      }

      await actions.updateBasic(basicInput);
    }, "basic");

  useEffect(() => {
    handleVersionInput();
  }, [versionInputHash]);

  useEffect(() => {
    handleBasicInput();
  }, [basicInputHash, languagesString]);

  return {
    data,
    versionInput,
    basicInput,
    actions,
  };
};
