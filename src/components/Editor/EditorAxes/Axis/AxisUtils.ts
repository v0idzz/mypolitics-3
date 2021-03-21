import {
  EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import useEntity, { useEntityLazy } from "@components/Editor/utils/useEntity";

import { ConnectDropTarget, useDrop } from "react-dnd";
import { itemTypes } from "@constants";

export const useIdeology = (id: string): EditorIdeologyPartsFragment => {
  const { data } = useEntity<EditorIdeologyPartsFragment>({
    id,
    name: "Ideology",
    document: EditorIdeologyPartsFragmentDoc,
  });

  return data;
};

interface UseAxisDrop {
  ref: ConnectDropTarget;
  handleChange: ({ id }: any) => void;
}

interface UseAxisDropInput {
  side: "left" | "right";
  axisId?: string;
}

export const useAxisSelect = ({
  side,
  axisId,
}: UseAxisDropInput): UseAxisDrop => {
  const { update } = useEntity({
    id: axisId,
    name: "QuizAxis",
    document: EditorAxisPartsFragmentDoc,
  });

  const handleChange = ({ id }: any) =>
    update({
      [side]: { id },
    });

  const [_, drop] = useDrop(() => ({
    accept: itemTypes.ideology,
    drop: handleChange,
  }));

  return {
    ref: drop,
    handleChange,
  };
};
