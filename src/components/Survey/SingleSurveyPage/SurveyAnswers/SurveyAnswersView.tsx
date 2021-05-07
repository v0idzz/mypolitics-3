import React, { useState } from "react";
import {
  SlimAnswer,
  UseSurveyActions,
  UseSurveyData,
} from "@components/Survey/utils/useSurvey";
import { Container } from "./SurveyAnswersStyle";
import MultiChoiceAnswersView from "@components/Survey/SingleSurveyPage/SurveyAnswers/MultiChoiceAnswers";
import SingleChoiceAnswersView from "@components/Survey/SingleSurveyPage/SurveyAnswers/SingleChoiceAnswers";
import { CSSTransition } from "react-transition-group";
import useTranslation from "next-translate/useTranslation";
import { AnsweringModeToggle } from "./SurveyAnswersStyle";

interface Props {
  actions: UseSurveyActions;
  data: UseSurveyData;
}

const SurveyAnswers: React.FC<Props> = ({ actions, data }) => {
  const { t } = useTranslation("quiz");

  const [isOneClick, setIsOneClick] = useState(false);
  const { nextQuestion, viewResults } = actions;
  const { currentQuestion, questions } = data;

  const pushAnswer = async (answer: SlimAnswer) => {
    if (!(await nextQuestion(answer))) {
      await viewResults();
    }
  };

  const isPastFifthQuestion = questions.indexOf(currentQuestion) > 4;

  return (
    <Container>
      {!isPastFifthQuestion && (
        <AnsweringModeToggle
          value={isOneClick}
          onValueChange={setIsOneClick}
          label={t("survey.actions.oneClickAnswering")}
        />
      )}
      <CSSTransition in={isOneClick} classNames="fade" unmountOnExit>
        <SingleChoiceAnswersView
          questionId={currentQuestion.id}
          onAnswer={pushAnswer}
        />
      </CSSTransition>
      <CSSTransition in={!isOneClick} classNames="fade" unmountOnExit>
        <MultiChoiceAnswersView
          questionId={currentQuestion.id}
          onAnswer={pushAnswer}
        />
      </CSSTransition>
    </Container>
  );
};

export default SurveyAnswers;
