import React from "react";
import { UseEditor, useEditor } from '@components/Editor/utils/useEditor';
import Button from "@shared/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ListContainer } from "./EditorIdeologiesStyle";
import IdeologyButton from "./IdeologyButton";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorIdeologies: React.FC<Props> = ({ editor }) => {
  const { data } = editor;
  const ideologies = data.data.quiz.lastUpdatedVersion.ideologies || [];

  return (
    <ListContainer>
      {ideologies.map((ideology) => (
        <IdeologyButton key={ideology.id} data={ideology} />
      ))}
      <Button
        background="bluish"
        beforeIcon={<FontAwesomeIcon icon={faPlus} />}
      >
        Utwórz ideologię
      </Button>
    </ListContainer>
  );
};

export default EditorIdeologies;
