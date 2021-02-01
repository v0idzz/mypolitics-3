import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  UseSurveyActions,
  UseSurveyData,
} from "@components/Survey/utils/useSurvey";
import { Container, Info, Actions, Button } from "./SurveyHeaderStyle";

library.add(faArrowLeft, faUndoAlt);

interface Props {
  actions: UseSurveyActions;
  data: UseSurveyData;
}

const SurveyHeader: React.FC<Props> = ({ actions, data }) => {
  const { previousQuestion, deleteSurvey } = actions;
  const { answers, questions } = data;

  return (
    <Container>
      <Actions>
        <Button onClick={previousQuestion} title="Poprzednie pytanie">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button onClick={deleteSurvey} title="Rozpocznij od nowa" warning>
          <FontAwesomeIcon icon={faUndoAlt} />
        </Button>
      </Actions>
      <Info>
        Pytanie&nbsp;
        <span>
          {answers.length + 1}/{questions.length}
        </span>
      </Info>
    </Container>
  );
};

export default SurveyHeader;
