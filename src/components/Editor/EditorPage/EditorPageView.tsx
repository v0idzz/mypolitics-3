import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Content } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import { Container, Header, IconWrapper, Title } from "./EditorPageStyle";
import { ChangeTrackerProvider } from "@components/Editor/utils/ChangeTrackerContext";

library.add(faPencilRuler);

const EditorPage: React.FC = () => {
  const { t } = useTranslation("editor");

  return (
    <Container>
      <Header>
        <div>
          <IconWrapper>
            <FontAwesomeIcon icon={faPencilRuler} />
          </IconWrapper>
          <Title>{t("header.title")}</Title>
        </div>
      </Header>
      <div>
        <ChangeTrackerProvider>
          <Content />
        </ChangeTrackerProvider>
      </div>
    </Container>
  );
};

export default EditorPage;
