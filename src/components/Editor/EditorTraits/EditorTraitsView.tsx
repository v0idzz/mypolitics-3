import React from "react";
import { IdeologyItem } from "@components/Editor";
import { useDrop } from "react-dnd";
import { itemTypes } from "@constants";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useTranslation from "next-translate/useTranslation";
import { Description, Info, TraitsWrapper } from "./EditorTraitsStyle";

interface Props {
  editor: UseEditor;
}

const EditorTraits: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions, data } = editor;
  const { traits } = data.data.quiz.lastUpdatedVersion;
  const [_, drop] = useDrop(() => ({
    accept: itemTypes.ideology,
    drop: ({ id }: any) => actions.traits.add(id),
  }));

  const handleRemove = (id) => actions.traits.delete(id);

  return (
    <Description>
      <span>{t("traits.description.0")}</span>
      <span>{t("traits.description.1")}</span>
      <div ref={drop}>
        <TraitsWrapper>
          {traits.map((trait) => (
            <IdeologyItem
              onClick={() => handleRemove(trait.id)}
              title={t("traits.clickToDelete")}
              key={trait.id}
              id={trait.id}
            />
          ))}
          {traits.length === 0 && <Info>{t("traits.dropHereIdeology")}</Info>}
        </TraitsWrapper>
      </div>
    </Description>
  );
};

export default EditorTraits;
