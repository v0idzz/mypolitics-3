import React, { useState } from "react";
import { Container } from "./ActionButtonStyle";
import { Size, Variant } from "./ActionButtonTypes";
import Tooltip from "@shared/Tooltip";
import useTranslation from "next-translate/useTranslation";

interface Props {
  children: React.ReactNode;
  variant: Variant;
  mustConfirm?: boolean;
  onClick?(e: React.MouseEvent);
  title?: string;
  size?: Size;
  disabled?: boolean;
}

const ActionButton: React.FC<Props> = ({
  children,
  variant,
  mustConfirm = false,
  onClick,
  title,
  disabled,
  size = "regular",
}) => {
  const { t } = useTranslation("editor");
  const [confirm, setConfirm] = useState<boolean>(false);

  const handleClickConfirm = (e: React.MouseEvent) => {
    if (!confirm) {
      setConfirm(true);
      setTimeout(() => setConfirm(false), 2000);
      return;
    }

    onClick(e);
  };

  return (
    <Tooltip
      show={confirm}
      variant="error"
      text={t("misc.clickToConfirmAction")}
    >
      <Container
        onClick={mustConfirm ? handleClickConfirm : onClick}
        confirm={confirm}
        variant={variant}
        title={title}
        size={size}
        disabled={disabled}
      >
        {children}
      </Container>
    </Tooltip>
  );
};

export default ActionButton;
