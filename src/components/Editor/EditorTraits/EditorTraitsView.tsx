import React from "react";
import { IdeologyItem } from "@components/Editor";
import { useDrop } from "react-dnd";
import { itemTypes } from "@constants";
import { UseEditor } from "@components/Editor/utils/useEditor";
import useTranslation from "next-translate/useTranslation";
import {
  AddButton,
  Description,
  Info,
  TraitsWrapper,
} from "./EditorTraitsStyle";
import { useEditorSlidingUpPanel } from "@components/Editor/EditorSlidingUpPanel";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";

interface Props {
  editor: UseEditor;
}

const EditorTraits: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { actions, data } = editor;
  const { traits } = data.data.quiz.lastUpdatedVersion;

  const handleAdd = async (id: any) => {
    await actions.traits.add(id);
  };

  const [_, drop] = useDrop(() => ({
    accept: itemTypes.ideology,
    drop: ({ id }: any) => handleAdd(id),
  }));

  const { show } = useEditorSlidingUpPanel();

  const handleClick = () => {
    show("ideology", handleAdd);
  };

  const handleRemove = (id) => actions.traits.delete(id);

  const isClickable = useBreakpoint("sm");

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
          {traits.length > 0 && isClickable && (
            <AddButton
              onClick={handleClick}
              background="bluish"
              beforeIcon={<FontAwesomeIcon icon={faPlus} />}
            />
          )}
          {traits.length === 0 && (
            <Info onClick={handleClick} disabled={!isClickable}>
              {isClickable
                ? t("traits.clickHereIdeology")
                : t("traits.dropHereIdeology")}
            </Info>
          )}
        </TraitsWrapper>
      </div>
    </Description>
  );
};

export default EditorTraits;
