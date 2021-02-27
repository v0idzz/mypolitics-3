import {
  EditorQuestionPartsFragment,
  EditorQuestionPartsFragmentDoc,
  TextTranslationInput,
  UpdateQuestionInput,
  useUpdateQuestionMutation,
} from "@generated/graphql";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import useEntity from "@components/Editor/utils/useEntity";

interface UseQuestion {
  data: EditorQuestionPartsFragment;
  handleChange: {
    text(value: TextTranslationInput): void;
  };
}

export const useQuestion = (id: string): UseQuestion => {
  const { data, update } = useEntity<EditorQuestionPartsFragment>({
    id,
    name: "Question",
    document: EditorQuestionPartsFragmentDoc,
  });
  const [firstTime, setFirstTime] = useState(true);
  const [updateQuestion] = useUpdateQuestionMutation();
  const [dataDebounced] = useDebounce(data, 1000, {
    leading: true,
  });

  const handleTextChange = (text: TextTranslationInput) =>
    update({
      ...data,
      text,
    });

  const convertDataToInput = (
    value: EditorQuestionPartsFragment
  ): UpdateQuestionInput => {
    const { __typename, ...text } = value.text;
    const toId = (x) => x.id;
    const mapEffectsToIds = ({ ideologies, parties }) => ({
      ideologies: ideologies.map(toId),
      parties: parties.map(toId),
    });
    const toEntry = (k) => [k, mapEffectsToIds(value.effects[k])];
    const withoutTypeName = (k) => k !== "__typename";
    const effectsEntries = Object.keys(value.effects)
      .filter(withoutTypeName)
      .map(toEntry);
    const effects = Object.fromEntries(effectsEntries);

    return {
      text,
      effects,
    };
  };

  const handleUpdate = async () => {
    try {
      const result = await updateQuestion({
        variables: {
          id,
          values: convertDataToInput(dataDebounced),
        },
      });

      update(result.data.updateQuestion);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    }

    handleUpdate();
  }, [dataDebounced]);

  return {
    data,
    handleChange: {
      text: handleTextChange,
    },
  };
};
