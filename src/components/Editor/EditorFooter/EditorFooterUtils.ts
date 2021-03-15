import { UseEditor } from "@components/Editor/utils/useEditor";
import { UpdateQuizVersionInput } from '@generated/graphql';

export interface Requirement {
  name: string;
  fulfilled: boolean;
}

interface UseRequirements {
  data: Requirement[];
}

export const useRequirements = (editor: UseEditor): UseRequirements => {
  const { versionInput, basicInput, data } = editor;
  const { title, description } = basicInput;
  const { questions: versionQuestions, ideologies, parties } = versionInput;
  const { questions } = data.data.quiz.lastUpdatedVersion;
  const hasEffect = ({ effects }) => {
    const everyType = (type, effect) => effects[effect][type].length > 0;
    const everyEffect = (effect) =>
      ["parties", "ideologies"].some((type) => everyType(type, effect));
    return ["disagree", "agree"].some(everyEffect);
  };
  const everyQuestionHasEffect = questions.every(hasEffect);
  const withoutTypeName = (k) => k !== "__typename";
  const withoutText = (k) => k.length < 4;
  const hasTextData = (obj) =>
    Object.keys(obj).filter(withoutTypeName).filter(withoutText).length > 0;

  const list = [
    {
      name: "Tytuł i opis",
      fulfilled: hasTextData(title) && hasTextData(description),
    },
    {
      name: "Minimum 5 pytań",
      fulfilled: versionQuestions.length >= 5,
    },
    {
      name: "Minimum 2 ideologie lub partie",
      fulfilled: ideologies.length >= 2 || parties.length >= 2,
    },
    {
      name: "Każde pytanie ma efekt",
      fulfilled: everyQuestionHasEffect,
    },
  ];

  return {
    data: list,
  };
};

export interface TestedVersion {
  hash: string;
  versionId: string;
}
