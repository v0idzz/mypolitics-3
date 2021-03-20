import React from "react";
import { useRandomContent } from "./RandomContentUtils";
import { RandomContentWrapper } from "./RandomContentStyle";

const RandomContent: React.FC = () => {
  const Content = useRandomContent();

  return (
    <RandomContentWrapper>
      <Content />
    </RandomContentWrapper>
  );
};

export default RandomContent;
