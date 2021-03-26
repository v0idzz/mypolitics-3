import React from "react";
import { useDrag } from "react-dnd";
import useEntity from "@components/Editor/utils/useEntity";
import {
  EditorIdeologyPartsFragment,
  EditorIdeologyPartsFragmentDoc,
} from "@generated/graphql";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./IdeologyItemStyle";
import { translate } from '@utils/translation';
import { ItemType } from "@constants";

interface Props {
  id: string;
  onClick?(): void;
  title?: string;
  xl?: boolean;
}

const IdeologyItem: React.FC<Props> = ({ id, onClick, title, xl }) => {
  const { lang } = useTranslation();
  const { data } = useEntity<EditorIdeologyPartsFragment>({
    id,
    name: "Ideology",
    document: EditorIdeologyPartsFragmentDoc,
  });
  const { name, icon, color } = data;
  const [collected, drag] = useDrag(() => ({
    item: { id, type: ItemType.Ideology },
  }));

  return (
    <Container
      ref={drag}
      onClick={onClick}
      background={color}
      title={title || translate(name, lang)}
      xl={xl}
      {...collected}
    >
      <IdeologyIcon icon={icon} />
    </Container>
  );
};

export default IdeologyItem;
