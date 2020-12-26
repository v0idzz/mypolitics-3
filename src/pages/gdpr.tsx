import * as React from "react";
import { initializeApollo } from "@services/apollo";
import DocumentPage from "@shared/DocumentPage";
import { GdprDocumentDocument, GdprDocumentQuery } from "@generated/graphql";
import getT from "next-translate/getT";

export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<any> => {
  const t = await getT(locale, "common");
  const client = initializeApollo();
  const { data } = await client.query<GdprDocumentQuery>({
    query: GdprDocumentDocument,
  });

  return {
    props: {
      document: data.document.gdpr[locale] || data.document.gdpr.pl,
      name: t("documents.gdpr"),
    },
  };
};

export default DocumentPage;
