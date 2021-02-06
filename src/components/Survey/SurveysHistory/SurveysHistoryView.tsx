import React, { useState } from "react";
import { useMeRespondentSurveysQuery } from "@generated/graphql";
import * as R from "ramda";
import { SurveyHistory } from "@components/Survey/SurveysHistory/SurveysHistoryTypes";
import Link from "next/link";
import { paths } from "@constants";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Header,
  Text,
  List,
  ListElement,
  Logo,
  Chips,
} from "./SurveysHistoryStyle";

library.add(faArrowDown);

const SurveyHistoryElement: React.FC<{ data: SurveyHistory }> = ({ data }) => {
  const { lang } = useTranslation();
  const { quiz, surveys } = data;
  const BASE_LIMIT = 3;
  const [limit, setLimit] = useState<number>(BASE_LIMIT);

  const handleShowMore = () => setLimit(limit + BASE_LIMIT);

  const toListElement = (survey) => {
    const href = survey.finished
      ? paths.results(survey.id)
      : paths.survey(survey.id);

    return (
      <Link href={href} passHref>
        <ListElement>
          <Text>
            {dayjs(survey.updatedAt).locale(lang).format("DD.MM.YYYY HH:MM")}
          </Text>
          {survey.finished && <Chips background="green">ukończone</Chips>}
          {!survey.finished && <Chips background="yellow">w trakcie</Chips>}
        </ListElement>
      </Link>
    );
  };

  const sortedSurveys = surveys.sort(
    (a, b) => dayjs(b.updatedAt).unix() - dayjs(a.updatedAt).unix()
  );
  const limitedSurveys = sortedSurveys.filter((_, i) => i < limit);
  const listElements = R.map(toListElement, limitedSurveys);
  const showButton = limitedSurveys.length < surveys.length;

  return (
    <Container>
      <Header>
        <Logo src={quiz.logoUrl} alt={quiz.id} />
      </Header>
      <List>
        {listElements}
        {showButton && (
          <Button
            onClick={handleShowMore}
            beforeIcon={<FontAwesomeIcon icon={faArrowDown} />}
          >
            Pokaż więcej
          </Button>
        )}
      </List>
    </Container>
  );
};

const SurveysHistory: React.FC = () => {
  const { data } = useMeRespondentSurveysQuery();

  if (!data) {
    return null;
  }

  const { surveys } = data.meRespondent;
  const byQuizId = R.groupBy((survey) => survey.quizVersion.quiz.id);
  const toQuizzesSurveys = (surveysList, key) => {
    const surveyWithQuiz = R.find(R.propEq("quizVersion.quiz.id", key))(
      surveys
    );

    return {
      quiz: surveyWithQuiz.quizVersion.quiz,
      surveys: surveysList,
    };
  };
  const quizzesSurveys: SurveyHistory[] = R.values(
    R.map(toQuizzesSurveys, byQuizId(surveys))
  );

  const quizzesSurveysElements = R.map(
    (quizSurvey) => (
      <SurveyHistoryElement key={quizSurvey.quiz.id} data={quizSurvey} />
    ),
    quizzesSurveys
  );

  return <>{quizzesSurveysElements}</>;
};

export default SurveysHistory;
