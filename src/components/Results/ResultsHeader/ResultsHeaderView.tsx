import React from "react";
import {
  ResultsPartsFragment,
  ResultsPoliticianPartsFragment,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import dayjs from "dayjs";
import Link from "next/link";
import { paths } from "@constants";
import {
  Info,
  Header,
  Logo,
  Date,
  Id,
  PoliticianSubHeader,
  Title,
} from "./ResultsHeaderStyle";

interface Props {
  results: ResultsPartsFragment;
  politician?: ResultsPoliticianPartsFragment;
}

const ResultsHeader: React.FC<Props> = ({ results, politician }) => {
  const { lang } = useTranslation();
  const { quiz, updatedAt, id } = results;
  const path = paths.quiz(quiz.slug);

  return (
    <div>
      <Header>
        <div>
          <Link href={path}>
            <a>
              {quiz.logoUrl && (
                <Logo src={quiz.logoUrl} alt={quiz.title[lang]} />
              )}
              {!quiz.logoUrl && <Title>{quiz.title[lang]}</Title>}
            </a>
          </Link>
        </div>
        <Info>
          <Date>
            <span>Ukończono</span>&nbsp;
            {dayjs(updatedAt).locale(lang).format("DD.MM.YYYY, HH:MM")}
          </Date>
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
