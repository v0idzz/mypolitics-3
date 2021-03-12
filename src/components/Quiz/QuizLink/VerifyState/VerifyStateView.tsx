import React, { useState } from "react";
import {
  QuizBasicPartsFragment,
  QuizVerificationState,
} from "@generated/graphql";
import {
  faCheck,
  faClock,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import { Container } from "./VerifyStateStyle";

library.add(faCheck, faClock, faTimes, faQuestionCircle);

interface Props {
  quiz: QuizBasicPartsFragment;
}

const VerifyState: React.FC<Props> = ({ quiz }) => {
  const theme = useTheme();
  const [showModal, setShowModal] = useState(false);
  if (!quiz.verifyRequest) {
    return null;
  }

  const config: Record<QuizVerificationState, [IconProp, string]> = {
    [QuizVerificationState.Accepted]: [faCheck, "Opublikowane"],
    [QuizVerificationState.Declined]: [faTimes, "Odrzucone"],
    [QuizVerificationState.Idle]: [faClock, "W weryfikacji"],
  };
  const { reason, state } = quiz.verifyRequest;
  const [icon, text] = config[state];

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        header={{
          title: "Powód odrzucenia",
          color: theme.colors.red,
        }}
      >
        {reason}
      </Modal>
      <Container state={state}>
        <FontAwesomeIcon icon={icon} />
        <span>{text}</span>
        {state === QuizVerificationState.Declined && (
          <button onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faQuestionCircle} />
            Powód
          </button>
        )}
      </Container>
    </>
  );
};

export default VerifyState;
