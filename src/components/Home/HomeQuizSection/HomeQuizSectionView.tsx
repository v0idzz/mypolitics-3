import React from "react";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import DefaultLink from "next/dist/client/link";
import { paths } from "@constants";
import * as R from "ramda";
import { AdditionalContentImage } from "./HomeQuizSectionStyle";

const plImg = require("@assets/images/mypolitics-quiz-results-pl.png");
const intImg = require("@assets/images/mypolitics-quiz-results.png");

const HomeQuizSection: React.FC = () => {
  const { t, lang } = useTranslation("home");

  const contentSrc = R.cond([
    [R.equals("pl"), R.always(plImg)],
    [R.T, R.always(intImg)],
  ])(lang);

  return (
    <Section
      title={t("quiz.title")}
      slogan={t("quiz.slogan")}
      variant="right"
      illustrationUrl={require("@assets/images/quiz.png")}
      additionalContent={<AdditionalContentImage src={contentSrc} />}
      content={
        <>
          <p>{t("quiz.content.text")}</p>
          <div>
            <DefaultLink href={paths.quizzes} passHref>
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
