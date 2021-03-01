import React from "react";
import { AnswerEffect } from "@components/Results";
import { SurveyAnswerType } from "@generated/graphql";
import { itemTypes } from "@constants";
import { IdeologyItem } from "@components/Editor";
import { Info } from "@components/Editor/EditorQuestion/EditorQuestionStyle";
import useQuestionEffectsDrop from "../utils/useQuestionEffectsDrop";
import { UseQuestion } from "../utils/useQuestion";

interface Props {
  question: UseQuestion;
}

const IdeologiesInput: React.FC<Props> = ({ question }) => {
  const { data, handleChange } = question;
  const args = { question, item: itemTypes.ideology };
  const { ref: agreeRef } = useQuestionEffectsDrop({
    type: "agree",
    ...args,
  });

  const { ref: disagreeRef } = useQuestionEffectsDrop({
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
      <div ref={agreeRef}>
        <AnswerEffect title="Ideologie za" type={SurveyAnswerType.Agree}>
          {agreeIdeologies.map(({ id }) => (
            <IdeologyItem
              onClick={() => handleRemove(id, "agree")}
              title="Kliknij, aby usunąć"
              key={id}
              id={id}
            />
          ))}
          {agreeIdeologies.length === 0 && <Info>Upuść tutaj ideologię</Info>}
        </AnswerEffect>
      </div>
      <div ref={disagreeRef}>
        <AnswerEffect
          title="Ideologie przeciw"
          type={SurveyAnswerType.Disagree}
        >
          {disagreeIdeologies.map(({ id }) => (
            <IdeologyItem
              onClick={() => handleRemove(id, "disagree")}
              title="Kliknij, aby usunąć"
              key={id}
              id={id}
            />
          ))}
          {disagreeIdeologies.length === 0 && (
            <Info>Upuść tutaj ideologię</Info>
          )}
        </AnswerEffect>
      </div>
    </>
  );
};

export default IdeologiesInput;
