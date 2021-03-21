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
import useTranslation from "next-translate/useTranslation";
import { Container } from "./VerifyStateStyle";

library.add(faCheck, faClock, faTimes, faQuestionCircle);

interface Props {
  quiz: QuizBasicPartsFragment;
}

const VerifyState: React.FC<Props> = ({ quiz }) => {
  const theme = useTheme();
  const { t } = useTranslation("quiz");
  const [showModal, setShowModal] = useState(false);
  if (!quiz.verifyRequest) {
    return null;
  }

  const config: Record<QuizVerificationState, [IconProp, string]> = {
    [QuizVerificationState.Accepted]: [faCheck, t("link.published")],
    [QuizVerificationState.Declined]: [faTimes, t("link.denied")],
    [QuizVerificationState.Idle]: [faClock, t("link.inVerification")],
  };
  const { reason, state } = quiz.verifyRequest;
  const [icon, text] = config[state];

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        header={{
          title: t("link.reason1"),
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
            {t("link.reason2")}
          </button>
        )}
      </Container>
    </>
  );
};

export default VerifyState;
