import React, { useState } from "react";
import { Container } from "./ActionButtonStyle";
import { Size, Variant } from "./ActionButtonTypes";

interface Props {
  children: React.ReactNode;
  variant: Variant;
  mustConfirm?: boolean;
  onClick?(e: React.MouseEvent);
  title?: string;
  size?: Size;
}

const ActionButton: React.FC<Props> = ({
  children,
  variant,
  mustConfirm = false,
  onClick,
  title,
  size = "regular",
}) => {
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleClickConfirm = (e: React.MouseEvent) => {
    if (!confirm) {
      setConfirm(true);
      setTimeout(() => setConfirm(false), 1000);
      return;
    }

    onClick(e);
  };

  return (
    <Container
      onClick={mustConfirm ? handleClickConfirm : onClick}
      confirm={confirm}
      variant={variant}
      title={title}
      size={size}
    >
      {children}
    </Container>
  );
};

export default ActionButton;
