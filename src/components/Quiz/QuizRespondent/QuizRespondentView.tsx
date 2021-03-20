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
import { changeCodePlaceholder } from "@components/Quiz/QuizRespondent/QuizRespondentUtils";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const { data, loading } = useMeRespondentQuery();
  const [changeCode] = useChangeCodeMutation({
    onCompleted: router.reload,
  });
  const [isVisible, setVisible] = React.useState<boolean>(false);

  const handleCodeChange = async (values, { setSubmitting }) => {
    try {
      await changeCode({ variables: { code: values.code } });
    } catch (e) {
      handleErrors(e);
    }
    setSubmitting(false);
  };

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
        onClose={() => setVisible(!isVisible)}
      >
        <Formik<{ code: string[] }>
          onSubmit={handleCodeChange}
          initialValues={{
            code: [...Array(6)].map(() => ""),
          }}
        >
          {({ values, handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                {values.code.map((value, key) => (
                  <Input
                    key={changeCodePlaceholder[key]}
                    name={`code[${key}]`}
                    value={value}
                    onChange={handleChange}
                    placeholder={changeCodePlaceholder[key]}
                    required
                  />
                ))}
              </InputGroup>
              <Button
                type="submit"
                disabled={isSubmitting}
                loading={isSubmitting}
              >
                Potwierdź
              </Button>
            </Form>
          )}
        </Formik>
      </Modal>
    </Container>
  );
};

export default QuizRespondent;
