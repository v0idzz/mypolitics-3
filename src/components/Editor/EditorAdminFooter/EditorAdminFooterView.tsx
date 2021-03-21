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
import useTranslation from "next-translate/useTranslation";
import { Container, Inner } from "./EditorAdminFooterStyle";

library.add(faCheck, faTimes);

const EditorAdminFooter: React.FC = () => {
  const { t } = useTranslation("editor");
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
          title: t("adminFooter.discardModal.title"),
          color: colors.red,
        }}
      >
        <InputLabel title={t("adminFooter.discardModal.input.label")}>
          <Input
            name="reason"
            value={reason}
            placeholder={t("adminFooter.discardModal.input.placeholder")}
            onChange={({ target: { value } }) => setReason(value)}
          />
        </InputLabel>
        <Button
          loading={loading}
          disabled={loading}
          beforeIcon={<FontAwesomeIcon icon={faTimes} />}
          onClick={() => handleVerify(QuizVerificationState.Declined)}
        >
          {t("adminFooter.discardModal.button")}
        </Button>
      </Modal>
      <Container>
        <Inner>
          <span>{t("adminFooter.title")}</span>
          <ActionButton
            variant="green"
            size="large"
            title={t("adminFooter.accept")}
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
            title={t("adminFooter.discard")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </ActionButton>
        </Inner>
      </Container>
    </>
  );
};

export default EditorAdminFooter;
