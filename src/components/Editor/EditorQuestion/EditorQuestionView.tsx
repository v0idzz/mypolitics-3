import React, { useMemo, useState } from "react";
import { Box } from "@components/Editor";
import InternationalizedInput from "@shared/InternationalizedInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import IdeologiesInput from "@components/Editor/EditorQuestion/IdeologiesInput";
import { UseEditor } from "@components/Editor/utils/useEditor";
import ActionButton from "@shared/ActionButton";
import useTranslation from "next-translate/useTranslation";
import useQuestion from "./utils/useQuestion";
import {
  NumberWrapper,
  ActionsWrapper,
  OpenButton,
  Row,
} from "./EditorQuestionStyle";
import PartiesInput from "./PartiesInput";

library.add(faChevronDown, faTrash);

interface Props {
  questionId: string;
  index: number;
  editor: UseEditor;
}

const EditorQuestion: React.FC<Props> = ({ questionId, index, editor }) => {
  const { t } = useTranslation("editor");
  const { actions } = editor;
  const question = useQuestion(questionId);
  const [opened, setOpened] = useState<boolean>(false);

  const handleDeleteClick = () => {
    actions.question.delete(questionId);
  };

  const header = (
    <>
      <NumberWrapper>
        {t("question.title")}&nbsp;<span>#{index + 1}</span>
      </NumberWrapper>
      <ActionsWrapper>
        <ActionButton
          onClick={handleDeleteClick}
          title={t("question.deleteButton")}
          mustConfirm
          variant="red"
          size="large"
        >
          <FontAwesomeIcon icon={faTrash} />
        </ActionButton>
        <OpenButton onClick={() => setOpened(!opened)} opened={opened}>
          <FontAwesomeIcon icon={faChevronDown} />
        </OpenButton>
      </ActionsWrapper>
    </>
  );

  const rerender = JSON.stringify({
    data: question.data,
    opened,
    index,
  });

  return useMemo(
    () =>
      !question?.data ? null : (
        <Box header={header} hideContent={!opened}>
          <InternationalizedInput
            value={question.data.text}
            onChange={question.handleChange.text}
          />
          <Row>
            <PartiesInput question={question} />
          </Row>
          <Row>
            <IdeologiesInput question={question} />
          </Row>
        </Box>
      ),
    [rerender]
  );
};

export default EditorQuestion;
