import React from "react";
import { useMeRespondentSurveysQuery } from "@generated/graphql";
import * as R from "ramda";
import { SurveyHistory } from "@components/Survey/SurveysHistory/SurveysHistoryTypes";
import Link from "next/link";
import { paths } from "@constants";
import {
  Container,
  Header,
  Text,
  List,
  ListElement,
  Logo,
  Chips,
} from "./SurveysHistoryStyle";

const SurveyHistoryElement: React.FC<{ data: SurveyHistory }> = ({ data }) => {
  const { quiz, surveys } = data;

  const toListElement = (survey) => {
    const href = survey.finished
      ? paths.results(survey.id)
      : paths.survey(survey.id);

    return (
      <Link href={href} passHref>
        <ListElement>
          <Text>{survey.updatedAt}</Text>
          {survey.finished && <Chips background="green">ukończone</Chips>}
          {!survey.finished && <Chips background="yellow">w trakcie</Chips>}
        </ListElement>
      </Link>
    );
  };

  const listElements = R.map(toListElement, surveys);

  return (
    <Container>
      <Header>
        <Logo src={quiz.logoUrl} alt={quiz.id} />
      </Header>
      <List>{listElements}</List>
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
