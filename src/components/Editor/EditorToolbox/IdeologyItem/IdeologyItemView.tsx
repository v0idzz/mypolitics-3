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
}

const IdeologyItem: React.FC<Props> = ({ id }) => {
  const { lang } = useTranslation();
  const { data } = useEntity<EditorIdeologyPartsFragment>({
    id,
    name: "Ideology",
    document: EditorIdeologyPartsFragmentDoc,
  });
  const { name, icon, color } = data;
  const [collected, drag] = useDrag(() => ({
    item: { id, type: itemTypes.party },
  }));

  return (
    <Container ref={drag} background={color} title={name[lang]} {...collected}>
      <IdeologyIcon icon={icon} />
    </Container>
  );
};

export default IdeologyItem;
