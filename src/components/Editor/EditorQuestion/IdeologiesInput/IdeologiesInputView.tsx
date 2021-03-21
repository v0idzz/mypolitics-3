import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { itemTypes } from "@constants";
import { IdeologyItem } from "@components/Editor";
import { Info } from "@components/Editor/EditorQuestion/EditorQuestionStyle";
import useTranslation from "next-translate/useTranslation";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import { UseQuestion } from "../utils/useQuestion";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { useEditorSlidingUpPanel } from "@components/Editor/EditorSlidingUpPanel";
import { AddButton } from "@components/Editor/EditorTraits/EditorTraitsStyle";

interface Props {
  question: UseQuestion;
}

const IdeologiesInput: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation("editor");
  const { data, handleChange } = question;
  const args = { question, item: itemTypes.ideology };
  const { ref: agreeRef, handleDrop: handleAgreeDrop } = useQuestionEffectsDrop(
    {
      type: "agree",
      ...args,
    }
  );

  const {
    ref: disagreeRef,
    handleDrop: handleDisagreeDrop,
  } = useQuestionEffectsDrop({
    type: "disagree",
    ...args,
  });

  const { show } = useEditorSlidingUpPanel();

  const agreeIdeologies = data.effects.agree.ideologies || [];
  const disagreeIdeologies = data.effects.disagree.ideologies || [];

  const handleRemove = (id, type) =>
    handleChange.effect({
      instance: { id },
      type,
      op: "remove",
      entity: "ideologies",
    });

  const handlePickClick = (type: "agree" | "disagree") => {
    show("ideology", (id: string) => {
      const handler = type === "agree" ? handleAgreeDrop : handleDisagreeDrop;
      handler({ id });
    });
  };

  const isClickable = useBreakpoint("sm");

  return (
    <>
      <div ref={agreeRef}>
        <AnswerEffect
          title={t("question.ideologiesFor")}
          type={SurveyAnswerType.Agree}
        >
          {agreeIdeologies.map(({ id }) => (
            <IdeologyItem
              onClick={() => handleRemove(id, "agree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
          {agreeIdeologies.length > 0 && isClickable && (
            <AddButton onClick={() => handlePickClick("agree")} />
          )}
          {agreeIdeologies.length === 0 && (
            <Info
              as={isClickable ? "button" : "div"}
              onClick={() => handlePickClick("agree")}
            >
              {isClickable
                ? t("question.clickHereIdeology")
                : t("question.dropHereIdeology")}
            </Info>
          )}
        </AnswerEffect>
      </div>
      <div ref={disagreeRef}>
        <AnswerEffect
          title={t("question.ideologiesAgainst")}
          type={SurveyAnswerType.Disagree}
        >
          {disagreeIdeologies.map(({ id }) => (
            <IdeologyItem
              onClick={() => handleRemove(id, "disagree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
          {disagreeIdeologies.length > 0 && isClickable && (
            <AddButton onClick={() => handlePickClick("disagree")} />
          )}
          {disagreeIdeologies.length === 0 && (
            <Info
              as={isClickable ? "button" : "div"}
              onClick={() => handlePickClick("disagree")}
            >
              {isClickable
                ? t("question.clickHereIdeology")
                : t("question.dropHereIdeology")}
            </Info>
          )}
        </AnswerEffect>
      </div>
    </>
  );
};

export default IdeologiesInput;
