import React from "react";
import { Link, Respondent, Section } from "@components/Quiz";
import { PageContainer } from "@shared/Page";
import GoogleAd from "@shared/GoogleAd";
import { FeaturedQuizzesQuery } from "@generated/graphql";
import { faPollH, faHistory } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { History as SurveysHistory } from "@components/Survey";
import { Inner, Content } from "./QuizzesPageStyle";

interface Props {
  featuredQuizzes: FeaturedQuizzesQuery["featuredQuizzes"];
}

library.add(faPollH, faHistory);

const QuizzesPage: React.FC<Props> = ({ featuredQuizzes }) => {
  const [firstQuiz, ...quizzes] = featuredQuizzes;
  const clientSide = typeof window !== "undefined";

  return (
    <PageContainer>
      <div className="container">
        <Inner>
          <Content>
            <GoogleAd id="myp3-standard-top" />
            <Link quiz={firstQuiz} featured />
            <Section
              title="Sprawdź inne quizy"
              icon={<FontAwesomeIcon icon={faPollH} />}
            >
              <Link quiz={firstQuiz} />
              <Link quiz={firstQuiz} />
              <Link quiz={firstQuiz} />
            </Section>
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
          </Content>
        </Inner>
      </div>
    </PageContainer>
  );
};

export default QuizzesPage;
