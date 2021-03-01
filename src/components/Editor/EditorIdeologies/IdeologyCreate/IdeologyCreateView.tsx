import React, { useState } from "react";
import Modal from "@shared/Modal/ModalView";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor } from "@components/Editor/utils/useEditor";
import IdeologyForm from "../IdeologyForm";
import { Container } from "./IdeologyCreateStyle";

library.add(faPlus);

interface Props {
  show: boolean;
  onClose(): void;
  editor: UseEditor;
}

const IdeologyCreate: React.FC<Props> = ({ onClose, show, editor }) => {
  const { actions } = editor;
  const theme = useTheme();

  const modalHeader = {
    title: (
      <>
        <FontAwesomeIcon style={{ marginRight: "0.5rem" }} icon={faPlus} />
        Utwórz ideologię
      </>
    ),
    color: theme.colors.primaryDarken,
  };

  const handleSubmit = async (values) => {
    await actions.ideologies.add(values);
    onClose();
  };

  return (
    <Modal header={modalHeader} show={show} onClose={onClose}>
      <Container>
        <IdeologyForm
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

export default IdeologyCreate;
