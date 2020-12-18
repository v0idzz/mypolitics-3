import React from "react";
import { Container, BackgroundImage, Inner, Overlay } from "./HeroSectionStyle";

interface Props {
  children: React.ReactNode;
}

const HeroView: React.FC<Props> = ({ children }) => (
  <Container>
    <BackgroundImage src="/static/images/home-hero.png" />
    <Overlay as="div" />
    <Inner>{children}</Inner>
  </Container>
);

export default HeroView;
