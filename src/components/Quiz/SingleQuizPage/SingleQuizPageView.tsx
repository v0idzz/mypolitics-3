import React from "react";
import GoogleAd from "@shared/GoogleAd";
import {
  QuizLicense,
  QuizType,
  SingleQuizQuery,
  useCreateSurveyMutation,
} from "@generated/graphql";
import {
  faChartBar,
  faHistory,
  faLandmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";
import Button from "@shared/Button";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import Link from "next/link";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { LicenseLinks } from "@components/Quiz/SingleQuizPage/SingleQuizPageUtils";
import { PoliticiansResults } from "@components/Quiz";
import SurveysHistory from "@components/Survey/SurveysHistory";
import Box from "./SingleQuizPageBox";
import {
  ButtonWrapper,
  Chips,
  Container,
  Description,
  Feature,
  FeaturesList,
  Header,
  Inner,
  Logo,
  MetaWrapper,
  PoliticiansResultsWrapper,
  SurveysHistoryWrapper,
  Title,
} from "./SingleQuizPageStyle";

interface Props {
  quiz: SingleQuizQuery["quiz"];
}

library.add(faStar, faChartBar, faLandmark, faHistory);

const QuizzesPage: React.FC<Props> = ({ quiz }) => {
  const { description, meta, currentVersion } = quiz;
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [createSurvey, { loading }] = useCreateSurveyMutation();
  const quizFeatures = useQuizFeatures(meta.features);
  const { lang } = useTranslation();
  const isClassic = quiz.type === QuizType.Classic;

  const handleStartClick = async () => {
    try {
      const { data } = await createSurvey({
        variables: {
          values: {
            quizVersion: currentVersion.id,
          },
        },
      });

      await router.push(paths.survey(data.createSurvey.id));
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <>
      <GoogleAd id="myp3-standard-top" />
      <Container>
        <Header>
          {quiz.logoUrl && <Logo src={quiz.logoUrl} alt={quiz.title[lang]} />}
          {!quiz.logoUrl && <Title>{quiz.title[lang]}</Title>}
          {!isClassic && (
            <Button onClick={handleStartClick} loading={loading} showShadow>
              Rozpocznij
            </Button>
          )}
        </Header>
        <Inner>
          <Box>
            <Description>{description[lang]}</Description>
          </Box>
          <Box
            header={{
              title: "Funkcje",
              icon: <FontAwesomeIcon icon={faStar} />,
            }}
          >
            <FeaturesList>
              {quizFeatures.map((feature) => (
                <Feature key={feature}>{feature}</Feature>
              ))}
            </FeaturesList>
          </Box>
          <Box
            header={{
              title: "Statystyki",
              icon: <FontAwesomeIcon icon={faChartBar} />,
            }}
          >
            <div>
              <Chips>
                {meta.statistics.surveysNumber.toLocaleString()}&nbsp;
                <span>testów</span>
              </Chips>
            </div>
          </Box>
          <Box
            header={{
              title: "Wyniki znanych osób",
              icon: <FontAwesomeIcon icon={faLandmark} />,
            }}
          >
            <PoliticiansResultsWrapper>
              <PoliticiansResults quizSlug={quiz.slug} onlyContent />
            </PoliticiansResultsWrapper>
          </Box>
          <Box
            header={{
              title: "Historia wyników",
              icon: <FontAwesomeIcon icon={faHistory} />,
            }}
          >
            <SurveysHistoryWrapper>
              <SurveysHistory quizSlug={quiz.slug} onlyContent />
            </SurveysHistoryWrapper>
          </Box>
          <Box>
            <MetaWrapper>
              {meta.authors.length > 0 && (
                <Chips>
                  <span>Twórca:</span>&nbsp;
                  {meta.authors[0].name}
                </Chips>
              )}
              {meta.license !== QuizLicense.Commercial && (
                <Link href={LicenseLinks[meta.license]} passHref>
                  <Chips as="a" target="_blank">
                    <span>Licencja:</span>&nbsp;
                    {meta.license}
                  </Chips>
                </Link>
              )}
            </MetaWrapper>
          </Box>
          {!isClassic && (
            <ButtonWrapper>
              <Button loading={loading} onClick={handleStartClick} showShadow>
                Rozpocznij
              </Button>
            </ButtonWrapper>
          )}
        </Inner>
      </Container>
      <GoogleAd id="myp3-standard-middle" />
    </>
  );
};

export default QuizzesPage;
