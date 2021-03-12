import React from "react";
import { Spinner } from "@shared/Loading";
import * as R from "ramda";
import { useTheme } from "styled-components";
import { ButtonProps } from "./ButtonTypes";
import { Container, IconWrapper } from "./ButtonStyle";

const Button: React.FC<ButtonProps> = ({
  beforeIcon,
  children,
  loading,
  background,
  ...props
}) => {
  const theme = useTheme();
  const spinnerColor = R.cond([
    [
      R.includes(R.__, ["black", "blue", "facebook"]),
      R.always(theme.colors.backgroundLighten),
    ],
    [R.includes(R.__, ["bluish"]), R.always(theme.colors.primary)],
    [R.T, R.always(theme.colors.textMuted)],
  ])(background);
  const showIcon = loading || beforeIcon;
  const icon = loading ? <Spinner color={spinnerColor} /> : beforeIcon;

  return (
    <Container {...props} background={background} disabled={loading}>
      {showIcon && <IconWrapper>{icon}</IconWrapper>}
      {children && <span>{children}</span>}
    </Container>
  );
};

Button.defaultProps = {
  size: "middle",
  background: "blue",
  showShadow: false,
};

export default Button;
