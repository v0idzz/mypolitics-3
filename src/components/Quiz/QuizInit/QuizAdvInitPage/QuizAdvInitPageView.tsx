import React, { useState } from "react";
import { NextSeo } from "next-seo";
import { IdeologyInput, InitStep } from "@components/Quiz";
import CenteredPage from "@shared/CenteredPage";
import {
  UpdateRespondentInput,
  useUpdateRespondentMutation,
} from "@generated/graphql";
import Button from "@shared/Button";
import { paths, titleTemplate } from '@constants';
import Link from "next/link";
import * as R from "ramda";
import { useRouter } from "next/router";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import GoogleAd from "@shared/GoogleAd";
import { useFirstTimer } from "@utils/hooks/useFirstTimer";
import Compass from "@shared/Compass";
import {
  TopText,
  Content,
  FormWrapper,
  FormContainer,
  ActionsWrapper,
} from "./QuizAdvInitPageStyle";
import { defaultData } from "./QuizAdvInitPageUtils";
import useTranslation from "next-translate/useTranslation";

const QuizPreInitPage: React.FC = () => {
    const router = useRouter();
    const {t} = useTranslation('quiz');
  const { setValue: setFirstTimer } = useFirstTimer();
  const handleErrors = useHandleErrors();
  const [updateRespondent, { loading }] = useUpdateRespondentMutation();
  const [data, setData] = useState<UpdateRespondentInput>(defaultData);
  const dataChanged = R.not(R.equals(data, defaultData));

  const handleIdeologyChange = (ideology) =>
    setData({
      ...data,
      details: {
        ...data.details,
        ideology,
      },
    });

  const handleCompassChange = (compassPoint) =>
    setData({
      ...data,
      details: {
        ...data.details,
        compassPoint,
      },
    });

  const handleSave = async () => {
    try {
      setFirstTimer(false);
      await updateRespondent({
        variables: {
          values: data,
        },
      });

      await router.push(paths.quizzes);
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <CenteredPage fullWidth={false}>
      <NextSeo title={t('init.advanced')} titleTemplate={titleTemplate} />
      <GoogleAd id="myp3-standard-top" />
      <InitStep title={t('init.advanced')}>
        <Content>
          <TopText>
            {t('init.top')}
          </TopText>
          <FormWrapper>
            <FormContainer>
              <IdeologyInput
                value={data.details.ideology}
                onChange={handleIdeologyChange}
              />
              <Compass
                value={data.details.compassPoint}
                onChange={handleCompassChange}
              />
            </FormContainer>
          </FormWrapper>
          <ActionsWrapper>
            <Link href={paths.quizzes} passHref>
              <Button as="a" background="gray">
                {t('init.skip')}
              </Button>
            </Link>
            {dataChanged && (
              <Button onClick={handleSave} disabled={loading} showShadow>
                {t('init.save')}
              </Button>
            )}
          </ActionsWrapper>
        </Content>
      </InitStep>
      <GoogleAd id="myp3-standard-bottom" />
    </CenteredPage>
  );
};

export default QuizPreInitPage;
