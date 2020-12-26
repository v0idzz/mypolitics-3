import React from "react";
import ContactActionSection from "@shared/ContactActionSection";
import Trans from "next-translate/Trans";
import { PageContainer } from "@shared/Page";
import {
  Hero,
  QuizSection,
  NewsSection,
  PartnersSection,
  TalkSection,
} from "@components/Home";

const Home: React.FC = () => (
  <PageContainer>
    <Hero />
    <QuizSection />
    <NewsSection />
    <TalkSection />
    <PartnersSection />
    <ContactActionSection
      title={
        <Trans
          i18nKey="common:contact.title"
          components={[<React.Fragment key="0" />, <b key="1" />]}
        />
      }
    />
  </PageContainer>
);

export default Home;
