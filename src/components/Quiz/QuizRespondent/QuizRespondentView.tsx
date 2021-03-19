import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  useMeRespondentQuery,
  useChangeCodeMutation,
} from "@generated/graphql";
import Button from "@shared/Button";
import Modal from "@shared/Modal";
import { Formik } from "formik";
import {
  Container,
  Divider,
  Title,
  Description,
  Info,
  CodeElement,
  CodesWrapper,
  Actions,
  Input,
  InputGroup,
  Form,
} from "./QuizRespondentStyle";

library.add(faPen);

const QuizRespondent: React.FC = () => {
  const { data, loading } = useMeRespondentQuery();
  const [changeCode] = useChangeCodeMutation();
  const [isVisible, setVisible] = React.useState<boolean>(false);

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
        <Button
          onClick={() => setVisible(!isVisible)}
          beforeIcon={<FontAwesomeIcon icon={faPen} />}
          background="gray"
        >
          Zmień
        </Button>
      </Actions>
      <Modal
        header={{
          title: "Zmiana kodu respondenta",
          color: "#00B3DB",
        }}
        show={isVisible}
        children={
          <Formik
            initialValues={{
              first: "",
              second: "",
              third: "",
              fourth: "",
              fifth: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              changeCode({ variables: { code: Object.values(values) } });
              setSubmitting(false);
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <InputGroup>
                  <Input
                    required
                    name="first"
                    value={values.first}
                    onChange={handleChange}
                    placeholder="alpha"
                  />
                  <Input
                    required
                    name="second"
                    value={values.second}
                    onChange={handleChange}
                    placeholder="dog"
                  />
                  <Input
                    required
                    name="third"
                    value={values.third}
                    onChange={handleChange}
                    placeholder="generous"
                  />
                  <Input
                    required
                    name="fourth"
                    value={values.fourth}
                    onChange={handleChange}
                    placeholder="entropy"
                  />
                  <Input
                    required
                    name="fifth"
                    value={values.fifth}
                    onChange={handleChange}
                    placeholder="llama"
                  />
                </InputGroup>
                <Button type="submit" disabled={isSubmitting}>
                  Potwierdź
                </Button>
              </Form>
            )}
          </Formik>
        }
        onClose={() => setVisible(!isVisible)}
      />
    </Container>
  );
};

export default QuizRespondent;
