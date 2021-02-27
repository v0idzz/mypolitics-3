import React from "react";
import { EditorIdeologyPartsFragment } from "@generated/graphql";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import IdeologyIcon from "@shared/IdeologyIcon";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Name, EditButton } from "./IdeologyButtonStyle";

library.add(faPen);

interface Props {
  data: EditorIdeologyPartsFragment;
}

const IdeologyButton: React.FC<Props> = ({ data }) => {
  const { lang } = useTranslation();
  const { name, icon, color } = data;

  return (
    <Container color={color}>
      <IdeologyIcon icon={icon} />
      <Name>{name[lang]}</Name>
      <EditButton>
        <FontAwesomeIcon icon={faPen} />
      </EditButton>
    </Container>
  );
};

export default IdeologyButton;
