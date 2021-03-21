import { ConnectDropTarget, useDrop } from "react-dnd";
import { useEntityLazy } from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragmentDoc,
  EditorPartyPartsFragmentDoc,
} from "@generated/graphql";
import { UseQuestion } from "./useQuestion";

interface UseQuestionDrop {
  ref: ConnectDropTarget;
  handleDrop: ({ id }: any) => void;
}

interface UseQuestionDropInput {
  item: string;
  type: "agree" | "disagree";
  question: UseQuestion;
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
  question,
}: UseQuestionDropInput): UseQuestionDrop => {
  const [getEntity] = useEntityLazy();
  const { handleChange } = question;
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
    handleDrop,
  };
};

export default useQuestionEffectsDrop;
