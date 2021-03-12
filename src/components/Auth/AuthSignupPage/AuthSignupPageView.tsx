import React from "react";
import { Title } from "@shared/Typography";
import { Divider } from "@shared/Common";
import Button from "@shared/Button";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { apiPaths, paths } from "@constants";
import Alert from "@shared/Alert";
import { Container, Header } from "./AuthSignupPageStyle";
import Form from "./Form";

library.add(faFacebookF);

const AuthSignupPage: React.FC = () => (
  <Container>
    <Header>
      <Title>Czas tworzyć.</Title>
    </Header>
    <Divider />
    <Link href={apiPaths.facebook.auth} passHref>
      <Button
        background="facebook"
        beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
        pulsating
      >
        Zarejestruj przez Facebooka
      </Button>
    </Link>
    <Alert type="info">
      <span>
        Szanujemy Twoją prywatność. Dane o Twoich wynikach w quizach nie są, nie
        były i nigdy nie będą powiązane z utworzonym kontem.
      </span>
      <b>
        Rejestrując się w serwisie akceptujesz&nbsp;
        <Link href={paths.rules}>
          <a target="_blank">nasz Regulamin</a>
        </Link>
        .
      </b>
    </Alert>
    <Divider />
    <Form />
  </Container>
);

export default AuthSignupPage;
