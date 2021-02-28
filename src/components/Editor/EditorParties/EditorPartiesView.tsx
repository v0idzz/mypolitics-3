import React from "react";
import LanguageSelect from "@shared/LanguageSelect";
import { UseEditor } from "@components/Editor/utils/useEditor";
import Button from "@shared/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ListContainer } from "./EditorPartiesStyle";
import PartyButton from "./PartyButton";

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorParties: React.FC<Props> = ({ editor }) => {
  const { data } = editor;
  const parties = data.data.quiz.lastUpdatedVersion.parties || [];

  return (
    <>
      <LanguageSelect global={false} />
      <ListContainer>
        {parties.map((party) => (
          <PartyButton key={party.id} data={party} />
        ))}
        <Button
          background="bluish"
          beforeIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          Utwórz partię
        </Button>
      </ListContainer>
    </>
  );
};

export default EditorParties;
