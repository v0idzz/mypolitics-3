import React from "react";
import { NextSeo } from "next-seo";
import { useCategory } from "@components/Media/utils/useCategory";
import { paths } from "@constants";
import { PostOrPage } from "@tryghost/content-api";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";

interface Props {
  post: PostOrPage;
}

const ArticleHead: React.FC<Props> = ({ post }) => {
  const { title, slug, tags, feature_image: featureImage, excerpt } = post;
  const { category } = useCategory(tags);
  const path = paths.article(slug);
  const { url } = useCanonicalUrl(path);

  return (
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
          authors: post.authors.map((a) => a.name),
          tags: post.tags.map((t) => t.name),
        },
        images: [
          {
            url: featureImage,
            alt: title,
          },
        ],
      }}
    />
  );
};

export default ArticleHead;
