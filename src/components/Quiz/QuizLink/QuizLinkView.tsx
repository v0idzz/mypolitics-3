import React from "react";
import Button from "@shared/Button";
import { QuizBasicPartsFragment, QuizType } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VerifyState from "@components/Quiz/QuizLink/VerifyState";
import {
  Chip,
  Container,
  FeaturesList,
  Image,
  Info,
  PointsChip,
  Title,
} from "./QuizLinkStyle";

library.add(faPen);

interface Props {
  quiz: QuizBasicPartsFragment;
  featured?: boolean;
  editable?: boolean;
  showState?: boolean;
}

const QuizLink: React.FC<Props> = ({
  quiz,
  featured = false,
  editable = false,
  showState = false,
}) => {
  const { slug, meta, type } = quiz;
  const { lang } = useTranslation();
  const quizFeatures = useQuizFeatures(meta.features);
  const path = editable ? paths.editor(slug) : paths.quiz(slug);
  const showPoints = ![QuizType.Official, QuizType.Classic].includes(type);
  const icon = editable ? <FontAwesomeIcon icon={faPen} /> : undefined;
  const points = quiz.meta.votes.value;

  return (
    <Container featured={featured}>
      <Info>
        <Link href={path}>
          <a>
            {quiz.logoUrl && (
              <Image src={quiz.logoUrl} alt={quiz.title[lang]} />
            )}
            {!quiz.logoUrl && <Title>{quiz.title[lang]}</Title>}
          </a>
        </Link>
        <FeaturesList>
          {showPoints && (
            <PointsChip points={points}>
              {points > 0 && "+"}
              {points}
            </PointsChip>
          )}
          {quizFeatures.map((feature) => (
            <Chip key={feature}>{feature}</Chip>
          ))}
          {showState && <VerifyState quiz={quiz} />}
        </FeaturesList>
      </Info>
      <div>
        <Link href={path} passHref>
          <Button as="a" beforeIcon={icon} showShadow>
            {editable ? "Edytuj" : "Rozpocznij"}
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default QuizLink;
