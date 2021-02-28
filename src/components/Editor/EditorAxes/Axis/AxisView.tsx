import React, { useMemo, useState } from "react";
import {
  EditorAxisPartsFragment,
  EditorAxisPartsFragmentDoc,
  EditorIdeologyPartsFragment,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import IdeologyIcon from "@shared/IdeologyIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useEntity from "@components/Editor/utils/useEntity";
import useEditorActions from "@components/Editor/utils/useEditorActions";
import { useAxisDrop, useIdeology } from "./AxisUtils";
import {
  Container,
  Info,
  IdeologyContainer,
  IdeologyDeleteButton,
  IdeologyName,
  Wrapper,
  DeleteButton,
} from "./AxisStyle";
import { UseEditor } from '@components/Editor/utils/useEditor';

library.add(faTimes);

const AxisIdeology: React.FC<{
  data?: EditorIdeologyPartsFragment;
  side: "left" | "right";
  axisId: string;
}> = ({ data, side, axisId }) => {
  const { update } = useEntity({
    id: axisId,
    name: "QuizAxis",
    document: EditorAxisPartsFragmentDoc,
  });
  const { lang } = useTranslation();
  const { ref } = useAxisDrop({
    side,
    axisId,
  });

  const handleDelete = () =>
    update({
      [side]: null,
    });

  if (!data) {
    return <Info ref={ref}>Upuść ideologię</Info>;
  }

  const { name, icon, color } = data;

  return (
    <IdeologyContainer color={color}>
      <IdeologyIcon icon={icon} />
      <IdeologyName>{name[lang]}</IdeologyName>
      <IdeologyDeleteButton onClick={handleDelete}>
        <FontAwesomeIcon icon={faTimes} />
      </IdeologyDeleteButton>
    </IdeologyContainer>
  );
};

interface Props {
  data?: EditorAxisPartsFragment;
  editor: UseEditor;
}

const Axis: React.FC<Props> = ({ data, editor }) => {
  const { axes } = editor.actions;
  const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false);
  const leftIdeology = useIdeology(data?.left && data.left.id);
  const rightIdeology = useIdeology(data?.right && data.right.id);
  const dataJson = JSON.stringify({ data });

  const handleDeleteConfirm = () => {
    if (!deleteConfirmed) {
      setDeleteConfirmed(true);
      setTimeout(() => setDeleteConfirmed(false), 2000);
      return;
    }

    axes.delete(data.id);
  };

  return useMemo(
    () => (
      <Wrapper>
        <Container>
          <AxisIdeology axisId={data.id} data={leftIdeology} side="left" />
          <AxisIdeology axisId={data.id} data={rightIdeology} side="right" />
        </Container>
        <DeleteButton
          onClick={handleDeleteConfirm}
          deleteConfirmed={deleteConfirmed}
          title={deleteConfirmed ? "Potwierdź usunięcie" : "Usuń pytanie"}
        >
          <FontAwesomeIcon icon={faTrash} />
        </DeleteButton>
      </Wrapper>
    ),
    [dataJson, deleteConfirmed]
  );
};

export default Axis;
