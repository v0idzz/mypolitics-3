import React from "react";
import { IdeologyItem } from "@components/Editor";
import { useDrop } from "react-dnd";
import { itemTypes } from "@constants";
import { UseEditor } from "@components/Editor/utils/useEditor";
import { Description, Info, TraitsWrapper } from "./EditorTraitsStyle";

interface Props {
  editor: UseEditor;
}

const EditorTraits: React.FC<Props> = ({ editor }) => {
  const { actions, data } = editor;
  const { traits } = data.data.quiz.lastUpdatedVersion;
  const [_, drop] = useDrop(() => ({
    accept: itemTypes.ideology,
    drop: ({ id }: any) => actions.traits.add(id),
  }));

  const handleRemove = (id) => actions.traits.delete(id);

  return (
    <Description>
      <span>
        Cechy służą ukazaniu indywidualnych cech użytkownika, które nie mogą być
        zaprezentowane na osiach. Upuść tutaj ideologię, aby ona stała się
        cechą.
      </span>
      <span>
        Zostanie przypisana do użytkownika tylko wtedy gdy ten na wszystkie
        pytania odpowie zdecydowanie i zgodnie z cechą.
      </span>
      <div ref={drop}>
        <TraitsWrapper>
          {traits.map((trait) => (
            <IdeologyItem
              onClick={() => handleRemove(trait.id)}
              title="Kliknij, aby usunąć"
              key={trait.id}
              id={trait.id}
            />
          ))}
          {traits.length === 0 && <Info>Upuść tutaj ideologię</Info>}
        </TraitsWrapper>
      </div>
    </Description>
  );
};

export default EditorTraits;
