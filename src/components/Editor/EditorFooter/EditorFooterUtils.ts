import { UseEditor } from "@components/Editor/utils/useEditor";
import { UpdateQuizVersionInput } from '@generated/graphql';
import useTranslation from 'next-translate/useTranslation';

export interface Requirement {
  name: string;
  fulfilled: boolean;
}

interface UseRequirements {
  data: Requirement[];
}

export const useRequirements = (editor: UseEditor): UseRequirements => {
  const { t } = useTranslation("editor");
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
      name: t("footer.requirements.list.titleAndDescription"),
      fulfilled: hasTextData(title) && hasTextData(description),
    },
    {
      name: t("footer.requirements.list.minQuestions", { count: 5 }),
      fulfilled: versionQuestions.length >= 5,
    },
    {
      name: t("footer.requirements.list.minIdeologiesOrParties", { count: 5 }),
      fulfilled: ideologies.length >= 2 || parties.length >= 2,
    },
    {
      name: t("footer.requirements.list.allQuestionsHaveEffects"),
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
