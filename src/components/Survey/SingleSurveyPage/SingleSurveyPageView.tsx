import React from "react";
import GoogleAd from "@shared/GoogleAd";
import {
  faArrowLeft,
  faCheck,
  faTimes,
  faUndoAlt,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import StandardPage from "@shared/StandardPage";
import { useRouter } from "next/router";
import { useSurvey } from "@components/Survey/utils/useSurvey";
import useTranslation from "next-translate/useTranslation";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import SurveyHeader from "./SurveyHeader";
import SurveyAnswers from "./SurveyAnswers";
import {
  Container,
  FormQuestion,
  Header,
  Inner,
  Logo,
} from "./SingleSurveyPageStyle";

library.add(faArrowLeft, faUndoAlt, faTimes, faCheck);

const SurveyPage: React.FC = () => {
  const { query } = useRouter();
  const { lang } = useTranslation();
  const { data, actions } = useSurvey(`${query.id}`);
  const { currentQuestion, quiz } = data;

  if (!currentQuestion) {
    return null;
  }

  return (
    <StandardPage>
      <GoogleAd id="myp3-standard-top" />
      <Container>
        <Header>
          <Logo src={quiz.logoUrl} alt="Quiz logo" />
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
      </Container>
      <GoogleAd id="myp3-standard-middle" />
    </StandardPage>
  );
};

export default SurveyPage;
