import React from "react";
import Quiz from "@assets/illustrations/quiz.svg";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import { AdditionalContentImage } from "./HomeQuizSectionStyle";

const HomeQuizSection: React.FC = () => (
  <Section
    title="Test poglądów politycznych"
    slogan="najbardziej zaawansowany"
    variant="right"
    illustrationUrl="/static/images/quiz.png"
    additionalContent={
      <AdditionalContentImage src="/static/images/mypolitics-quiz-results.png" />
    }
    content={
      <>
        <p>
          Stworzyliśmy test poglądów politycznych, z którego skorzystało już
          blisko pół miliona Polek i Polaków oraz wiele znanych postaci
          polityki. Na podstawie kilkudziesięciu odpowiedzi dopasowuje od
          poglądy, najbliższą partię czy miejsce na kompasie politycznym.
        </p>
        <Button showShadow>Sprawdź swoje poglądy!</Button>
      </>
    }
  />
);

export default HomeQuizSection;
