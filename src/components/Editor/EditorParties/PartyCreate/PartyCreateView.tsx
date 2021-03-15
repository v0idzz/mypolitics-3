import React from "react";
import Modal from "@shared/Modal/ModalView";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor } from "@components/Editor/utils/useEditor";
import PartyForm from "../PartyForm";
import { Container } from "./PartyCreateStyle";

library.add(faPlus);

interface Props {
  show: boolean;
  onClose(): void;
  editor: UseEditor;
}

const PartyCreate: React.FC<Props> = ({ onClose, show, editor }) => {
  const { actions } = editor;
  const theme = useTheme();

  const modalHeader = {
    title: (
      <>
        <FontAwesomeIcon style={{ marginRight: "0.5rem" }} icon={faPlus} />
        Utwórz partię
      </>
    ),
    color: theme.colors.primaryDarken,
  };

  const handleSubmit = async (values) => {
    await actions.parties.add(values);
    onClose();
  };

  return (
    <Modal header={modalHeader} show={show} onClose={onClose}>
      <Container>
        <PartyForm
          onSubmit={handleSubmit}
          button={{
            text: "Utwórz",
            icon: <FontAwesomeIcon icon={faPlus} />,
          }}
        />
      </Container>
    </Modal>
  );
};

export default PartyCreate;
