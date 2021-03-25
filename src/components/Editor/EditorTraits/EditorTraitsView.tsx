import React from "react";
import { IdeologyItem } from "@components/Editor";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useTranslation from "next-translate/useTranslation";
import { Description, TraitsWrapper } from "./EditorTraitsStyle";
import EditorDropArea from "@components/Editor/EditorDropArea";
import { ItemType } from "@constants";

interface Props {
  editor: UseEditor;
}

const EditorTraits: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions, data } = editor;
  const { traits } = data.data.quiz.lastUpdatedVersion;

  const handleAdd = async (id) => {
    await actions.traits.add(id);
  };

  const handleRemove = (id) => actions.traits.delete(id);

  return (
    <Description>
      <span>{t("traits.description.0")}</span>
      <span>{t("traits.description.1")}</span>
      <TraitsWrapper>
        <EditorDropArea
          clickText={t("traits.clickHereIdeology")}
          dropText={t("traits.dropHereIdeology")}
          multiple
          accept={ItemType.Ideology}
          onDropOrAdd={handleAdd}
        >
          {traits.map((trait) => (
            <IdeologyItem
              onClick={() => handleRemove(trait.id)}
              title={t("traits.clickToDelete")}
              key={trait.id}
              id={trait.id}
            />
          ))}
        </EditorDropArea>
      </TraitsWrapper>
    </Description>
  );
};

export default EditorTraits;
