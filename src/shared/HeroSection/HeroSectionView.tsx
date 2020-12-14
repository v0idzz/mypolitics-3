import React from "react";
import { Container, BackgroundImage, Inner } from "./HeroSectionStyle";

interface Props {
  children: JSX.Element;
}

const HeroView: React.FC<Props> = ({ children }) => (
  <Container>
    <BackgroundImage src="/static/images/home-hero.png" />
    <Inner>{children}</Inner>
  </Container>
);

export default HeroView;
