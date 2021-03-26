import {
  EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import useEntity from "@components/Editor/utils/useEntity";

export const useIdeology = (id: string): EditorIdeologyPartsFragment => {
  const { data } = useEntity<EditorIdeologyPartsFragment>({
    id,
    name: "Ideology",
    document: EditorIdeologyPartsFragmentDoc,
  });

  return data;
};

interface UseAxisDrop {
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

  const handleDrop = (id: string) =>
    update({
      [side]: { id },
    });

  return {
    handleDrop,
  };
};
