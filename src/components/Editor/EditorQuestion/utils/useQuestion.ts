import {
  EditorQuestionPartsFragment,
  EditorQuestionPartsFragmentDoc,
  TextTranslationInput,
  UpdateQuestionInput,
  useUpdateQuestionMutation,
} from "@generated/graphql";
import { useEffect, useState } from "react";
import useEntity from "@components/Editor/utils/useEntity";
import { useChangeTracker } from "@components/Editor/utils/ChangeTrackerContext";

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
  const { enqueueChange } = useChangeTracker();
  const [firstTime, setFirstTime] = useState(true);
  const [updateQuestion, { loading }] = useUpdateQuestionMutation();

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

  const handleUpdate = () =>
    enqueueChange(async () => {
      if (loading) {
        return;
      }

      try {
        const result = await updateQuestion({
          variables: {
            id,
            values: convertDataToInput(data),
          },
        });

        update(result.data.updateQuestion);
      } catch (e) {
        console.error(e);
      }
    }, id);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      return;
    }

    handleUpdate();
  }, [data]);

  return {
    data,
    handleChange: {
      text: handleTextChange,
      effect: handleEffectChange,
    },
  };
};

export default useQuestion;
