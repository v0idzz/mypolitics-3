import React from "react";
import { SurveyAnswerType } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";
import { CSSTransition } from "react-transition-group";
import { paths } from "@constants";
import { useRouter } from "next/router";
import {
  SlimAnswer,
  UseSurveyActions,
  UseSurveyData,
} from "@components/Survey/utils/useSurvey";
import useTranslation from "next-translate/useTranslation";
import { AnswerButton, Answers, Container } from "./SurveyAnswersStyle";

interface Props {
  actions: UseSurveyActions;
  data: UseSurveyData;
}

const SurveyAnswers: React.FC<Props> = ({ actions, data }) => {
  const { t } = useTranslation("quiz");
  const { query, ...router } = useRouter();
  const { nextQuestion } = actions;
  const { currentQuestion } = data;
  const [tempAnswer, setTempAnswer] = React.useState<SlimAnswer | undefined>();
  const [isHover, setHover] = React.useState<boolean>(false);

  const pushAnswer = async (answer: SlimAnswer) => {
    if (await nextQuestion(answer)) {
      setTempAnswer(undefined);
    } else {
      router.push(paths.results(`${query.id}`));
    }
  };

  const handleMainAnswer = (type: SurveyAnswerType) => {
    const answer = {
      type,
      weight: 0,
      question: {
        id: currentQuestion.id,
      },
    };

    if (type === SurveyAnswerType.Neutral) {
      pushAnswer(answer);
      return;
    }

    setTempAnswer(answer);
  };

  const handleWeightAnswer = (weight: number) => {
    const answer = {
      ...tempAnswer,
      weight,
    };

    pushAnswer(answer);
  };

  const handleResetWeightAnswer = () => {
    setTempAnswer(undefined);
  };

  return (
    <Container>
      {tempAnswer && (
        <Answers>
          <AnswerButton
            onClick={handleResetWeightAnswer}
            variant={tempAnswer.type}
            answer={tempAnswer}
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
                : t("survey.actions.main.notHober")}
            </span>
          </AnswerButton>
        </Answers>
      )}
      {!tempAnswer && (
        <Answers>
          <AnswerButton
            variant={SurveyAnswerType.Disagree}
            answer={tempAnswer}
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
            answer={tempAnswer}
            onClick={() => handleMainAnswer(SurveyAnswerType.Neutral)}
          >
            <span>{t("survey.actions.answer.neutral")}</span>
          </AnswerButton>
          <AnswerButton
            variant={SurveyAnswerType.Agree}
            answer={tempAnswer}
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
    </Container>
  );
};

export default SurveyAnswers;
