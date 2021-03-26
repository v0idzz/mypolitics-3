import React from "react";
import { SinglePage } from "@components/Quiz";
import { initializeApollo } from "@services/apollo";
import { SingleQuizDocument, SingleQuizQuery } from "@generated/graphql";
import { NextPageContext } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import { translate } from "@utils/translation";
import { apiPaths } from "@constants";
import { objToBase64 } from "@utils/toBase64";

interface Props {
  quiz: SingleQuizQuery["quiz"];
  standardPageProps: StandardPageProps;
}

const SingleQuizPage: React.FC<Props> = ({ quiz, standardPageProps }) => {
  const { lang, t } = useTranslation("quiz");
  const rawTitle = translate(quiz.title, lang);
  const title = t("SEO.title", { title: rawTitle });
  const description = t("SEO.description", {
    title: rawTitle,
    description: translate(quiz.description, lang),
  });
  const image = apiPaths.utils.image("quiz", objToBase64({ title: rawTitle }));

  return (
    <StandardPage {...standardPageProps}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          images: [
            {
              height: 600,
              width: 900,
              url: image,
            },
          ],
        }}
      />
      <SinglePage quiz={quiz} />
    </StandardPage>
  );
};

export const getServerSideProps = async ({
  query,
  ...context
}: NextPageContext & { locale: string }): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<SingleQuizQuery>({
    query: SingleQuizDocument,
    variables: {
      slug: query.slug,
    },
  });

  const standardPageProps = await getStandardPageProps({ query, ...context });

  return {
    props: {
      quiz: data.quiz,
      standardPageProps,
    },
  };
};

export default SingleQuizPage;
