import React from "react";
import HeroSection from "@shared/HeroSection";
import { HeroGridContent } from "./HeroGridStyle";

interface Props {
  children?: JSX.Element;
}

const HeroGridView: React.FC<Props> = ({ children }) => {
  return (
    <HeroSection>
      <HeroGridContent>{children}</HeroGridContent>
    </HeroSection>
  );
};

export default HeroGridView;
