import React from "react";
import { Toggle, Container } from "./ToggleStyle";

interface Props {
  className?: string;
  label: string;
  value: boolean;
  onValueChange(newValue: boolean): void;
}

const ToggleView: React.FC<Props> = ({
  className,
  label,
  value,
  onValueChange,
}) => {
  const handleClick = () => {
    onValueChange(!value);
  };

  return (
    <Container className={className}>
      <Toggle role="switch" aria-checked={value} onClick={handleClick} />
      {label}
    </Container>
  );
};

export default ToggleView;
