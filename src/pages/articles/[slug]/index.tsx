import React from "react";
import { NextPageContext } from "next";
import { ArticleContent, ArticleHead } from "@components/Media";
import { PostOrPage } from "@tryghost/content-api";
import { getSinglePost } from "@services/ghost";
import StandardPage, {
  getStandardPageProps,
  StandardPageProps,
} from "@shared/StandardPage";
import GoogleAd from "@shared/GoogleAd";
import { getSinglePostAsAdmin } from "@services/ghost/admin";

interface Props {
  post: PostOrPage;
  standardPageProps: StandardPageProps;
}

const Article: React.FC<Props> = ({ post, standardPageProps }) => (
  <StandardPage fullWidth {...standardPageProps}>
    <ArticleHead post={post} />
    <GoogleAd id="myp3-standard-top" />
    <ArticleContent post={post} />
    <GoogleAd id="myp3-standard-middle" />
  </StandardPage>
);

export const getServerSideProps = async ({ query }: NextPageContext) => {
  let post = await getSinglePost({
    slug: `${query.slug}`,
  });

  if (!post) {
    post = await getSinglePostAsAdmin({
      slug: `${query.slug}`,
    });

    console.log(post)
  }

  const standardPageProps = await getStandardPageProps();

  return {
    props: {
      post,
      standardPageProps,
    },
  };
};

export default Article;
