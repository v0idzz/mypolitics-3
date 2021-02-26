import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Wrapper,
  Title,
  Container,
  Header,
  HeaderInfo,
} from "./EditorToolboxStyle";

library.add(faToolbox, faExclamationTriangle);

const EditorToolboxView: React.FC = () => (
  <Wrapper>
    <Container>
      <Header>
        <Title>
          <FontAwesomeIcon icon={faToolbox} />
          <span>Przybornik</span>
        </Title>
        <HeaderInfo>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>Podnieś i upuść w odpowiednie pole</span>
        </HeaderInfo>
      </Header>
    </Container>
  </Wrapper>
);

export default EditorToolboxView;
