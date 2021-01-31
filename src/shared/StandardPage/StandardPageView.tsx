import React from "react";
import { PageContainer } from "@shared/Page";
import { Content, Inner } from "./StandardPageStyle";

interface Props {
  children: React.ReactNode;
}

const StandardPage: React.FC<Props> = ({ children }) => (
  <PageContainer>
    <div className="container">
      <Inner>
        <Content>{children}</Content>
      </Inner>
    </div>
  </PageContainer>
);

export default StandardPage;
