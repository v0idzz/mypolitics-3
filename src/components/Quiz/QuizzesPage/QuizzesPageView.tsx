import React, { useState } from "react";
import {
  Link,
  PoliticiansResults,
  Respondent,
  Section,
} from "@components/Quiz";
import GoogleAd from "@shared/GoogleAd";
import { QuizBasicPartsFragment } from "@generated/graphql";
import {
  faPollH,
  faHistory,
  faArrowDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { History as SurveysHistory } from "@components/Survey";
import Button from "@shared/Button";
import { EditorCTA } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import { SearchBox } from "@components/Quiz/QuizzesPage/QuizzesPageStyle";

interface Props {
  list: QuizBasicPartsFragment[];
}

library.add(faPollH, faHistory, faSearch);
const BASE_LIMIT = 6;

const QuizzesPage: React.FC<Props> = ({ list }) => {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState<number>(BASE_LIMIT);
  const { t } = useTranslation("quiz");
  const [firstQuiz, ...quizzes] = list;
  const clientSide = typeof window !== "undefined";
  const searching = search.length > 0;

  const handleShowMore = () => setLimit(limit + BASE_LIMIT);
  const limitedQuizzes = quizzes.filter((_, i) => i < limit);
  const searchedQuizzes = quizzes.filter(({ title }) =>
    JSON.stringify(title).toLowerCase().includes(search.toLowerCase())
  );
  const showButton = limitedQuizzes.length < quizzes.length;
  const quizzesList = searching ? searchedQuizzes : limitedQuizzes;

  return (
    <>
      <GoogleAd id="myp3-standard-top" />
      <Link quiz={firstQuiz} featured />
      {quizzes.length > 0 && (
        <Section
          title={t("quizzes.other")}
          icon={<FontAwesomeIcon icon={faPollH} />}
        >
          <SearchBox>
            <input
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </SearchBox>
          {quizzesList.map((quiz, key) => (
            <>
              <Link key={quiz.id} quiz={quiz} showType />
              {(key + 1) % BASE_LIMIT === 0 && (
                <>
                  {!searching && <GoogleAd id="myp3-standard-middle" />}
                  {key === quizzesList.length - 1 && <EditorCTA />}
                </>
              )}
            </>
          ))}
          {showButton && !searching && (
            <Button
              onClick={handleShowMore}
              beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
            >
              {t("results.showMore")}
            </Button>
          )}
        </Section>
      )}
      {clientSide && (
        <>
          <Section
            id="history"
            title={t("quizzes.history")}
            icon={<FontAwesomeIcon icon={faHistory} />}
          >
            <SurveysHistory />
          </Section>
          <Respondent />
        </>
      )}
      <PoliticiansResults />
      <GoogleAd id="myp3-standard-middle" />
    </>
  );
};

export default QuizzesPage;
