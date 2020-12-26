import React from "react";
import { Title } from "@shared/Typography";
import Trans from "next-translate/Trans";
import ContactActionSection from "@shared/ContactActionSection";
import Head from "next/head";
import { Container, Content, ContactWrapper, Inner } from "./DocumentPageStyle";

interface Props {
  document: string;
  name: string;
}

const DocumentPage: React.FC<Props> = ({ document, name }) => (
  <Container>
    <Head>
      <title>{name} – myPolitics</title>
    </Head>
    <div className="container">
      <Inner>
        <Title>{name}</Title>
        <Content dangerouslySetInnerHTML={{ __html: document }} />
        <ContactWrapper>
          <ContactActionSection
            title={
              <Trans
                i18nKey="common:contact.title"
                components={[<React.Fragment key="0" />, <b key="1" />]}
              />
            }
          />
        </ContactWrapper>
      </Inner>
    </div>
  </Container>
);

export default DocumentPage;
