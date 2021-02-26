import React from "react";
import { Box, Question, Basic, Toolbox } from "@components/Editor";
import Loading from "@shared/Loading";
import { useEditor } from "@components/Editor/utils/useEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import Button from "@shared/Button";
import { Col, Row, CreateButton, Title, Divider } from "./EditorContentStyle";

library.add(faPlus);

const EditorContent: React.FC = () => {
  const { query } = useRouter();
  const { data, versionInput, actions } = useEditor();
  const { loading } = data;
  const debug = "debug" in query;

  if (loading || !versionInput) {
    return <Loading />;
  }

  return (
    <Col>
      <Box header={<Title>Dane podstawowe</Title>}>
        <Basic />
      </Box>
      <Box header={<Title>Partie</Title>}>//</Box>
      <Box header={<Title>Ideologie</Title>}>//</Box>
      <Divider />
      <Row>
        <Col>
          <Box header={<Title>Osie</Title>}>//</Box>
          <Box header={<Title>Cechy</Title>}>//</Box>
          <Box header={<Title>Kompas</Title>}>//</Box>
          <Divider />
          {versionInput.questions.map((questionId, index) => (
            <Question key={questionId} questionId={questionId} index={index} />
          ))}
          <CreateButton onClick={actions.question.add}>
            <FontAwesomeIcon icon={faPlus} />
            <span>Utwórz pytanie</span>
          </CreateButton>
        </Col>
        <Col>
          <Toolbox />
        </Col>
      </Row>
      <Divider />
      <Button onClick={() => actions.saveVersion(versionInput, true)}>
        Zapisz
      </Button>
      {debug && (
        <Box>
          <pre>slug: {data.data.quiz.slug}</pre>
          <pre>{JSON.stringify(data.data.quiz, null, 2)}</pre>
        </Box>
      )}
    </Col>
  );
};

export default EditorContent;
