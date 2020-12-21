import React from "react";
import { Container, BackgroundImage, Inner, Overlay } from "./HeroSectionStyle";

const backgroundImage = require("@assets/images/home-hero.png?resize&sizes[]=600&sizes[]=1200&sizes[]=1440");

interface Props {
  children: React.ReactNode;
}

const HeroView: React.FC<Props> = ({ children }) => (
  <Container>
    <BackgroundImage
      src={backgroundImage.src}
      srcSet={backgroundImage.srcSet}
    />
    <Overlay as="div" />
    <Inner>{children}</Inner>
  </Container>
);

export default HeroView;
