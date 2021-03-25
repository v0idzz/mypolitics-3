import {
  EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import useEntity from "@components/Editor/utils/useEntity";

import { ConnectDropTarget, useDrop } from "react-dnd";
import { ItemType } from "@constants";

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
  handleDrop: ({ id }: any) => void;
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

  const handleDrop = ({ id }: any) =>
    update({
      [side]: { id },
    });

  const [, drop] = useDrop(() => ({
    accept: ItemType.Ideology,
    drop: handleDrop,
  }));

  return {
    ref: drop,
    handleDrop,
  };
};
