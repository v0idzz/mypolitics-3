import React, { useMemo } from "react";
import { EditorAxisPartsFragment } from "@generated/graphql";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./EditorAxesStyle";
import Axis from "./Axis";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorAxes: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions, data } = editor;
  const { axes } = data.data.quiz.lastUpdatedVersion;
  const handleNewAxis = () => actions.axes.add();
  const axesList = axes.map((axis) => (
    <Axis key={axis.id} data={axis} editor={editor} />
  ));

  return (
    <Container>
      {axesList}
      <Button
        onClick={handleNewAxis}
        background="bluish"
        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        {t("axes.createButton")}
      </Button>
    </Container>
  );
};

export default EditorAxes;
