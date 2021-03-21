import React from "react";
import { Title } from "@shared/Typography";
import Trans from "next-translate/Trans";
import ContactActionSection from "@shared/ContactActionSection";
import { NextSeo } from "next-seo";
import CenteredPage from "@shared/CenteredPage";
import { Content, ContactWrapper } from "./DocumentPageStyle";

interface Props {
  document: string;
  name: string;
}

const DocumentPage: React.FC<Props> = ({ document, name }) => (
  <>
    <NextSeo title={name} titleTemplate="%s | myPolitics" />
    <CenteredPage>
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
    </CenteredPage>
  </>
);

export default DocumentPage;
