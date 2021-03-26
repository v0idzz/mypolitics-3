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
import { getBackgroundImage } from "@components/Quiz/utils/getBackgroundImage";
import { translate } from '@utils/translation';

interface Props {
  quiz: SingleQuizQuery["quiz"];
  standardPageProps: StandardPageProps;
}

const SingleQuizPage: React.FC<Props> = ({ quiz, standardPageProps }) => {
  const { lang } = useTranslation();
  const title = translate(quiz.title, lang);
  const description = translate(quiz.description, lang);
  const image = getBackgroundImage(title);

  return (
    <StandardPage {...standardPageProps}>
      <NextSeo
        title={`Test polityczny ${title}`}
        description={`Sprawdź swoje poglądy polityczne w teście wyborczym ${title}! ${description}`}
        openGraph={{
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
