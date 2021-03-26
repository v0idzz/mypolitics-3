import { useEntityLazy } from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragmentDoc,
  EditorPartyPartsFragmentDoc,
} from "@generated/graphql";
import { UseQuestion } from "./useQuestion";
import { ItemType } from "@constants";
import { DocumentNode } from "@apollo/client";

interface UseQuestionDrop {
  handleDrop: ({ id }: any) => void;
}

interface UseQuestionDropInput {
  item: ItemType;
  type: "agree" | "disagree";
  question: UseQuestion;
}

interface ItemConfig {
  name: string;
  entity: "ideologies" | "parties";
  document: DocumentNode;
}

const itemsConfig: Record<string, ItemConfig> = {
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
  const handleDrop = (id: string) => {
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

  return {
    handleDrop,
  };
};

export default useQuestionEffectsDrop;
