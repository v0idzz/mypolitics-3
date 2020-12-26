import * as React from "react";
import { initializeApollo } from "@services/apollo";
import DocumentPage from "@shared/DocumentPage";
import {
  PrivacyDocumentDocument,
  PrivacyDocumentQuery,
} from "@generated/graphql";
import getT from "next-translate/getT";

export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<any> => {
  const t = await getT(locale, "common");
  const client = initializeApollo();
  const { data } = await client.query<PrivacyDocumentQuery>({
    query: PrivacyDocumentDocument,
  });

  return {
    props: {
      document: data.document.privacy[locale] || data.document.privacy.pl,
      name: t("documents.privacy"),
    },
  };
};

export default DocumentPage;
