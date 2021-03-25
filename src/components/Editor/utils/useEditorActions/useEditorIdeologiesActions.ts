import {
  CreateIdeologyInput,
  CreatePartyInput,
  EditorAxisPartsFragment,
  EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
  EditorQuestionPartsFragment,
  EditorQuestionPartsFragmentDoc,
  QuizCompassMode,
  UpdateIdeologyInput,
  UpdatePartyInput,
  useCreateIdeologyMutation,
  useCreatePartyMutation,
  useUpdateIdeologyMutation,
  useUpdatePartyMutation,
} from "@generated/graphql";
import { DeepPartial } from "@typeDefs/common";
import * as R from "ramda";
import { stripTypename } from "@utils/strip-typename";
import { useApolloClient } from "@apollo/client";
import { useEntityLazy } from "@components/Editor/utils/useEntity";
import useVersionInput from "@components/Editor/utils/useVersionInput";
import {
  EditorGetCurrentDataFunction,
  EditorUpdateFunction,
} from "./useEditorActionsTypes";

export interface IdeologiesActions {
  delete(id: string);
  add(data: CreateIdeologyInput): Promise<void>;
  import(data: EditorIdeologyPartsFragment[]): void;
  update(id: string, data: UpdateIdeologyInput);
}

const useEditorIdeologiesActions = (
  getCurrentData: EditorGetCurrentDataFunction,
  update: EditorUpdateFunction
): IdeologiesActions => {
  const [getEntity] = useEntityLazy();
  const [updateIdeology] = useUpdateIdeologyMutation();
  const [createIdeology] = useCreateIdeologyMutation();

  return {
    delete: (id) => {
      const currentData = getCurrentData();
      const currentIdeologies = currentData.quiz.lastUpdatedVersion.ideologies;
      const ideologies = currentIdeologies.filter((i) => i.id !== id);
      const currentTraits = currentData.quiz.lastUpdatedVersion.traits;
      const traits = currentTraits.filter((i) => i.id !== id);

      currentData.quiz.lastUpdatedVersion.questions.forEach(({ id: qId }) => {
        const {
          data: questionData,
          update: updateQuestion,
        } = getEntity<EditorQuestionPartsFragment>({
          id: qId,
          name: "Question",
          document: EditorQuestionPartsFragmentDoc,
        });

        const agreeIdeologies = questionData.effects.agree.ideologies.filter(
          (i) => i.id !== id
        );
        const disagreeIdeologies = questionData.effects.disagree.ideologies.filter(
          (i) => i.id !== id
        );

        updateQuestion({
          effects: {
            agree: {
              ideologies: agreeIdeologies,
            },
            disagree: {
              ideologies: disagreeIdeologies,
            },
          },
        });
      });

      currentData.quiz.lastUpdatedVersion.axes.forEach(({ id: aId }) => {
        const {
          data: axisData,
          update: updateAxis,
        } = getEntity<EditorAxisPartsFragment>({
          id: aId,
          name: "QuizAxis",
          document: EditorAxisPartsFragmentDoc,
        });

        const left =
          axisData?.left && axisData.left.id === id ? null : axisData.left;
        const right =
          axisData?.right && axisData.right.id === id ? null : axisData.right;

        updateAxis({
          left,
          right,
        });
      });

      update({
        quiz: {
          lastUpdatedVersion: {
            ideologies,
            traits,
          },
        },
      });
    },
    update: async (id, values) => {
      try {
        // eslint-disable-next-line no-param-reassign
        (values as any).viewerCanEdit = undefined;

        const { update: updateEntity } = getEntity({
          id,
          name: "Ideology",
          document: EditorIdeologyPartsFragmentDoc,
        });

        const { data } = await updateIdeology({
          variables: {
            id,
            values: stripTypename(values),
          },
        });

        updateEntity(data.updateIdeology);
      } catch (e) {
        console.error(e);
      }
    },
    add: async (values) => {
      const currentData = getCurrentData();
      const currentIdeologies = currentData.quiz.lastUpdatedVersion.ideologies;

      try {
        const { data } = await createIdeology({
          variables: {
            values: stripTypename(values),
          },
        });

        const ideology = {
          ...data.createIdeology,
          viewerCanEdit: true,
        };

        update({
          quiz: {
            lastUpdatedVersion: {
              ideologies: [...currentIdeologies, ideology],
            },
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    import: async (values) => {
      const currentData = getCurrentData();
      const currentIdeologies = currentData.quiz.lastUpdatedVersion.ideologies;
      const currentIdeologiesIds = currentIdeologies.map((i) => i.id);
      const filteredIdeologies = values.filter(
        ({ id }) => !currentIdeologiesIds.includes(id)
      );

      update({
        quiz: {
          lastUpdatedVersion: {
            ideologies: [...currentIdeologies, ...filteredIdeologies],
          },
        },
      });
    },
  };
};

export default useEditorIdeologiesActions;
