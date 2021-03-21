import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { Container, Title, Paragraph } from "./ResultsDescriptionStyle";

const token = `mypolitics-results-description-v1`;

const ResultsDescription: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const { t } = useTranslation("results");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const notViewed = !window.localStorage.getItem(token);
      setShow(notViewed);

      window.localStorage.setItem(token, new Date().toISOString());
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Container>
      <Title>{t("description.title")}</Title>
      <Paragraph>{t("description.axes")}</Paragraph>
      <Paragraph>{t("description.compass")}</Paragraph>
    </Container>
  );
};

export default ResultsDescription;
