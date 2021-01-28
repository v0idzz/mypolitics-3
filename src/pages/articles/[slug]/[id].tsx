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

interface Props {
  post: ExtendedPostPartsFragment;
  morePosts: BasicPostPartsFragment[];
}

const Article: React.FC<Props> = ({ post, morePosts }) => {
  const { lang } = useTranslation("articles");
  const { url } = useCanonicalUrl();
  const title = post.title[lang];
  const slug = post.slug[lang];
  const thumbFormats = post.thumbnail.formats;
  const thumbnail = thumbFormats.medium
    ? thumbFormats.medium
    : thumbFormats.small;
  const description = scrapeDescription(post.content[lang]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState(
        null,
        null,
        `/${lang}${paths.article(slug, post.id)}`
      );
    }
  }, [post.id, lang, slug]);

  return (
    <PageContainer className="container">
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          type: "article",
          article: {
            publishedTime: post.createdAt,
            modifiedTime: post.updatedAt,
            section: post.category,
          },
          images: [
            {
              url: thumbnail.url,
              width: thumbnail.width,
              height: thumbnail.height,
              alt: title,
            },
          ],
        }}
      />
      <ArticleContent post={post} />
      <DisqusComments post={post} />
      <MoreArticlesSection posts={morePosts} />
    </PageContainer>
  );
};

export const getServerSideProps = async ({
  query,
}: NextPageContext): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data: singlePostData } = await client.query<PostByIdQuery>({
    query: PostByIdDocument,
    variables: {
      id: query.id,
    },
  });

  const { data: manyPostData } = await client.query<PostsByFilterQuery>({
    query: PostsByFilterDocument,
    variables: {
      limit: 6,
      sort: "published_at:desc",
    },
  });

  return {
    props: {
      post: singlePostData.post,
      morePosts: manyPostData.posts,
    },
  };
};

export default Article;
