import React from "react";
import { Link, Respondent, Section } from "@components/Quiz";
import { PageContainer } from "@shared/Page";
import GoogleAd from "@shared/GoogleAd";
import { FeaturedQuizzesQuery } from "@generated/graphql";
import { faPollH, faHistory } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { History as SurveysHistory } from "@components/Survey";
import StandardPage from "@shared/StandardPage";

interface Props {
  featuredQuizzes: FeaturedQuizzesQuery["featuredQuizzes"];
}

library.add(faPollH, faHistory);

const QuizzesPage: React.FC<Props> = ({ featuredQuizzes }) => {
  const [firstQuiz, ...quizzes] = featuredQuizzes;
  const clientSide = typeof window !== "undefined";

  return (
    <StandardPage>
      <GoogleAd id="myp3-standard-top" />
      <Link quiz={firstQuiz} featured />
      {quizzes.length > 0 && (
        <Section
          title="Sprawdź inne quizy"
          icon={<FontAwesomeIcon icon={faPollH} />}
        >
          {quizzes.map((quiz) => (
            <Link key={quiz.id} quiz={quiz} />
          ))}
        </Section>
      )}
      {clientSide && (
        <>
          <Section
            title="Historia wyników"
            icon={<FontAwesomeIcon icon={faHistory} />}
          >
            <SurveysHistory />
          </Section>
          <Respondent />
        </>
      )}
      <GoogleAd id="myp3-standard-middle" />
    </StandardPage>
  );
};

export default QuizzesPage;
