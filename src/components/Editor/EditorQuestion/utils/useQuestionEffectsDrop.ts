import { ConnectDropTarget, useDrop } from "react-dnd";
import { itemTypes } from "@constants";
import { useEntityLazy } from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragmentDoc,
  EditorPartyPartsFragmentDoc,
} from "@generated/graphql";
import useQuestion from "@components/Editor/EditorQuestion/utils/useQuestion";

interface UseQuestionDrop {
  ref: ConnectDropTarget;
}

interface UseQuestionDropInput {
  item: string;
  type: "agree" | "disagree";
  questionId: string;
}

const itemsConfig = {
  ideology: {
    name: "Ideology",
    entity: "ideologies",
    document: EditorIdeologyPartsFragmentDoc,
  },
  party: {
    name: "Party",
    entity: "parties",
    document: EditorPartyPartsFragmentDoc,
  },
};

const useQuestionEffectsDrop = <T>({
  item,
  type,
  questionId,
}: UseQuestionDropInput): UseQuestionDrop => {
  const { handleChange } = useQuestion(questionId);
  const [getEntity] = useEntityLazy();
  const { name, entity, document } = itemsConfig[item];
  const handleDrop = ({ id }: any) => {
    const { data: instance } = getEntity({
      id,
      name,
      document,
    });

    handleChange.effect({
      instance,
      type,
      entity,
      op: "add",
    });
  };

  const [_, drop] = useDrop(() => ({
    accept: item,
    drop: handleDrop,
  }));

  return {
    ref: drop,
  };
};

export default useQuestionEffectsDrop;
