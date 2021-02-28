import {
  EditorQuizQueryHookResult,
  UpdateQuizInput,
  UpdateQuizVersionInput,
} from "@generated/graphql";
import { useCallback, useEffect } from "react";
import { useDebounce } from "use-debounce";
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
  const [
    { versionInput: versionInputDebounce, basicInput: basicInputDebounce },
  ] = useDebounce({ versionInput, basicInput }, 2000);
  const versionInputDebounceJson = JSON.stringify({ versionInputDebounce });
  const basicInputDebounceJson = JSON.stringify({ basicInputDebounce });

  const handleVersionInput = async () => {
    if (typeof versionInputDebounce === "undefined") {
      return;
    }

    await actions.updateVersion(versionInputDebounce);
  };

  const handleBasicInput = async () => {
    if (typeof basicInputDebounce === "undefined") {
      return;
    }

    await actions.updateBasic(basicInputDebounce);
  };

  useEffect(() => {
    handleVersionInput();
  }, [versionInputDebounceJson]);

  useEffect(() => {
    handleBasicInput();
  }, [basicInputDebounceJson]);

  return {
    data,
    versionInput,
    basicInput,
    actions,
  };
};
