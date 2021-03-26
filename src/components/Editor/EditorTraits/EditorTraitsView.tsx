import React from "react";
import { IdeologyItem } from "@components/Editor";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useTranslation from "next-translate/useTranslation";
import { Description } from "./EditorTraitsStyle";
import { ItemType } from "@constants";
import { EditorIconsDropArea } from "@components/Editor/EditorDropArea";

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
      <EditorIconsDropArea
        clickText={t("traits.clickHereIdeology")}
        dropText={t("traits.dropHereIdeology")}
        multiple
        accept={ItemType.Ideology}
        onDropOrAdd={handleAdd}
        padding={0.75}
      >
        {traits.map((trait) => (
          <IdeologyItem
            onClick={() => handleRemove(trait.id)}
            title={t("traits.clickToDelete")}
            key={trait.id}
            id={trait.id}
          />
        ))}
      </EditorIconsDropArea>
    </Description>
  );
};

export default EditorTraits;
