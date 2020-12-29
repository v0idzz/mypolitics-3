import React from "react";
import * as R from "ramda";
import { initializeApollo } from "@services/apollo";
import {
  BasicPostPartsFragment,
  PostsByFilterDocument,
  PostsByFilterQuery,
} from "@generated/graphql";
import { PageContainer } from "@shared/Page";
import {
  ArticlesHero,
  ViewArticlesSection,
  NewsArticlesSection,
} from "@components/Media";
import { ApolloQueryResult } from "@apollo/client";
import Trans from "next-translate/Trans";
import ContactActionSection from "@shared/ContactActionSection";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";

interface Props {
  posts: {
    featured: BasicPostPartsFragment[];
    news: BasicPostPartsFragment[];
    view: BasicPostPartsFragment[];
  };
}

const Articles: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("articles");

  return (
    <PageContainer>
      <NextSeo title={t("SEO.title")} description={t("SEO.description")} />
      <ArticlesHero featuredPosts={posts.featured} />
      <NewsArticlesSection posts={posts.news} />
      <ViewArticlesSection posts={posts.view} />
      <ContactActionSection
        title={
          <Trans
            i18nKey="articles:contact.title"
            components={[<React.Fragment key="0" />, <b key="1" />]}
          />
        }
      />
    </PageContainer>
  );
};

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const client = initializeApollo();

  const variables: Record<string, Record<string, any>> = {
    featured: {
      limit: 3,
      sort: "published_at:desc",
    },
    news: {
      sort: "published_at:desc",
      where: {
        category: "news",
      },
    },
    view: {
      sort: "published_at:desc",
      where: {
        category: "view",
      },
    },
  };

  const toQuery = (
    key: string
  ): Promise<ApolloQueryResult<PostsByFilterQuery>> =>
    client.query<PostsByFilterQuery>({
      query: PostsByFilterDocument,
      variables: variables[key],
    });

  const queries: Promise<ApolloQueryResult<PostsByFilterQuery>>[] = R.map(
    toQuery,
    Object.keys(variables)
  );

  const [featured, news, view] = await Promise.all(queries);

  return {
    props: {
      posts: {
        featured: featured.data.posts,
        news: news.data.posts,
        view: view.data.posts,
      },
    },
  };
};

export default Articles;
