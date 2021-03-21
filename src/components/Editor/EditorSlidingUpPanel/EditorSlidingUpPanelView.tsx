import { UseEditor } from "@components/Editor/utils/useEditor";
import { Container, Inner, Header, Options } from "./EditorSlidingUpPanelStyle";
import React from "react";
import * as R from "ramda";
import { useEditorSlidingUpPanel } from "./EditorSlidingUpPanelContext";
import { IdeologyItem, PartyItem } from "@components/Editor";

export type ItemType = "party" | "ideology" | "trait";

interface Props {
  editor: UseEditor;
}

const EditorSlidingUpPanel: React.FC<Props> = ({ editor }) => {
  const { isIn, type } = useEditorSlidingUpPanel();

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

  return (
    <Container slideIn={isIn}>
      <Inner>
        <Header>Opcje wyboru</Header>
        <Options>
          {items.map((id) => (
            <Component key={id} id={id} />
          ))}
        </Options>
      </Inner>
    </Container>
  );
};

export default EditorSlidingUpPanel;
