import React from "react";
import { Hero } from "@components/Home";
import ContactActionSection from "@shared/ContactActionSection";
import Trans from "next-translate/Trans";
import HomeQuizSection from "./HomeQuizSection";
import HomeNewsSection from "./HomeNewsSection";
import HomeTalkSection from "./HomeTalkSection";
import HomePartnersSection from "./HomePartnersSection";
import { Container } from "./HomeStyle";

const HomeView: React.FC = () => (
  <Container>
    <Hero />
    <HomeQuizSection />
    <HomeNewsSection />
    <HomeTalkSection />
    <HomePartnersSection />
    <ContactActionSection
      title={
        <Trans
          i18nKey="home:contact.title"
          components={[<React.Fragment key="0" />, <b key="1" />]}
        />
      }
    />
  </Container>
);

export default HomeView;
