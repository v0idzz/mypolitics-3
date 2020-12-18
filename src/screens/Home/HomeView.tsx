import React from "react";
import { Hero } from "@components/Home";
import ContactActionSection from "@shared/ContactActionSection";
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
        <>
          <b>Masz pytania?</b> Zapraszamy do kontaktu!
        </>
      }
    />
  </Container>
);

export default HomeView;
