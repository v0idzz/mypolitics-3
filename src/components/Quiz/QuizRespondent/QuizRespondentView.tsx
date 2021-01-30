import React from "react";
import Button from "@shared/Button";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMeRespondentQuery } from "@generated/graphql";
import {
  Container,
  Divider,
  Title,
  Description,
  Info,
  CodeElement,
  CodesWrapper,
  Actions,
} from "./QuizRespondentStyle";

library.add(faPen);

const QuizRespondent: React.FC = () => {
  const { data, loading } = useMeRespondentQuery();

  if (loading || !data) {
    return null;
  }

  const respondent = data.meRespondent;

  return (
    <Container>
      <Info>
        <Title>Kod respondenta</Title>
        <CodesWrapper>
          {respondent.code.map((code) => (
            <CodeElement key={code}>{code}</CodeElement>
          ))}
        </CodesWrapper>
        <Divider />
        <Description>
          Chronimy Twoją prywatność, nie przechowujemy powiązania pomiędzy Tobą,
          a Twoimi poglądami politycznymi. Ten unikalny kod umożliwia ci
          odczytywanie historii wyników na innych urządzeniach.
        </Description>
      </Info>
      <Actions>
        {/*<Button beforeIcon={<FontAwesomeIcon icon={faPen} />} background="gray">*/}
        {/*  Zmień*/}
        {/*</Button>*/}
      </Actions>
    </Container>
  );
};

export default QuizRespondent;
