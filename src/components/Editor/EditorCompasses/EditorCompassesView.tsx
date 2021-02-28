import React from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor } from "@components/Editor/utils/useEditor";
import Compass from "./Compass";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorCompasses: React.FC<Props> = ({ editor }) => {
  const { actions, data } = editor;
  const { compassModes } = data.data.quiz.lastUpdatedVersion;

  return (
    <>
      {compassModes.map((compass, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Compass key={index} compass={compass} />
      ))}
      <Button
        onClick={actions.compasses.add}
        background="bluish"
        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        Utwórz tryb kompasu
      </Button>
    </>
  );
};

export default EditorCompasses;
