import React from "react";
import Button from "@shared/Button";
import { QuizBasicPartsFragment, QuizType } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import { faEye, faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VerifyState from "@components/Quiz/QuizLink/VerifyState";
import * as R from "ramda";
import {
  Chip,
  Container,
  FeaturesList,
  Image,
  Info,
  PointsChip,
  Title,
} from "./QuizLinkStyle";

library.add(faPen, faEye);

interface Props {
  quiz: QuizBasicPartsFragment;
  featured?: boolean;
  editable?: boolean;
  showState?: boolean;
  canVerify?: boolean;
}

const QuizLink: React.FC<Props> = ({
  quiz,
  featured = false,
  editable = false,
  canVerify = false,
  showState = false,
}) => {
  const { slug, meta, type, verifyRequest } = quiz;
  const { lang } = useTranslation();
  const quizFeatures = useQuizFeatures(meta.features);
  const showPoints = ![QuizType.Official, QuizType.Classic].includes(type);
  const points = quiz.meta.votes.value;

  const path = R.cond([
    [() => editable, R.always(paths.editor(slug))],
    [() => canVerify, R.always(paths.editor(slug, verifyRequest?.version.id))],
    [R.T, R.always(paths.quiz(slug))],
  ])();

  const [buttonIcon, buttonText] = R.cond([
    [
      () => editable,
      R.always([<FontAwesomeIcon key="0" icon={faPen} />, "Edytuj"]),
    ],
    [
      () => canVerify,
      R.always([<FontAwesomeIcon key="0" icon={faEye} />, "Zobacz"]),
    ],
    [R.T, R.always([undefined, "Rozpocznij"])],
  ])();

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
          <Button as="a" beforeIcon={buttonIcon} showShadow>
            {buttonText}
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default QuizLink;
