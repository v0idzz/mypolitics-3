import React from "react";
import { Container, Inner } from "./CenteredPageStyle";

interface Props {
  fullWidth?: boolean;
}

const CenteredPage: React.FC<Props> = ({ children, fullWidth = true }) => (
  <Container fullWidth={fullWidth}>
    <div className="container">
      <Inner>{children}</Inner>
    </div>
  </Container>
);

export default CenteredPage;
