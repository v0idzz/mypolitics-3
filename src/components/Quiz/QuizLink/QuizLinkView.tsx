import React from "react";
import Button from "@shared/Button";
import { FeaturedQuizzesQuery } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import { Container, Info, Image, Feature, FeaturesList } from "./QuizLinkStyle";

interface Props {
  quiz: FeaturedQuizzesQuery["featuredQuizzes"][0];
  featured?: boolean;
}

const QuizLink: React.FC<Props> = ({ quiz, featured = false }) => {
  const { slug, meta, logoUrl, title } = quiz;
  const { lang } = useTranslation();
  const quizFeatures = useQuizFeatures(meta.features);
  const path = paths.quiz(slug);

  return (
    <Container featured={featured}>
      <Info>
        <Link href={path}>
          <a>
            <Image src={logoUrl} alt={title[lang]} />
          </a>
        </Link>
        <FeaturesList>
          {quizFeatures.map((feature) => (
            <Feature key={feature}>{feature}</Feature>
          ))}
        </FeaturesList>
      </Info>
      <div>
        <Link href={path} passHref>
          <Button as="a" showShadow>
            Rozpocznij
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default QuizLink;
