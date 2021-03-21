import React from "react";
import { useDrag } from "react-dnd";
import { itemTypes } from "@constants";
import useEntity from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./IdeologyItemStyle";

interface Props {
  id: string;
  onClick?(): void;
  title?: string;
  xl?: boolean;
}

const IdeologyItem: React.FC<Props> = ({ id, onClick, title, xl }) => {
  const { t } = useTranslation("editor");
  const { lang } = useTranslation();
  const { data } = useEntity<EditorIdeologyPartsFragment>({
    id,
    name: "Ideology",
    document: EditorIdeologyPartsFragmentDoc,
  });
  const { name, icon, color } = data;
  const [collected, drag] = useDrag(() => ({
    item: { id, type: itemTypes.ideology },
  }));

  return (
    <Container
      ref={drag}
      onClick={onClick}
      background={color}
      title={title || name[lang]}
      xl={xl}
      {...collected}
    >
      <IdeologyIcon icon={icon} />
    </Container>
  );
};

export default IdeologyItem;
