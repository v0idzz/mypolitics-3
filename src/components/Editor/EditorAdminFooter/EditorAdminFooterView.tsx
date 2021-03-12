import React, { useState } from "react";
import ActionButton from "@shared/ActionButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import { Input } from "@shared/Common";
import InputLabel from "@shared/InputLabel";
import Button from "@shared/Button";
import { useRouter } from "next/router";
import {
  QuizVerificationState,
  useVerifyQuizMutation,
  VerifyQueueQuizzesDocument,
} from "@generated/graphql";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { Spinner } from "@shared/Loading";
import { paths } from "@constants";
import { Container, Inner } from "./EditorAdminFooterStyle";

library.add(faCheck, faTimes);

const EditorAdminFooter: React.FC = () => {
  const [showReasonModal, setShowReasonModal] = useState<boolean>(false);
  const handleErrors = useHandleErrors();
  const [reason, setReason] = useState("");
  const [verifyQuiz, { loading }] = useVerifyQuizMutation();
  const { query, ...router } = useRouter();
  const { colors } = useTheme();
  const { verifyVersion } = query;

  const handleVerify = async (state: QuizVerificationState) => {
    try {
      await verifyQuiz({
        variables: {
          quizVersion: `${verifyVersion}`,
          values: {
            state,
            reason,
          },
        },
        refetchQueries: [
          {
            query: VerifyQueueQuizzesDocument,
          },
        ],
      });

      router.push(paths.editorAdmin);
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <>
      <Modal
        show={showReasonModal}
        onClose={() => setShowReasonModal(false)}
        header={{
          title: "Odrzuć",
          color: colors.red,
        }}
      >
        <InputLabel title="Powód odrzucenia">
          <Input
            name="reason"
            value={reason}
            placeholder="Nieodpowiednie słowa"
            onChange={({ target: { value } }) => setReason(value)}
          />
        </InputLabel>
        <Button
          loading={loading}
          disabled={loading}
          beforeIcon={<FontAwesomeIcon icon={faTimes} />}
          onClick={() => handleVerify(QuizVerificationState.Declined)}
        >
          Odrzuć quiz
        </Button>
      </Modal>
      <Container>
        <Inner>
          <span>Zweryfikuj:</span>
          <ActionButton
            variant="green"
            size="large"
            title="Akceptuj"
            mustConfirm
            onClick={() => handleVerify(QuizVerificationState.Accepted)}
          >
            {!loading && <FontAwesomeIcon icon={faCheck} />}
            {loading && <Spinner color={colors.green} />}
          </ActionButton>
          <ActionButton
            onClick={() => setShowReasonModal(true)}
            variant="red"
            size="large"
            title="Odrzuć"
          >
            <FontAwesomeIcon icon={faTimes} />
          </ActionButton>
        </Inner>
      </Container>
    </>
  );
};

export default EditorAdminFooter;
