import React from "react";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import HeroSection from "@shared/HeroSection";
import Link from "next/link";
import { paths } from "@constants";
import {
  Title,
  Content,
  Illustration,
  SubTitle,
  ButtonsWrapper,
  Wrapper,
} from "./HomeHeroStyle";

const candidateImage = require("@assets/images/candidate.png?resize&sizes[]=320&sizes[]=600");

const HeroView: React.FC = () => {
  const { t } = useTranslation("home");

  const handleCta = () =>
    typeof window !== "undefined" &&
    window.scrollTo({
      top: window.innerHeight / 2,
      behavior: "smooth",
    });

  return (
    <Wrapper>
      <HeroSection>
        <Content>
          <Trans
            i18nKey="home:hero.title"
            components={[<Title key="0" />, <span key="1" />]}
          />
          <SubTitle>{t("hero.subTitle")}</SubTitle>
          <ButtonsWrapper>
            <Link href={paths.quizzesPreInitialize} passHref>
              <Button as="a" showShadow pulsating>
                {t("hero.quizLink")}
              </Button>
            </Link>
            <Button onClick={handleCta} background="black">
              {t("hero.learnMore")}
            </Button>
          </ButtonsWrapper>
        </Content>
        <Illustration>
          <source
            srcSet={require("@assets/images/candidate.png?webp")}
            type="image/webp"
          />
          <source srcSet={candidateImage.srcSet} type="image/png" />
          <img src={candidateImage.src} alt="background" />
        </Illustration>
      </HeroSection>
    </Wrapper>
  );
};

export default HeroView;
