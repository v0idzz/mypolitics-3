import React, { useState } from "react";
import { useMeRespondentSurveysQuery } from "@generated/graphql";
import * as R from "ramda";
import { SurveyHistory } from "@components/Survey/SurveysHistory/SurveysHistoryTypes";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {getUnixTime} from 'date-fns';
import { SurveyLink } from "@components/Survey";
import Link from "next/link";
import { paths } from "@constants";
import { Title } from "@components/Quiz/QuizLink/QuizLinkStyle";
import useTranslation from "next-translate/useTranslation";
import { useClassicResults } from "./SurveyHistoryUtils";
import {
  Container,
  Header,
  List,
  Logo,
  EmptyWrapper,
} from "./SurveysHistoryStyle";

library.add(faArrowDown);

interface SurveyHistoryElementProps {
  data: SurveyHistory;
  contentOnly: boolean;
}

const SurveyHistoryElement: React.FC<SurveyHistoryElementProps> = ({
  data,
  contentOnly,
}) => {
  const { t, lang } = useTranslation("quiz");
  const { quiz, surveys } = data;
  const BASE_LIMIT = 3;
  const [limit, setLimit] = useState<number>(BASE_LIMIT);

  const handleShowMore = () => setLimit(limit + BASE_LIMIT);

  const toListElement = (survey) => (
    <SurveyLink key={survey.id} survey={survey} />
  );

  const sortedSurveys = surveys.sort(
    (a, b) => getUnixTime(b.updatedAt) - getUnixTime(a.updatedAt)
  );
  const limitedSurveys = sortedSurveys.filter((_, i) => i < limit);
  const listElements = R.map(toListElement, limitedSurveys);
  const showButton = limitedSurveys.length < surveys.length;
  const path = paths.quiz(quiz.slug);

  const baseContent = (
    <>
      {listElements}
      {showButton && (
        <Button
          onClick={handleShowMore}
          beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
        >
          {t("surveyHistory.showMore")}
        </Button>
      )}
    </>
  );

  const empty = listElements.length === 0;
  const content = empty ? (
    <EmptyWrapper>{t("surveyHistory.emptyInfo")}</EmptyWrapper>
  ) : (
    baseContent
  );

  if (contentOnly) {
    return content;
  }

  return (
    <Container>
      <Header>
        <Link href={path}>
          <a>
            {quiz.logoUrl && (
              <Logo
                src={quiz.logoUrl}
                alt={quiz.title ? quiz.title[lang] : quiz.slug}
              />
            )}
            {!quiz.logoUrl && (
              <Title>{quiz.title ? quiz.title[lang] : quiz.slug}</Title>
            )}
          </a>
        </Link>
      </Header>
      <List>{content}</List>
    </Container>
  );
};

interface Props {
  quizSlug?: string;
  onlyContent?: boolean;
}

const SurveysHistory: React.FC<Props> = ({ quizSlug, onlyContent = false }) => {
  const { t } = useTranslation("quiz");
  const { data } = useMeRespondentSurveysQuery();
  const classicResults = useClassicResults();

  if (!data) {
    return null;
  }

  const surveys = [...classicResults, ...data.meRespondent.surveys];
  const byQuizId = R.groupBy((survey) => survey.quizVersion.quiz.id);
  const toQuizzesSurveys = (surveysList) => ({
    quiz: surveysList[0].quizVersion.quiz,
    surveys: surveysList,
  });
  const quizzesSurveys: SurveyHistory[] = R.values(
    R.map(toQuizzesSurveys, byQuizId(surveys))
  );
  const onlyProvidedSlug = ({ quiz }) => quiz.slug === quizSlug;
  const quizzesSurveysFiltered = quizSlug
    ? R.filter(onlyProvidedSlug, quizzesSurveys)
    : quizzesSurveys;

  const quizzesSurveysElements = R.map(
    (quizSurvey) => (
      <SurveyHistoryElement
        contentOnly={onlyContent}
        key={quizSurvey.quiz.id}
        data={quizSurvey}
      />
    ),
    quizzesSurveysFiltered
  );

  const empty = quizzesSurveysElements.length === 0;
  const content = empty ? (
    <EmptyWrapper>{t("surveyHistory.emptyInfo")}</EmptyWrapper>
  ) : (
    quizzesSurveysElements
  );

  return <>{content}</>;
};

export default SurveysHistory;
