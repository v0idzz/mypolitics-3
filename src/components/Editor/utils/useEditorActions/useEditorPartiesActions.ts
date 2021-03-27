import {
  CreatePartyInput, EditorAxisPartsFragment, EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragmentDoc, EditorPartyPartsFragment,
  EditorPartyPartsFragmentDoc, EditorQuestionPartsFragment, EditorQuestionPartsFragmentDoc,
  QuizCompassMode,
  UpdatePartyInput,
  useCreatePartyMutation,
  useUpdatePartyMutation,
} from '@generated/graphql';
import { DeepPartial } from "@typeDefs/common";
import * as R from "ramda";
import { stripTypename } from "@utils/strip-typename";
import { useEntityLazy } from "@components/Editor/utils/useEntity";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface PartiesActions {
  delete(id: string);
  add(data: CreatePartyInput): Promise<void>;
  update(id: string, data: UpdatePartyInput);
  import(data: EditorPartyPartsFragment[]): void;
}

const useEditorPartiesActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): PartiesActions => {
  const [getEntity] = useEntityLazy();
  const [updateParty] = useUpdatePartyMutation();
  const [createParty] = useCreatePartyMutation();

  return {
    delete: (id: string) => {
      const currentData = getCurrentData();
      const currentParties = currentData.quiz.lastUpdatedVersion.parties;
      const parties = currentParties.filter((p) => p.id !== id);

      currentData.quiz.lastUpdatedVersion.questions.forEach(({ id: qId }) => {
        const {
          data: questionData,
          update: updateQuestion,
        } = getEntity<EditorQuestionPartsFragment>({
          id: qId,
          name: "Question",
          document: EditorQuestionPartsFragmentDoc,
        });

        const agreeParties = questionData.effects.agree.parties.filter(
          (p) => p.id !== id
        );
        const disagreeParties = questionData.effects.disagree.parties.filter(
          (p) => p.id !== id
        );

        updateQuestion({
          effects: {
            agree: {
              parties: agreeParties,
            },
            disagree: {
              parties: disagreeParties,
            },
          },
        });
      });

      update({
        quiz: {
          lastUpdatedVersion: {
            parties,
          },
        },
      });
    },
    update: async (id: string, values: UpdatePartyInput) => {
      try {
        (values as any).viewerCanEdit = undefined;

        const { update: updateEntity } = getEntity({
          id,
          name: "Party",
          document: EditorPartyPartsFragmentDoc,
        });

        const { data } = await updateParty({
          variables: {
            id,
            values: stripTypename(values),
          },
        });

        updateEntity(data.updateParty);
      } catch (e) {
        console.error(e);
      }
    },
    add: async (values: CreatePartyInput) => {
      const currentData = getCurrentData();
      const currentParties = currentData.quiz.lastUpdatedVersion.parties;

      try {
        const { data } = await createParty({
          variables: {
            values: stripTypename(values),
          },
        });

        const party = {
          ...data.createParty,
          viewerCanEdit: true,
        };

        update({
          quiz: {
            lastUpdatedVersion: {
              parties: [...currentParties, party],
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    import: async (values) => {
      const currentData = getCurrentData();
      const currentParties = currentData.quiz.lastUpdatedVersion.parties;
      const currentPartiesIds = currentParties.map((p) => p.id);
      const filteredParties = values.filter(
        ({ id }) => !currentPartiesIds.includes(id)
      );

      update({
        quiz: {
          lastUpdatedVersion: {
            parties: [...currentParties, ...filteredParties],
          },
        },
      });
    },
  };
};

export default useEditorPartiesActions;
