import React, { useEffect, useState } from "react";
import { Container, Title, Paragraph } from "./ResultsDescriptionStyle";

const token = `mypolitics-results-description-v1`;

const ResultsDescription: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notViewed = !window.localStorage.getItem(token);
      setShow(notViewed);

      window.localStorage.setItem(token, new Date().toISOString());
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Container>
      <Title>Co oznaczają te wyniki?</Title>
      <Paragraph>
        Osie ideologiczne określają poglądy w odpowiednich sferach, zestawiając
        ze sobą poparcie użytkownika dla przeciwnych sobie idei. Kliknij na
        ikonę, aby dowiedzieć się co ona oznacza.
      </Paragraph>
      <Paragraph>
        Kompas polityczny prezentuje graficznie położenie użytkownika na dwu-
        lub trzyosiowej przestrzeni politycznej. Położenie w każdej osi wykresu
        odpowiada wartościom w osiach ideologicznych z wagami.
      </Paragraph>
    </Container>
  );
};

export default ResultsDescription;
