import * as React from "react";
import { initializeApollo } from "@services/apollo";
import DocumentPage from "@shared/DocumentPage";
import { RulesDocumentDocument, RulesDocumentQuery } from "@generated/graphql";
import getT from "next-translate/getT";

export const getServerSideProps = async ({
  locale,
}: {
  locale: string;
}): Promise<any> => {
  const t = await getT(locale, "common");
  const client = initializeApollo();
  const { data } = await client.query<RulesDocumentQuery>({
    query: RulesDocumentDocument,
  });

  return {
    props: {
      document: data.document.rules[locale] || data.document.rules.pl,
      name: t("documents.rules"),
    },
  };
};

export default DocumentPage;
