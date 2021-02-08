import React from "react";
import { SurveyAnswerType } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { paths } from "@constants";
import { useRouter } from "next/router";
import {
  SlimAnswer,
  UseSurveyActions,
  UseSurveyData,
} from "@components/Survey/utils/useSurvey";
import { Container, Answers, AnswerButton } from "./SurveyAnswersStyle";

interface Props {
  actions: UseSurveyActions;
  data: UseSurveyData;
}

const SurveyAnswers: React.FC<Props> = ({ actions, data }) => {
  const { query, ...router } = useRouter();
  const { nextQuestion } = actions;
  const { currentQuestion } = data;
  const [tempAnswer, setTempAnswer] = React.useState<SlimAnswer | undefined>();

  const pushAnswer = async (answer: SlimAnswer) => {
    if (await nextQuestion(answer)) {
      setTempAnswer(undefined);
    } else {
      router.push(paths.results(`${query.id}`));
    }
  };

  const handleMainAnswer = (type: SurveyAnswerType) => {
    if (tempAnswer && type === tempAnswer.type) {
      setTempAnswer(undefined);
      return;
    }

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

  return (
    <Container>
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
            <span>Nie zgadzam się</span>
          </div>
        </AnswerButton>
        <AnswerButton
          variant={SurveyAnswerType.Neutral}
          answer={tempAnswer}
          onClick={() => handleMainAnswer(SurveyAnswerType.Neutral)}
        >
          <span>Nie wiem</span>
        </AnswerButton>
        <AnswerButton
          variant={SurveyAnswerType.Agree}
          answer={tempAnswer}
          onClick={() => handleMainAnswer(SurveyAnswerType.Agree)}
        >
          <span>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span>Zgadzam się</span>
        </AnswerButton>
      </Answers>
      <CSSTransition
        in={tempAnswer && tempAnswer.type !== SurveyAnswerType.Neutral}
        classNames="fade"
        unmountOnExit
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
      >
        <Answers>
          <Button isFullWidth onClick={() => handleWeightAnswer(1)}>
            Częściowo
          </Button>
          <Button isFullWidth onClick={() => handleWeightAnswer(2)}>
            Zdecydowanie
          </Button>
        </Answers>
      </CSSTransition>
    </Container>
  );
};

export default SurveyAnswers;
