import React from "react";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import DefaultLink from "next/dist/client/link";
import { paths } from "@constants";
import * as R from "ramda";
import { AdditionalContentImage } from "./HomeQuizSectionStyle";

const images = {
  pl: {
    modern: require("@assets/images/mypolitics-quiz-results-pl.png?webp"),
    fallback: require("@assets/images/mypolitics-quiz-results-pl.png?resize&sizes[]=400&sizes[]=800"),
  },
  en: {
    modern: require("@assets/images/mypolitics-quiz-results.png?webp"),
    fallback: require("@assets/images/mypolitics-quiz-results.png?resize&sizes[]=400&sizes[]=800"),
  },
};

const HomeQuizSection: React.FC = () => {
  const { t, lang } = useTranslation("home");

  const { modern: modernImg, fallback: fallbackImg } = R.cond([
    [R.equals("pl"), R.always(images.pl)],
    [R.T, R.always(images.en)],
  ])(lang);

  return (
    <Section
      title={t("quiz.title")}
      slogan={t("quiz.slogan")}
      variant="right"
      illustrationUrls={{
        modern: require("@assets/images/quiz.png?webp"),
        fallback: require("@assets/images/quiz.png?resize&sizes[]=320&sizes[]=120"),
      }}
      additionalContent={
        <AdditionalContentImage>
          <source srcSet={modernImg} type="image/webp" />
          <source srcSet={fallbackImg.srcSet} type="image/png" />
          <img src={fallbackImg.src} alt={t("quiz.title")} />
        </AdditionalContentImage>
      }
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
