import React from "react";
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
import { UseEditor } from "@components/Editor/utils/useEditor";
import ActionButton from "@shared/ActionButton";
import { useAxisSelect, useIdeology } from "./AxisUtils";
import {
  Container,
  IdeologyContainer,
  IdeologyName,
  Wrapper,
  IdeologyDropArea,
} from "./AxisStyle";
import { translate } from "@utils/translation";
import { ItemType } from "@constants";

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
  const { handleDrop } = useAxisSelect({
    side,
    axisId,
  });

  const handleDelete = () =>
    update({
      [side]: null,
    });

  return (
    <IdeologyDropArea
      accept={ItemType.Ideology}
      dropText="Upuść ideologię"
      clickText="Kliknij, aby wybrać ideologię"
      onDropOrAdd={handleDrop}
    >
      {data && (
        <IdeologyContainer color={data.color}>
          <IdeologyIcon icon={data.icon} />
          <IdeologyName>{translate(data.name, lang)}</IdeologyName>
          <ActionButton variant="white" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </ActionButton>
        </IdeologyContainer>
      )}
    </IdeologyDropArea>
  );
};

interface Props {
  data?: EditorAxisPartsFragment;
  editor: UseEditor;
}

const Axis: React.FC<Props> = ({ data, editor }) => {
  const { t } = useTranslation("editor");
  const { axes } = editor.actions;
  const leftIdeology = useIdeology(data?.left && data.left.id);
  const rightIdeology = useIdeology(data?.right && data.right.id);

  return (
    <Wrapper>
      <Container>
        <AxisIdeology axisId={data.id} data={leftIdeology} side="left" />
        <AxisIdeology axisId={data.id} data={rightIdeology} side="right" />
      </Container>
      <ActionButton
        onClick={() => axes.delete(data.id)}
        title={t("axes.deleteButton")}
        mustConfirm
        variant="red"
        size="large"
      >
        <FontAwesomeIcon icon={faTrash} />
      </ActionButton>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) =>
  JSON.stringify(prev.data) === JSON.stringify(next.data);

export default React.memo(Axis, areEqual);
