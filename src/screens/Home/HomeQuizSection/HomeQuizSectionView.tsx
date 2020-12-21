import React from "react";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import { AdditionalContentImage } from "./HomeQuizSectionStyle";
import DefaultLink from 'next/dist/client/link';

const HomeQuizSection: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <Section
      title={t("quiz.title")}
      slogan={t("quiz.slogan")}
      variant="right"
      illustrationUrl={require("@assets/images/quiz.png")}
      additionalContent={
        <AdditionalContentImage src={require("@assets/images/mypolitics-quiz-results.png")} />
      }
      content={
        <>
          <p>{t("quiz.content.text")}</p>
          <div>
            <DefaultLink href="/quizes">
              <Button as="a" showShadow>
                {t("quiz.content.buttonText")}
              </Button>
            </DefaultLink>
          </div>
        </>
      }
    />
  );
};

export default HomeQuizSection;
