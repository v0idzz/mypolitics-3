import React from "react";
import GoogleAd from "@shared/GoogleAd";
import {
  QuizLicense,
  SingleQuizQuery,
  useCreateSurveyMutation,
} from "@generated/graphql";
import { faChartBar, faStar } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StandardPage from "@shared/StandardPage";
import useTranslation from "next-translate/useTranslation";
import Button from "@shared/Button";
import { useQuizFeatures } from "@components/Quiz/utils/useQuizFeatures";
import Link from "next/link";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { LicenseLinks } from "@components/Quiz/SingleQuizPage/SingleQuizPageUtils";
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
} from "./SingleQuizPageStyle";

interface Props {
  quiz: SingleQuizQuery["quiz"];
}

library.add(faStar, faChartBar);

const QuizzesPage: React.FC<Props> = ({ quiz }) => {
  const { logoUrl, title, description, meta, currentVersion } = quiz;
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [createSurvey, { loading }] = useCreateSurveyMutation();
  const quizFeatures = useQuizFeatures(meta.features);
  const { lang } = useTranslation();

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
    <StandardPage>
      <GoogleAd id="myp3-standard-top" />
      <Container>
        <Header>
          <Logo src={logoUrl} alt={title[lang]} />
          <Button onClick={handleStartClick} loading={loading} showShadow>
            Rozpocznij
          </Button>
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
          <Box>
            <MetaWrapper>
              <Link href={meta.author.url} passHref>
                <Chips as="a" target="_blank">
                  <span>Twórca:</span>&nbsp;
                  {meta.author.name}
                </Chips>
              </Link>
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
          <ButtonWrapper>
            <Button loading={loading} onClick={handleStartClick} showShadow>
              Rozpocznij
            </Button>
          </ButtonWrapper>
        </Inner>
      </Container>
      <GoogleAd id="myp3-standard-middle" />
    </StandardPage>
  );
};

export default QuizzesPage;
