import React from "react";
import { NextSeo } from "next-seo";
import { InitStep } from "@components/Quiz";
import Button from "@shared/Button";
import CenteredPage from "@shared/CenteredPage";
import Link from "next/link";
import { paths, titleTemplate } from '@constants';
import GoogleAd from "@shared/GoogleAd";
import { ButtonChips, Content } from "./QuizInitPageStyle";
import useTranslation from "next-translate/useTranslation";

const QuizInitPage: React.FC = () => {
    const {t} = useTranslation('quiz');

    return (
        <CenteredPage fullWidth={false}>
            <NextSeo title={t('init.basic')} titleTemplate={titleTemplate} />
            <GoogleAd id="myp3-standard-top" />
            <InitStep
                title={t('init.basic')}
                lead={t('init.lead')}
                showDivider
            >
                <Content>
                    <Link href={paths.quiz("mypolitics")} passHref>
                        <Button as="a" size="large" showShadow>
                            {t('init.yes')}
                            <ButtonChips background="gray">{t('init.simplified')}</ButtonChips>
                        </Button>
                    </Link>
                    <Link href={paths.quizzesAdvancedInitialize} passHref>
                        <Button as="a" size="large" background="gray">
                            {t('init.no')}
                            <ButtonChips background="blue">{t('init.advancedVariant')}</ButtonChips>
                        </Button>
                    </Link>
                </Content>
            </InitStep>
            <GoogleAd id="myp3-standard-bottom" />
        </CenteredPage>
    );
}

export default QuizInitPage;
