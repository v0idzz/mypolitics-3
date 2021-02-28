import React from "react";
import {
  faArrowLeft,
  faCheck,
  faTimes,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import { useSurvey } from "@components/Survey/utils/useSurvey";
import useTranslation from "next-translate/useTranslation";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Loading from "@shared/Loading";
import SurveyHeader from "./SurveyHeader";
import SurveyAnswers from "./SurveyAnswers";
import {
  Container,
  FormQuestion,
  Header,
  Inner,
  Logo,
  BottomInfo,
  Title,
} from "./SingleSurveyPageStyle";

library.add(faArrowLeft, faUndoAlt, faTimes, faCheck);

const SurveyPage: React.FC = () => {
  const { query } = useRouter();
  const { lang } = useTranslation();
  const { data, actions } = useSurvey(`${query.id}`);
  const { currentQuestion, quiz } = data;

  if (!currentQuestion) {
    return <Loading />;
  }

  return (
    <Container>
      <Header>
        {quiz.logoUrl && <Logo src={quiz.logoUrl} alt={quiz.title[lang]} />}
        {!quiz.logoUrl && <Title>{quiz.title[lang]}</Title>}
      </Header>
      <Inner>
        <SurveyHeader actions={actions} data={data} />
        <SwitchTransition>
          <CSSTransition
            key={currentQuestion.id}
            classNames="fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
          >
            <span>
              <FormQuestion>{currentQuestion.text[lang]}</FormQuestion>
            </span>
          </CSSTransition>
        </SwitchTransition>
        <SurveyAnswers data={data} actions={actions} />
      </Inner>
      <BottomInfo>
        Test możesz przerwać w każdym momencie, Twoje postępy są zapisywane
      </BottomInfo>
    </Container>
  );
};

export default SurveyPage;
