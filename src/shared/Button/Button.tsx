import React from "react";
import { ButtonProps } from "./ButtonTypes";
import { Container, IconWrapper } from "./ButtonStyle";

const Button: React.FC<ButtonProps> = ({ beforeIcon, children, ...props }) => (
  <Container {...props}>
    {beforeIcon && <IconWrapper>{beforeIcon}</IconWrapper>}
    {children && <span>{children}</span>}
  </Container>
);

Button.defaultProps = {
  size: "middle",
  background: "blue",
  showShadow: false,
};

export default Button;
