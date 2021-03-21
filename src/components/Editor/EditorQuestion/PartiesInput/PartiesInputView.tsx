import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { itemTypes } from "@constants";
import { PartyItem } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import { UseQuestion } from "../utils/useQuestion";
import { Info } from "../EditorQuestionStyle";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { useEditorSlidingUpPanel } from "@components/Editor/EditorSlidingUpPanel";
import { AddButton } from "@components/Editor/EditorTraits/EditorTraitsStyle";

interface Props {
  question: UseQuestion;
}

const PartiesInput: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation("editor");
  const { data, handleChange } = question;
  const args = { question, item: itemTypes.party };
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

  const agreeParties = data.effects.agree.parties || [];
  const disagreeParties = data.effects.disagree.parties || [];

  const handleRemove = (id, type) =>
    handleChange.effect({
      instance: { id },
      type,
      op: "remove",
      entity: "parties",
    });

  const handlePickClick = (type: "disagree" | "agree") => {
    show("party", (id: string) => {
      const handler = type === "agree" ? handleAgreeDrop : handleDisagreeDrop;
      handler({ id });
    });
  };

  const isClickable = useBreakpoint("md");

  return (
    <>
      <div ref={agreeRef}>
        <AnswerEffect
          title={t("question.partiesFor")}
          type={SurveyAnswerType.Agree}
        >
          {agreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "agree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
          {agreeParties.length > 0 && isClickable && (
            <AddButton onClick={() => handlePickClick("agree")} />
          )}
          {agreeParties.length === 0 && (
            <Info
              as={isClickable ? "button" : "div"}
              onClick={() => handlePickClick("agree")}
            >
              {isClickable
                ? t("question.clickHereParty")
                : t("question.dropHereParty")}
            </Info>
          )}
        </AnswerEffect>
      </div>
      <div ref={disagreeRef}>
        <AnswerEffect
          title={t("question.partiesAgainst")}
          type={SurveyAnswerType.Disagree}
        >
          {disagreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "disagree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
          {disagreeParties.length > 0 && isClickable && (
            <AddButton onClick={() => handlePickClick("disagree")} />
          )}
          {disagreeParties.length === 0 && (
            <Info
              onClick={() => handlePickClick("disagree")}
              as={isClickable ? "button" : "div"}
            >
              {isClickable
                ? t("question.clickHereParty")
                : t("question.dropHereParty")}
            </Info>
          )}
        </AnswerEffect>
      </div>
    </>
  );
};

export default PartiesInput;
