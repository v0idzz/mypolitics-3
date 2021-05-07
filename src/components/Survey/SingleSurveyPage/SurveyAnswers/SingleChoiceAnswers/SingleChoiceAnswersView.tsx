import React from "react";
import { BaseAnswersViewProps } from "../types";
import { AnswerButton } from "../MultiChoiceAnswers/MultiChoiceAnswersStyle";
import { Answers } from "./SingleChoiceAnswersStyle";
import { SurveyAnswerType } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";

const SingleChoiceAnswersView: React.FC<BaseAnswersViewProps> = ({
  onAnswer,
  questionId,
}) => {
  const { t } = useTranslation("quiz");

  const handleAnswerClick = (type: SurveyAnswerType, weight: number = 0) => {
    const answer = {
      type,
      weight,
      question: {
        id: questionId,
      },
    };

    onAnswer(answer);
  };

  return (
    <Answers>
      <AnswerButton
        selected
        onClick={() => handleAnswerClick(SurveyAnswerType.Agree, 2)}
        variant={SurveyAnswerType.Agree}
        heavy
      >
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span>{t("survey.actions.answer.stronglyAgree")}</span>
      </AnswerButton>
      <AnswerButton
        selected
        onClick={() => handleAnswerClick(SurveyAnswerType.Agree, 1)}
        variant={SurveyAnswerType.Agree}
      >
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
        <span>{t("survey.actions.answer.agree")}</span>
      </AnswerButton>
      <AnswerButton
        selected
        onClick={() => handleAnswerClick(SurveyAnswerType.Neutral)}
        variant={SurveyAnswerType.Neutral}
      >
        <span>
          <FontAwesomeIcon icon={faMinus} />
        </span>
        <span>{t("survey.actions.answer.neutral")}</span>
      </AnswerButton>
      <AnswerButton
        selected
        onClick={() => handleAnswerClick(SurveyAnswerType.Disagree, 1)}
        variant={SurveyAnswerType.Disagree}
      >
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <span>{t("survey.actions.answer.disagree")}</span>
      </AnswerButton>
      <AnswerButton
        selected
        onClick={() => handleAnswerClick(SurveyAnswerType.Disagree, 2)}
        variant={SurveyAnswerType.Disagree}
        heavy
      >
        <span>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <span>{t("survey.actions.answer.stronglyDisagree")}</span>
      </AnswerButton>
    </Answers>
  );
};

export default SingleChoiceAnswersView;
