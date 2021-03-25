import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { ItemType } from "@constants";
import { PartyItem } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { useEditorSlidingUpPanel } from "@components/Editor/EditorSlidingUpPanel";
import { AddButton } from "@components/Editor/EditorTraits/EditorTraitsStyle";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import { UseQuestion } from "../utils/useQuestion";
import { Info } from "../EditorQuestionStyle";
import EditorDropArea from "@components/Editor/EditorDropArea";

interface Props {
  question: UseQuestion;
}

const PartiesInput: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation("editor");
  const { data, handleChange } = question;
  const args = { question, item: ItemType.Party };
  const { handleDrop: handleAgreeDrop } = useQuestionEffectsDrop({
    type: "agree",
    ...args,
  });

  const { handleDrop: handleDisagreeDrop } = useQuestionEffectsDrop({
    type: "disagree",
    ...args,
  });

  const agreeParties = data.effects.agree.parties || [];
  const disagreeParties = data.effects.disagree.parties || [];

  const handleRemove = (id, type) =>
    handleChange.effect({
      instance: { id },
      type,
      op: "remove",
      entity: "parties",
    });

  return (
    <>
      <AnswerEffect
        title={t("question.partiesFor")}
        type={SurveyAnswerType.Agree}
      >
        <EditorDropArea
          accept={ItemType.Party}
          dropText={t("question.dropHereParty")}
          clickText={t("question.clickHereParty")}
          onDropOrAdd={handleAgreeDrop}
        >
          {agreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "agree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
        </EditorDropArea>
      </AnswerEffect>
      <AnswerEffect
        title={t("question.partiesAgainst")}
        type={SurveyAnswerType.Disagree}
      >
        <EditorDropArea
          accept={ItemType.Party}
          dropText={t("question.dropHereParty")}
          clickText={t("question.clickHereParty")}
          onDropOrAdd={handleDisagreeDrop}
        >
          {disagreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "disagree")}
              title={t("question.clickToDelete")}
              key={id}
              id={id}
            />
          ))}
        </EditorDropArea>
      </AnswerEffect>
    </>
  );
};

export default PartiesInput;
