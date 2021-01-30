import React from "react";
import { Container, Inner } from "./CenteredPageStyle";

const CenteredPage: React.FC = ({ children }) => (
  <Container>
    <div className="container">
      <Inner>{children}</Inner>
    </div>
  </Container>
);

export default CenteredPage;
