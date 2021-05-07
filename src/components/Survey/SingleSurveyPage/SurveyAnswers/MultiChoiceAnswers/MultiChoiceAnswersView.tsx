import { SurveyAnswerType } from "@generated/graphql";
import React from "react";
import { SlimAnswer } from "@components/Survey/utils/useSurvey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AnswerButton, Answers } from "./MultiChoiceAnswersStyle";
import useTranslation from "next-translate/useTranslation";
import Button from "@shared/Button";
import { CSSTransition } from "react-transition-group";
import { BaseAnswersViewProps } from "../types";

const MultiChoiceAnswersView: React.FC<BaseAnswersViewProps> = ({
  questionId,
  onAnswer,
}) => {
  const { t } = useTranslation("quiz");
  const [tempAnswer, setTempAnswer] = React.useState<SlimAnswer>();
  const [isHover, setHover] = React.useState(false);

  const handleAnswer = (answer: SlimAnswer) => {
    setTempAnswer(undefined);
    onAnswer(answer);
  };

  const handleMainAnswer = (type: SurveyAnswerType) => {
    const answer = {
      type,
      weight: 0,
      question: {
        id: questionId,
      },
    };

    if (type === SurveyAnswerType.Neutral) {
      handleAnswer(answer);
      return;
    }

    setTempAnswer(answer);
  };

  const handleWeightAnswer = (weight: number) => {
    const answer = {
      ...tempAnswer,
      weight,
    };

    handleAnswer(answer);
  };

  const handleResetWeightAnswer = () => {
    setTempAnswer(undefined);
  };

  return (
    <>
      {tempAnswer && (
        <Answers>
          <AnswerButton
            onClick={handleResetWeightAnswer}
            variant={tempAnswer.type}
            selected={tempAnswer?.type === SurveyAnswerType.Agree}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>
              <FontAwesomeIcon
                icon={
                  tempAnswer.type === SurveyAnswerType.Agree ? faCheck : faTimes
                }
              />
            </span>
            <span>
              {isHover
                ? t("survey.actions.main.hover")
                : t("survey.actions.main.notHover")}
            </span>
          </AnswerButton>
        </Answers>
      )}
      {!tempAnswer && (
        <Answers>
          <AnswerButton
            variant={SurveyAnswerType.Disagree}
            selected={tempAnswer?.type === SurveyAnswerType.Disagree}
            onClick={() => handleMainAnswer(SurveyAnswerType.Disagree)}
          >
            <div>
              <span>
                <FontAwesomeIcon icon={faTimes} />
              </span>
              <span>{t("survey.actions.answer.disagree")}</span>
            </div>
          </AnswerButton>
          <AnswerButton
            variant={SurveyAnswerType.Neutral}
            selected={tempAnswer?.type === SurveyAnswerType.Neutral}
            onClick={() => handleMainAnswer(SurveyAnswerType.Neutral)}
          >
            <span>{t("survey.actions.answer.neutral")}</span>
          </AnswerButton>
          <AnswerButton
            variant={SurveyAnswerType.Agree}
            selected={tempAnswer?.type === SurveyAnswerType.Agree}
            onClick={() => handleMainAnswer(SurveyAnswerType.Agree)}
          >
            <span>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span>{t("survey.actions.answer.agree")}</span>
          </AnswerButton>
        </Answers>
      )}
      <CSSTransition
        in={tempAnswer}
        classNames="fade"
        unmountOnExit
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
      >
        <Answers>
          <Button isFullWidth onClick={() => handleWeightAnswer(1)}>
            {t("survey.actions.weight.1")}
          </Button>
          <Button isFullWidth onClick={() => handleWeightAnswer(2)}>
            {t("survey.actions.weight.2")}
          </Button>
        </Answers>
      </CSSTransition>
    </>
  );
};

export default MultiChoiceAnswersView;
