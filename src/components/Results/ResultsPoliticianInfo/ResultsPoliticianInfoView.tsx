import React from "react";
import { ResultsPoliticianPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { translate } from "@utils/translation";
import { Container, Image, Biography } from "./ResultsPoliticianInfoStyle";

interface Props {
  politician: ResultsPoliticianPartsFragment;
}

const ResultsPoliticianInfo: React.FC<Props> = ({ politician }) => {
  const { lang } = useTranslation();

  return (
    <Container>
      <Image src={politician.image.url} alt={politician.name} />
      <Biography>{translate(politician?.biography, lang)}</Biography>
    </Container>
  );
};

export default ResultsPoliticianInfo;
