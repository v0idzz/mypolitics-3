import React from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Country, useEditorStandardPartiesQuery } from "@generated/graphql";
import { UseEditor } from "@components/Editor/utils/useEditor";
import * as R from "ramda";
import { CountryImage } from "@shared/CountrySelect/CountrySelectStyle";
import { Container } from "./PartiesImportStyle";
import useTranslation from 'next-translate/useTranslation';

library.add(faPlus);

interface Props {
  editor: UseEditor;
}

const IdeologiesImport: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { data } = useEditorStandardPartiesQuery();
  const { actions } = editor;
  const parties = data?.quiz.currentVersion.parties || [];
  const byCountry = R.groupBy(R.prop("country"));
  const countryParties = byCountry(parties);

  return (
    <Container>
      <span>{t("parties.import")}</span>
      {Object.keys(countryParties).map((country) => (
        <Button
          key={country}
          background="bluish"
          beforeIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => actions.parties.import(countryParties[country])}
        >
          <img
            src={require(`@assets/images/countries/${country}.png`)}
            alt={country}
          />
        </Button>
      ))}
    </Container>
  );
};

export default React.memo(IdeologiesImport, () => true);
