import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { ItemType } from "@constants";
import { IdeologyItem } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import { UseQuestion } from "../utils/useQuestion";
import { EditorIconsDropArea } from "@components/Editor/EditorDropArea";

interface Props {
  question: UseQuestion;
}

const IdeologiesInput: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation("editor");
  const { data, handleChange } = question;
  const args = { question, item: ItemType.Ideology };
  const { handleDrop: handleAgreeDrop } = useQuestionEffectsDrop({
    type: "agree",
    ...args,
  });

  const { handleDrop: handleDisagreeDrop } = useQuestionEffectsDrop({
    type: "disagree",
    ...args,
  });

  const agreeIdeologies = data.effects.agree.ideologies || [];
  const disagreeIdeologies = data.effects.disagree.ideologies || [];

  const handleRemove = (id, type) =>
    handleChange.effect({
      instance: { id },
      type,
      op: "remove",
      entity: "ideologies",
    });

  return (
    <>
      <div>
        <AnswerEffect
          title={t("question.ideologiesFor")}
          type={SurveyAnswerType.Agree}
        >
          <EditorIconsDropArea
            accept={ItemType.Ideology}
            dropText={t("question.dropHereIdeology")}
            clickText={t("question.clickHereIdeology")}
            onDropOrAdd={handleAgreeDrop}
          >
            {agreeIdeologies.map(({ id }) => (
              <IdeologyItem
                onClick={() => handleRemove(id, "agree")}
                title={t("question.clickToDelete")}
                key={id}
                id={id}
              />
            ))}
          </EditorIconsDropArea>
        </AnswerEffect>
      </div>
      <div>
        <AnswerEffect
          title={t("question.ideologiesAgainst")}
          type={SurveyAnswerType.Disagree}
        >
          <EditorIconsDropArea
            accept={ItemType.Ideology}
            dropText={t("question.dropHereIdeology")}
            clickText={t("question.clickHereIdeology")}
            onDropOrAdd={handleDisagreeDrop}
          >
            {disagreeIdeologies.map(({ id }) => (
              <IdeologyItem
                onClick={() => handleRemove(id, "disagree")}
                title={t("question.clickToDelete")}
                key={id}
                id={id}
              />
            ))}
          </EditorIconsDropArea>
        </AnswerEffect>
      </div>
    </>
  );
};

export default IdeologiesInput;
