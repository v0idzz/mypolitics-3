import React from "react";
import { EditorPartyPartsFragment } from "@generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container, Name, Image, EditButton } from "./PartyButtonStyle";

library.add(faPen);

interface Props {
  data: EditorPartyPartsFragment;
}

const PartyButton: React.FC<Props> = ({ data }) => {
  const { name, logoUrl } = data;

  return (
    <Container>
      <Image src={logoUrl} alt={name} />
      <Name>{name}</Name>
      <EditButton>
        <FontAwesomeIcon icon={faPen} />
      </EditButton>
    </Container>
  );
};

export default PartyButton;
