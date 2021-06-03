import React from "react";
import { Container, BackgroundImage, Inner, Overlay } from "./HeroSectionStyle";

const backgroundImage = {
  modern: require("@assets/images/home-hero.png?webp"),
  fallback: require("@assets/images/home-hero.png?resize&sizes[]=320&sizes[]=600&sizes[]=1200&sizes[]=1440"),
};

interface Props {
  children: React.ReactNode;
}

const HeroView: React.FC<Props> = ({ children }) => (
  <Container>
    <BackgroundImage>
      <source srcSet={backgroundImage.modern} type="image/webp" />
      <source srcSet={backgroundImage.fallback.srcSet} type="image/png" />
      <img src={backgroundImage.fallback.src} alt="background" />
    </BackgroundImage>
    <Overlay as="div" />
    <Inner>{children}</Inner>
  </Container>
);

export default HeroView;
