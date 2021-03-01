import React, { useState } from "react";
import { EditorIdeologyPartsFragment } from "@generated/graphql";
import { faPen, faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActionButton from "@shared/ActionButton";
import IdeologyEdit from "@components/Editor/EditorIdeologies/IdeologyEdit";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { Container, Name } from "./IdeologyCardStyle";

library.add(faPen, faTimes);

interface Props {
  data: EditorIdeologyPartsFragment;
  showActions?: boolean;
  editor?: UseEditor;
}

const IdeologyCard: React.FC<Props> = ({
  data,
  editor,
  showActions = true,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { lang } = useTranslation();
  const { name, icon, color } = data;

  return (
    <Container color={color}>
      <IdeologyIcon icon={icon} />
      <Name>{name[lang]}</Name>
      {showActions && editor && (
        <>
          <ActionButton onClick={() => setShowModal(true)} variant="white">
            <FontAwesomeIcon icon={faPen} />
          </ActionButton>
          <ActionButton
            onClick={() => editor.actions.ideologies.delete(data.id)}
            variant="white"
            mustConfirm
          >
            <FontAwesomeIcon icon={faTimes} />
          </ActionButton>
          <IdeologyEdit
            show={showModal}
            onClose={() => setShowModal(false)}
            data={data}
            editor={editor}
          />
        </>
      )}
    </Container>
  );
};

export default IdeologyCard;
