import React from "react";
import {
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import {
  Info,
  Header,
  Logo,
  Date,
  Id,
  PoliticianSubHeader,
} from "./ResultsHeaderStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsHeader: React.FC<Props> = ({ results, politician }) => {
  const { lang } = useTranslation();
  const { quiz, updatedAt, id } = results;

  return (
    <div>
      <Header>
        <div>
          <Logo src={quiz.logoUrl} alt={quiz.title[lang]} />
        </div>
        <Info>
          <Date>{updatedAt}</Date>
          <Id>
            <span>ID:</span>
            {id}
          </Id>
        </Info>
      </Header>
      {politician && (
        <PoliticianSubHeader>{politician.name}</PoliticianSubHeader>
      )}
    </div>
  );
};

export default ResultsHeader;