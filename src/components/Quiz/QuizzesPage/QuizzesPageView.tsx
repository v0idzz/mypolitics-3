import React from "react";
import { Respondent } from "@components/Quiz";
import { PageContainer } from "@shared/Page";
import { Inner } from "./QuizzesPageStyle";

const QuizzesPage: React.FC = () => (
  <PageContainer>
    <div className="container">
      <Inner>
        <Respondent />
      </Inner>
    </div>
  </PageContainer>
);

export default QuizzesPage;
