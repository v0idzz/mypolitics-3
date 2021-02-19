import React, { useEffect } from "react";
import { NextSeo } from "next-seo";
import { useCategory } from "@components/Media/utils/useCategory";
import { paths } from "@constants";
import { PostOrPage } from "@tryghost/content-api";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";

interface Props {
  post: PostOrPage;
  inView?: boolean;
}

const ArticleHead: React.FC<Props> = ({ post, inView = true }) => {
  const { id, title, slug, tags, feature_image: featureImage, excerpt } = post;
  const { category } = useCategory(tags);
  const path = paths.article(slug, id);
  const { url } = useCanonicalUrl(path);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (inView) {
      window.history.pushState({}, title, path);
    }
  }, [id, inView]);

  if (!inView) {
    return null;
  }

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
