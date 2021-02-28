import React, { useMemo, useState } from "react";
import { Box } from "@components/Editor";
import InternationalizedInput from "@shared/InternationalizedInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useEditorActions from "@components/Editor/utils/useEditorActions";
import IdeologiesInput from "@components/Editor/EditorQuestion/IdeologiesInput";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useQuestion from "./utils/useQuestion";
import {
  NumberWrapper,
  ActionsWrapper,
  DeleteButton,
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
  const { question } = editor.actions;
  const { data, handleChange } = useQuestion(questionId);
  const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

  const handleDeleteConfirm = () => {
    if (!deleteConfirmed) {
      setDeleteConfirmed(true);
      setTimeout(() => setDeleteConfirmed(false), 2000);
      return;
    }

    question.delete(questionId);
  };

  const header = (
    <>
      <NumberWrapper>
        Pytanie&nbsp;<span>#{index + 1}</span>
      </NumberWrapper>
      <ActionsWrapper>
        <DeleteButton
          onClick={handleDeleteConfirm}
          deleteConfirmed={deleteConfirmed}
          title={deleteConfirmed ? "Potwierdź usunięcie" : "Usuń pytanie"}
        >
          <FontAwesomeIcon icon={faTrash} />
        </DeleteButton>
        <OpenButton onClick={() => setOpened(!opened)} opened={opened}>
          <FontAwesomeIcon icon={faChevronDown} />
        </OpenButton>
      </ActionsWrapper>
    </>
  );

  const rerender = JSON.stringify({
    data,
    deleteConfirmed,
    opened,
    index,
  });

  return useMemo(
    () => (
      <Box header={header} hideContent={!opened}>
        <InternationalizedInput
          value={data.text}
          onChange={handleChange.text}
        />
        <Row>
          <PartiesInput questionId={questionId} />
          <IdeologiesInput questionId={questionId} />
        </Row>
      </Box>
    ),
    [rerender]
  );
};

export default EditorQuestion;
