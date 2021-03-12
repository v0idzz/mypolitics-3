import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Content } from "@components/Editor";
import {
  Container,
  ContentWrapper,
  Header,
  IconWrapper,
  Title,
  MobileInfo,
} from "./EditorPageStyle";

library.add(faPencilRuler);

const EditorPage: React.FC = () => (
  <Container>
    <Header>
      <div>
        <IconWrapper>
          <FontAwesomeIcon icon={faPencilRuler} />
        </IconWrapper>
        <Title>Edytor quizu</Title>
      </div>
    </Header>
    <ContentWrapper>
      <Content />
    </ContentWrapper>
    <MobileInfo>
      Edytor quizów jest dostępny tylko w wersji komputerowej.
    </MobileInfo>
  </Container>
);

export default EditorPage;
