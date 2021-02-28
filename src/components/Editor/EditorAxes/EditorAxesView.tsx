import React from "react";
import { EditorAxisPartsFragment } from "@generated/graphql";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import useEditorActions from "@components/Editor/utils/useEditorActions";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { Container } from "./EditorAxesStyle";
import Axis from "./Axis";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorAxes: React.FC<Props> = ({ editor }) => {
  const { actions, data } = editor;
  const { axes } = data.data.quiz.lastUpdatedVersion;
  const handleNewAxis = () => actions.axes.add([null, null]);

  return (
    <Container>
      {axes.map((axis) => (
        <Axis key={axis.id} data={axis} editor={editor} />
      ))}
      <Button
        onClick={handleNewAxis}
        background="bluish"
        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        Utwórz oś
      </Button>
    </Container>
  );
};

export default EditorAxes;
