import React from "react";
import { Hero, Section } from "@components/Home";
import Quiz from "@assets/illustrations/quiz.svg";
import { Container } from "./HomeStyle";
import styled from 'styled-components';

const AdditionalContentImage = styled.img`
  filter: drop-shadow(0px 0px 32px rgba(28, 87, 102, 0.2));
  width: 100%;
  border-radius: 1rem;
  height: auto;
`;

const HomeView: React.FC = () => (
  <Container>
    <Hero />
    <Section
      title="Test poglądów politycznych"
      slogan="najbardziej zaawansowany"
      variant="right"
      icon={Quiz}
      content={
        <p>
          Stworzyliśmy test poglądów politycznych, z którego skorzystało już
          blisko pół miliona Polek i Polaków oraz wiele znanych postaci
          polityki. Na podstawie kilkudziesięciu odpowiedzi dopasowuje od
          poglądy, najbliższą partię czy miejsce na kompasie politycznym.
        </p>
      }
      additionalContent={
        <AdditionalContentImage
          src="/static/images/mypolitics-quiz-results.png"
        />
      }
    />
    sfdaasfdasdf
  </Container>
);

export default HomeView;
