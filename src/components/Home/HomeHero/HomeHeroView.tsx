import React from "react";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import HeroSection from "@shared/HeroSection";
import {
  Title,
  Content,
  Illustration,
  SubTitle,
  ButtonsWrapper,
  Wrapper,
} from "./HomeHeroStyle";

const HeroView: React.FC = () => {
  const { t } = useTranslation("home");

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
            <Button showShadow>{t("hero.quizLink")}</Button>
            <Button background="black">{t("hero.learnMore")}</Button>
          </ButtonsWrapper>
        </Content>
        <Illustration
          src={require("@assets/images/candidate.png")}
          alt="Candidate"
        />
      </HeroSection>
    </Wrapper>
  );
};

export default HeroView;
