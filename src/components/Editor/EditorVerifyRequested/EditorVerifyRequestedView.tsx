import React from "react";
import { Title } from "@shared/Typography";
import { Divider } from "@shared/Common";
import Link from "next/link";
import { BASE_PATH, paths } from "@constants";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useToasts } from "react-toast-notifications";
import {
  Container,
  Header,
  ActionsWrapper,
  Info,
  InfoDescription,
  UrlWrapper,
  InfoTitle,
} from "./EditorVerifyRequestedStyle";

library.add(faPencilRuler, faCopy);

const EditorVerifyRequested: React.FC = () => {
  const { addToast } = useToasts();
  const { query } = useRouter();
  const slug = `${query.slug}`;
  const quizPath = `${BASE_PATH}/quizzes/${slug}`;

  return (
    <Container>
      <Header>
        <Title>Przesłano do weryfikacji!</Title>
      </Header>
      <Divider />
      <Info highlighted>
        <InfoTitle>Indywidualny link do Twojego quizu</InfoTitle>
        <InfoDescription>
          Poprzez ten link można go wykonać przed weryfikacją (również przez
          osoby niezalogowane)
        </InfoDescription>
        <UrlWrapper>
          <span
            onClick={() => {
              navigator.clipboard.writeText(quizPath);
              addToast("Skopiowano do schowka", { appearance: "success" });
            }}
          >
            {quizPath}&nbsp;
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </UrlWrapper>
      </Info>
      <Info>
        <InfoTitle>Co to oznacza?</InfoTitle>
        <InfoDescription>
          Dzięki weryfikacji Twój quiz będzie mógł pojawić się w liście
          wyróżnionej twórczości na stronie głównej :)
        </InfoDescription>
      </Info>
      <Info>
        <InfoTitle>Czy mogę edytować swój quiz?</InfoTitle>
        <InfoDescription>
          Jak najbardziej! Tylko pamiętaj żeby po wprowadzeniu zmian ponownie
          przesłać go do weryfikacji.
        </InfoDescription>
      </Info>
      <Info>
        <InfoTitle>
          Co mogę zrobić żeby mój quiz został szybciej zaakceptowany?
        </InfoTitle>
        <InfoDescription>
          Szybkość weryfikacji zależy od liczby głosów jakie posiada każdy z
          quizów. Prześlij link do niego znajomym i poproś o głos!
        </InfoDescription>
      </Info>
      <ActionsWrapper>
        <Link href={paths.editor(slug)} passHref>
          <Button as="a" background="gray">
            Powrót do edycji
          </Button>
        </Link>
        <Link href={paths.editorPanel} passHref>
          <Button
            as="a"
            beforeIcon={<FontAwesomeIcon icon={faPencilRuler} />}
            showShadow
          >
            Panel twórcy
          </Button>
        </Link>
      </ActionsWrapper>
    </Container>
  );
};

export default EditorVerifyRequested;
