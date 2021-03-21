import React, { useMemo, useState } from "react";
import LanguageSelect from "@shared/LanguageSelect";
import { UseEditor } from "@components/Editor/utils/useEditor";
import Button from "@shared/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import CountrySelect from "@shared/CountrySelect";
import { Country } from "@generated/graphql";
import { ListContainer } from "./EditorPartiesStyle";
import PartyCard from "./PartyCard";
import PartyCreate from "./PartyCreate";
import useTranslation from 'next-translate/useTranslation';

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const EditorParties: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const [country, setCountry] = useState<Country>(Country.Poland);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data } = editor;
  const parties = data.data.quiz.lastUpdatedVersion.parties || [];
  const filteredParties = parties.filter((p) => p.country === country);
  const partiesJson = JSON.stringify({ filteredParties });
  const partiesList = useMemo(
    () =>
      filteredParties.map((party) => (
        <PartyCard key={party.id} data={party} editor={editor} />
      )),
    [partiesJson]
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <CountrySelect
          value={country}
          onChange={setCountry}
          color="background"
        />
      </div>
      <ListContainer>
        {partiesList}
        <Button
          onClick={() => setShowModal(true)}
          background="bluish"
          beforeIcon={<FontAwesomeIcon icon={faPlus} />}
        >
          {t("parties.create")}
        </Button>
        <PartyCreate
          show={showModal}
          onClose={() => setShowModal(false)}
          editor={editor}
        />
      </ListContainer>
    </>
  );
};

export default EditorParties;
