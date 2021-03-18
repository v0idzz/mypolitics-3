import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { itemTypes } from "@constants";
import { PartyItem } from "@components/Editor";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import useQuestion, { UseQuestion } from "../utils/useQuestion";
import { Info } from "../EditorQuestionStyle";

interface Props {
  question: UseQuestion;
}

const PartiesInput: React.FC<Props> = ({ question }) => {
  const { data, handleChange } = question;
  const args = { question, item: itemTypes.party };
  const { ref: agreeRef } = useQuestionEffectsDrop({
    type: "agree",
    ...args,
  });

  const { ref: disagreeRef } = useQuestionEffectsDrop({
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
      <div ref={agreeRef}>
        <AnswerEffect title="Partie za" type={SurveyAnswerType.Agree}>
          {agreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "agree")}
              title="Kliknij, aby usunąć"
              key={id}
              id={id}
            />
          ))}
          {agreeParties.length === 0 && <Info>Upuść tutaj partię</Info>}
        </AnswerEffect>
      </div>
      <div ref={disagreeRef}>
        <AnswerEffect title="Partie przeciw" type={SurveyAnswerType.Disagree}>
          {disagreeParties.map(({ id }) => (
            <PartyItem
              onClick={() => handleRemove(id, "disagree")}
              title="Kliknij, aby usunąć"
              key={id}
              id={id}
            />
          ))}
          {disagreeParties.length === 0 && <Info>Upuść tutaj partię</Info>}
        </AnswerEffect>
      </div>
    </>
  );
};

export default PartiesInput;