import { useEntityLazy } from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface TraitsActions {
  delete(id: string);
  add(id: string): Promise<void>;
}

const useEditorTraitsActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): TraitsActions => {
  const [getEntity] = useEntityLazy();

  return {
    delete: (id: string) => {
      const currentData = getCurrentData();
      const currentTraits = currentData.quiz.lastUpdatedVersion.traits;
      const traits = currentTraits.filter((t) => t.id !== id);

      update({
        quiz: {
          lastUpdatedVersion: {
            traits,
          },
        },
      });
    },
    add: async (id: string) => {
      const currentData = getCurrentData();
      const alreadyAdded = currentData.quiz.lastUpdatedVersion.traits
        .map((t) => t.id)
        .includes(id);

      if (alreadyAdded) {
        return;
      }

      const { data } = getEntity<EditorIdeologyPartsFragment>({
        id,
        name: "Ideology",
        document: EditorIdeologyPartsFragmentDoc,
      });

      update({
        quiz: {
          lastUpdatedVersion: {
            traits: [...currentData.quiz.lastUpdatedVersion.traits, data],
          },
        },
      });
    },
  };
};

export default useEditorTraitsActions;
