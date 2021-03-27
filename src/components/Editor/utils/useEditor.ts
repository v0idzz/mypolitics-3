import {
  EditorQuizQueryHookResult,
  UpdateQuizInput,
  UpdateQuizVersionInput,
} from "@generated/graphql";
import { useEffect } from "react";
import { useDebounceCallback } from "@react-hook/debounce";
import hash from "object-hash";
import { useLanguages } from "./useLanguages";
import useBasicInput from "./useBasicInput";
import useVersionInput from "./useVersionInput";
import useEditorData from "./useEditorData";
import useEditorActions, { EditorActions } from "./useEditorActions";

export interface UseEditor {
  data: EditorQuizQueryHookResult;
  versionInput?: UpdateQuizVersionInput;
  basicInput?: UpdateQuizInput;
  actions: EditorActions;
}

export const useEditor = (): UseEditor => {
  const data = useEditorData();
  const actions = useEditorActions();
  const versionInput = useVersionInput(data?.data);
  const basicInput = useBasicInput(data?.data);
  const versionInputHash = hash({ versionInput });
  const basicInputHash = hash({ basicInput });
  const languages = useLanguages(data?.data);
  const languagesString = JSON.stringify(languages);

  const handleVersionInput = useDebounceCallback(async () => {
    if (typeof versionInput === "undefined") {
      return;
    }

    await actions.updateVersion(versionInput);
  }, 5000);

  const handleBasicInput = useDebounceCallback(async () => {
    if (typeof basicInput === "undefined") {
      return;
    }

    await actions.updateBasic(basicInput);
  }, 5000);

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
