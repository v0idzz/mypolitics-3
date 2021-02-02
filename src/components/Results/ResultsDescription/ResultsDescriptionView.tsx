import React, { useEffect, useState } from "react";
import Button from "@shared/Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Title, Paragraph } from "./ResultsDescriptionStyle";

library.add(faTimes);

const token = `mypolitics-results-description-v1`;

const ResultsDescription: React.FC = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleCloseClick = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(token, new Date().toISOString());
    }
    setShow(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notViewed = !window.localStorage.getItem(token);
      setShow(notViewed);
    }
  }, []);

  if (!show || typeof window === "undefined") {
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
      <Button
        onClick={handleCloseClick}
        beforeIcon={<FontAwesomeIcon icon={faTimes} />}
      >
        Zamknij
      </Button>
    </Container>
  );
};

export default ResultsDescription;
