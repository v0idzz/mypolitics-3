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
import { useDebounceCallback } from "@react-hook/debounce";

export interface EffectInput {
  type: "agree" | "disagree";
  entity: "ideologies" | "parties";
  op: "add" | "remove";
  instance: any;
}

export interface UseQuestion {
  data: EditorQuestionPartsFragment;
  handleChange: {
    text(value: TextTranslationInput): void;
    effect(value: EffectInput): void;
  };
}

const useQuestion = (id: string): UseQuestion => {
  const {
    data,
    getCurrentData,
    update,
  } = useEntity<EditorQuestionPartsFragment>({
    id,
    name: "Question",
    document: EditorQuestionPartsFragmentDoc,
  });
  const [firstTime, setFirstTime] = useState(true);
  const [updateQuestion, { loading }] = useUpdateQuestionMutation();
  const [dataDebounced] = useDebounce(data, 1000, {
    leading: true,
  });

  const handleTextChange = (text: TextTranslationInput) =>
    update({
      text,
    });

  const handleEffectChange = ({ type, entity, op, instance }: EffectInput) => {
    const currentData = getCurrentData();
    const getArray = (arrType) => currentData.effects[arrType][entity];
    const oppositeType = type === "agree" ? "disagree" : "agree";
    const currentArray: any[] = getArray(type);
    const oppositeArray: any[] = getArray(oppositeType);
    const addOp = op === "add";
    const existsInCurrent = currentArray.map((i) => i.id).includes(instance.id);
    const existsInOpposite = oppositeArray
      .map((i) => i.id)
      .includes(instance.id);

    if (addOp && existsInCurrent) {
      return;
    }

    if (addOp && existsInOpposite) {
      const newData = oppositeArray.filter((i) => i.id !== instance.id);

      update({
        effects: {
          [oppositeType]: {
            [entity]: newData,
          },
        },
      });
    }

    const newData =
      op === "add"
        ? currentArray.concat(instance)
        : currentArray.filter((i) => i.id !== instance.id);

    update({
      effects: {
        [type]: {
          [entity]: newData,
        },
      },
    });
  };

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

  const handleUpdate = useDebounceCallback(
    async () => {
      if (loading) {
        return;
      }

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
    },
    1000,
    false
  );

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
      effect: handleEffectChange,
    },
  };
};

export default useQuestion;
