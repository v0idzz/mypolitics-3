import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor, useEditor } from '@components/Editor/utils/useEditor';
import PartyItem from "./PartyItem";
import IdeologyItem from "./IdeologyItem";
import {
  Wrapper,
  Title,
  Container,
  Header,
  HeaderInfo,
  ListContainer,
  ListDivider,
  ListInner,
  ListTitle,
} from "./EditorToolboxStyle";

library.add(faToolbox, faExclamationTriangle);

interface Props {
  editor: UseEditor;
}

const EditorToolboxView: React.FC<Props> = ({ editor }) => {
  const { versionInput } = editor;
  const { parties, traits } = versionInput;
  const ideologies = versionInput.ideologies.filter(
    (id) => !traits.includes(id)
  );

  return (
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
        <ListContainer>
          <ListTitle>Partie</ListTitle>
          <ListDivider />
          <ListInner>
            {parties.map((id) => (
              <PartyItem key={id} id={id} />
            ))}
          </ListInner>
        </ListContainer>
        <ListContainer>
          <ListTitle>Ideologie</ListTitle>
          <ListDivider />
          <ListInner>
            {ideologies.map((id) => (
              <IdeologyItem key={id} id={id} />
            ))}
          </ListInner>
        </ListContainer>
        <ListContainer>
          <ListTitle>Cechy</ListTitle>
          <ListDivider />
          <ListInner>
            {traits.map((id) => (
              <IdeologyItem key={id} id={id} />
            ))}
          </ListInner>
        </ListContainer>
      </Container>
    </Wrapper>
  );
};

export default EditorToolboxView;
