import React from "react";
import { useDrag } from "react-dnd";
import { itemTypes } from "@constants";
import useEntity from "@components/Editor/utils/useEntity";
import {
  EditorPartyPartsFragment,
  EditorPartyPartsFragmentDoc,
} from "@generated/graphql";
import { Image } from "./PartyItemStyle";

interface Props {
  id: string;
}

const PartyItem: React.FC<Props> = ({ id }) => {
  const { data } = useEntity<EditorPartyPartsFragment>({
    id,
    name: "Party",
    document: EditorPartyPartsFragmentDoc,
  });
  const [collected, drag] = useDrag(() => ({
    item: { id, type: itemTypes.party },
  }));
  const { name, logoUrl } = data;

  return (
    <Image ref={drag} src={logoUrl} alt={name} title={name} {...collected} />
  );
};

export default PartyItem;
