import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  UseSurveyActions,
  UseSurveyData,
} from "@components/Survey/utils/useSurvey";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";
import useTranslation from "next-translate/useTranslation";
import { Container, Info, Actions, Button } from "./SurveyHeaderStyle";

library.add(faArrowLeft, faUndoAlt);

interface Props {
  actions: UseSurveyActions;
  data: UseSurveyData;
}

const SurveyHeader: React.FC<Props> = ({ actions, data }) => {
  const { t } = useTranslation("quiz");
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const { value: firstTimer, setValue: setFirstTimer } = useFirstTimer();
  const { previousQuestion, deleteSurvey } = actions;
  const { currentQuestion, answers, questions } = data;
  const answeredMany = answers.length > 15;

  useEffect(() => {
    if (answeredMany) {
      setFirstTimer(false);
    }
  }, [answeredMany]);

  const handleConfirmReset = () => {
    if (confirmReset) {
      deleteSurvey();
    } else {
      setConfirmReset(true);

      setTimeout(() => {
        setConfirmReset(false);
      }, 2000);
    }
  };

  const isFirstQuestion = currentQuestion.id === questions[0].id;

  return (
    <Container>
      <Actions>
        <Button
          disabled={isFirstQuestion}
          onClick={previousQuestion}
          title={t("survey.actions.previousQuestion")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button
          disabled={isFirstQuestion}
          hasText={confirmReset}
          onClick={handleConfirmReset}
          title={t("survey.actions.reset")}
          warning
        >
          {confirmReset && t("survey.actions.resetConfirm")}
          {!confirmReset && <FontAwesomeIcon icon={faUndoAlt} />}
        </Button>
      </Actions>
      <Info>
        {t("survey.question")}&nbsp;
        <span>
          {answers.length + 1}
          {!firstTimer && `/${questions.length}`}
        </span>
      </Info>
    </Container>
  );
};

export default SurveyHeader;
