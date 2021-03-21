import React, { useMemo } from "react";
import {
  Box,
  Question,
  Basic,
  Toolbox,
  Parties,
  Ideologies,
  Axes,
  Traits,
  Compasses,
  Footer,
  AdminFooter,
} from "@components/Editor";
import Loading from "@shared/Loading";
import { useEditor } from "@components/Editor/utils/useEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import Button from "@shared/Button";
import { Divider } from "@shared/Common";
import GoogleAd from "@shared/GoogleAd";
import { IdeologiesImport } from "@components/Editor/EditorIdeologies";
import { PartiesImport } from "@components/Editor/EditorParties";
import { Col, Row, Title } from "./EditorContentStyle";

library.add(faPlus);

const EditorContent: React.FC = () => {
  const { query } = useRouter();
  const editor = useEditor();
  const { data, versionInput, basicInput, actions } = editor;
  const { loading } = data;
  const debug = "debug" in query;
  const verifyVersion = "verifyVersion" in query;
  const dataJson = JSON.stringify({
    data: data.data,
    versionInput,
    basicInput,
  });

  return useMemo(
    () =>
      loading || !versionInput ? (
        <Loading />
      ) : (
        <Col>
          <Box header={<Title>Dane podstawowe</Title>}>
            <Basic editor={editor} />
          </Box>
          <GoogleAd id="myp3-standard-middle" />
          <Box header={<Title>Partie</Title>}>
            <Parties editor={editor} />
            <Divider />
            <PartiesImport editor={editor} />
          </Box>
          <GoogleAd id="myp3-standard-middle" />
          <Box header={<Title>Ideologie</Title>}>
            <Ideologies editor={editor} />
            <Divider />
            <IdeologiesImport editor={editor} />
          </Box>
          <Divider />
          <GoogleAd id="myp3-standard-middle" />
          <Row>
            <Col>
              <Box header={<Title>Osie</Title>}>
                <Axes editor={editor} />
              </Box>
              <Box header={<Title>Cechy</Title>}>
                <Traits editor={editor} />
              </Box>
              {/* <Box */}
              {/*  header={ */}
              {/*    <Title> */}
              {/*      <CompassImage */}
              {/*        src={require("@assets/images/compass_chart.png")} */}
              {/*        alt="Kompas" */}
              {/*      /> */}
              {/*      <span>Kompas</span> */}
              {/*    </Title> */}
              {/*  } */}
              {/* > */}
              {/*  <Compasses editor={editor} /> */}
              {/* </Box> */}
              <Divider />
              {versionInput.questions.map((questionId, index) => (
                <Question
                  key={questionId}
                  questionId={questionId}
                  index={index}
                  editor={editor}
                />
              ))}
              <Button
                onClick={actions.question.add}
                beforeIcon={<FontAwesomeIcon icon={faPlus} />}
                background="bluish"
              >
                Utwórz pytanie
              </Button>
            </Col>
            <Col>
              <Toolbox editor={editor} />
            </Col>
          </Row>
          <Divider />
          {verifyVersion && <AdminFooter />}
          {!verifyVersion && <Footer editor={editor} />}
          {debug && (
            <Box>
              <pre>slug: {data.data.quiz.slug}</pre>
              <pre style={{ overflow: "auto" }}>
                {JSON.stringify(data.data.quiz, null, 2)}
              </pre>
            </Box>
          )}
        </Col>
      ),
    [dataJson]
  );
};

export default EditorContent;
