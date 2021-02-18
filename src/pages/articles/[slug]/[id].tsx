import React, { useEffect } from "react";
import { PageContainer } from "@shared/Page";
import { initializeApollo } from "@services/apollo";
import {
  BasicPostPartsFragment,
  ExtendedPostPartsFragment,
  PostByIdDocument,
  PostByIdQuery,
  PostsByFilterDocument,
  PostsByFilterQuery,
} from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { NextPageContext } from "next";
import { paths } from "@constants";
import { ArticleContent, MoreArticlesSection } from "@components/Media";
import DisqusComments from "@shared/DisqusComments";
import { NextSeo } from "next-seo";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import { scrapeDescription } from "@components/Media/utils/scrape-description";
import { PostOrPage } from "@tryghost/content-api";
import { useCategory } from "@components/Media/utils/useCategory";
import { getSinglePost } from "@services/ghost";
import { useRouter } from "next/router";
import StandardPage, { getStandardPageProps, StandardPageProps } from '@shared/StandardPage';
import GoogleAd from "@shared/GoogleAd";

interface Props {
  post: PostOrPage;
  standardPageProps: StandardPageProps;
}

const Article: React.FC<Props> = ({ post, standardPageProps }) => {
  const router = useRouter();
  const { lang } = useTranslation("articles");
  const { url } = useCanonicalUrl();
  const { id, title, slug, tags, feature_image: featureImage, excerpt } = post;
  const { category } = useCategory(tags);

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.push(
        {
          pathname: router.pathname,
          query: { slug, id },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [post.id, lang, slug]);

  return (
    <StandardPage fullWidth {...standardPageProps}>
      <NextSeo
        title={title}
        description={excerpt}
        openGraph={{
          title,
          description: excerpt,
          url,
          type: "article",
          article: {
            publishedTime: post.created_at,
            modifiedTime: post.updated_at,
            section: category,
          },
          images: [
            {
              url: featureImage,
              alt: title,
            },
          ],
        }}
      />
      <GoogleAd id="myp3-standard-top" />
      <ArticleContent post={post} />
      <GoogleAd id="myp3-standard-middle" />
    </StandardPage>
  );
};

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const post = await getSinglePost({
    id: `${query.id}`,
  });

  const standardPageProps = await getStandardPageProps();

  return {
    props: {
      post,
      standardPageProps,
    },
  };
};

export default Article;
