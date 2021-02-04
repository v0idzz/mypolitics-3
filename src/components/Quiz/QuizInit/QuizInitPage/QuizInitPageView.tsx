import React from "react";
import { NextSeo } from "next-seo";
import { InitStep } from "@components/Quiz";
import Button from "@shared/Button";
import CenteredPage from "@shared/CenteredPage";
import Link from "next/link";
import { paths } from "@constants";
import GoogleAd from "@shared/GoogleAd";
import { ButtonChips, Content } from "./QuizInitPageStyle";

const QuizInitPage: React.FC = () => (
  <CenteredPage fullWidth={false}>
    <NextSeo title="Zaczynamy!" titleTemplate="%s – myPolitics" />
    <GoogleAd id="myp3-standard-top" />
    <InitStep
      title="Zaczynamy!"
      lead="Czy pierwszy raz wykonujesz test poglądów?"
      showDivider
    >
      <Content>
        <Link href={paths.quiz("mypolitics")} passHref>
          <Button as="a" size="large" showShadow>
            Tak
            <ButtonChips background="gray">Uproszczony</ButtonChips>
          </Button>
        </Link>
        <Link href={paths.quizzesAdvancedInitialize} passHref>
          <Button as="a" size="large" background="gray">
            Nie
            <ButtonChips background="blue">Zaawansowany</ButtonChips>
          </Button>
        </Link>
      </Content>
    </InitStep>
  </CenteredPage>
);

export default QuizInitPage;
