import { UseEditor } from "@components/Editor/utils/useEditor";
import {
  Container,
  Inner,
  Header,
  Options,
  CollapseButton,
} from "./EditorSlidingUpPanelStyle";
import React from "react";
import * as R from "ramda";
import { useEditorSlidingUpPanel } from "./EditorSlidingUpPanelContext";
import { IdeologyItem, PartyItem } from "@components/Editor";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBreakpoint from "@utils/hooks/useBreakpoint";

interface Props {
  editor: UseEditor;
}

const EditorSlidingUpPanel: React.FC<Props> = ({ editor }) => {
  const { isIn, type, callback, hide } = useEditorSlidingUpPanel();

  const { versionInput } = editor;
  const { parties, traits } = versionInput;
  const ideologies = versionInput.ideologies.filter(
    (id) => !traits.includes(id)
  );

  const [items, Component]: [string[], React.FC<any>] = R.cond([
    [R.equals("party"), R.always([parties, PartyItem])],
    [R.equals("ideology"), R.always([ideologies, IdeologyItem])],
    [R.equals("trait"), R.always([traits, IdeologyItem])],
  ])(type);

  const handleItemClick = (id: string) => {
    callback(id);
    hide();
  };

  const canBeDisplayed = useBreakpoint("md");

  if (!canBeDisplayed) return null;

  return (
    <Container slideIn={isIn}>
      <Inner>
        <Header>
          Opcje wyboru
          <CollapseButton aria-label="zwiń" onClick={hide}>
            <FontAwesomeIcon icon={faChevronDown} />
          </CollapseButton>
        </Header>
        <Options>
          {items.map((id) => (
            <Component
              key={id}
              id={id}
              onClick={() => handleItemClick(id)}
              xl
            />
          ))}
        </Options>
      </Inner>
    </Container>
  );
};

export default EditorSlidingUpPanel;
