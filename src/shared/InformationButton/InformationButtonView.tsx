import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import { Wrapper, Header } from "./InformationButtonStyle";

library.add(faQuestionCircle);

interface Props {
  title: string;
  children: React.ReactNode;
}

const InformationButton: React.FC<Props> = ({ title, children }) => {
  const theme = useTheme();
  const [show, setShow] = useState<boolean>(false);

  const header = {
    title: (
      <Header>
        <FontAwesomeIcon icon={faQuestionCircle} />
        {title}
      </Header>
    ),
    color: theme.colors.textMuted,
  };

  return (
    <>
      <Modal show={show} header={header} onClose={() => setShow(false)}>
        {children}
      </Modal>
      <Wrapper onClick={() => setShow(true)} title={title}>
        <FontAwesomeIcon icon={faQuestionCircle} />
      </Wrapper>
    </>
  );
};

export default InformationButton;
