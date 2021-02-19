import React from "react";
import { PageContainer } from "@shared/Page";
import { ArticlesHero, ArticlesListSection } from "@components/Media";
import Trans from "next-translate/Trans";
import ContactActionSection from "@shared/ContactActionSection";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";

interface Props {
  posts: {
    featured: PostOrPage[];
    news: PostOrPage[];
    view: PostOrPage[];
  };
}

const Articles: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("articles");

  return (
    <PageContainer>
      <NextSeo title={t("SEO.title")} description={t("SEO.description")} />
      <ArticlesHero featuredPosts={posts.featured} />
      <ArticlesListSection posts={posts.news} type="news" />
      <ArticlesListSection posts={posts.view} type="view" />
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

export const getServerSideProps = async ({
  locale,
}): Promise<{ props: Props }> => {
  const [viewTag, newsTag] = categoriesConfig[locale];

  const getView = getRandomPosts({
    limit: 7,
    filter: `tag:${viewTag}`,
  });

  const getNews = getRandomPosts({
    limit: 8,
    filter: `tag:${newsTag}`,
  });

  const [newsData, viewData] = await Promise.all([getNews, getView]);
  const news = newsData || [];
  const view = viewData || [];
  const featured = [news.pop(), news.pop(), view.pop()];

  return {
    props: {
      posts: {
        featured,
        news,
        view,
      },
    },
  };
};

export default Articles;
