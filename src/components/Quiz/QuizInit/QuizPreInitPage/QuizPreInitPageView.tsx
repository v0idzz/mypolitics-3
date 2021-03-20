import React from "react";
import { NextSeo } from "next-seo";
import { InitStep } from "@components/Quiz";
import Button from "@shared/Button";
import Link from "next/link";
import { paths } from "@constants";
import CenteredPage from "@shared/CenteredPage";
import GoogleAd from "@shared/GoogleAd";
import { Chips, TopText, Content } from "./QuizPreInitPageStyle";

const QuizPreInitPage: React.FC = () => (
  <CenteredPage fullWidth={false}>
    <NextSeo title="Przed quizem" titleTemplate="%s – myPolitics" />
    <GoogleAd id="myp3-standard-top" />
    <InitStep title="Cześć!" lead="Zanim przejdziesz do quizów..." showDivider>
      <Content>
        <TopText>
          Twoja prywatność jest dla nas priorytetem. Tutaj prosto opisaliśmy jak
          i w jakich celach przechowujemy Twoje dane.
        </TopText>
        <Chips>
          Twoje wyniki są <span>anonimowe</span> i nie ma możliwości ich
          powiązania z Tobą (chyba że sam je upublicznisz)
        </Chips>
        <Chips>
          Dane są analizowane zbiorowo w celu poprawy dokładności aplikacji
        </Chips>
        <Link href={paths.quizzesInitialize} passHref>
          <Button as="a" showShadow>
            Przejdź dalej
          </Button>
        </Link>
      </Content>
    </InitStep>
    <GoogleAd id="myp3-standard-bottom" />
  </CenteredPage>
);

export default QuizPreInitPage;
