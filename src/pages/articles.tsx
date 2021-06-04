import React, { useState } from "react";
import { PageContainer } from "@shared/Page";
import { ArticlesHero, ArticlesListSection } from "@components/Media";
import Trans from "next-translate/Trans";
import ContactActionSection from "@shared/ContactActionSection";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { getManyPosts, getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { CurrentTalk } from "@components/Talk";
import GoogleAd from "@shared/GoogleAd";
import Modal from "@shared/Modal";
import { useTheme } from "styled-components";
import Obfuscate from "react-obfuscate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Button from "@shared/Button";

interface Props {
  languageNotAvailable: boolean;
  posts: {
    featured: PostOrPage[];
    news: PostOrPage[];
    view: PostOrPage[];
  };
}

const Articles: React.FC<Props> = ({ posts, languageNotAvailable }) => {
  const [showModalLang, setShowModalLang] = useState(languageNotAvailable);
  const { t } = useTranslation("articles");
  const theme = useTheme();

  return (
    <PageContainer>
      <NextSeo title={t("SEO.title")} description={t("SEO.description")} />
      <Modal
        show={showModalLang}
        onClose={() => setShowModalLang(false)}
        header={{
          title: "Language not available",
          color: theme.colors.red,
        }}
      >
        <Trans
          i18nKey="articles:contact.title"
          components={[<p key="0" />, <b key="1" />]}
        />
        <Button beforeIcon={<FontAwesomeIcon icon={faEnvelope} />} showShadow>
          <Obfuscate email={t("common:contact.email")} />
        </Button>
      </Modal>
      <ArticlesHero featuredPosts={posts.featured} />
      <div className="container">
        <GoogleAd id="myp3-standard-top" />
      </div>
      <ArticlesListSection posts={posts.news} type="news" />
      <div className="container">
        <GoogleAd id="myp3-standard-top" />
      </div>
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

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}): Promise<{ props: Props; revalidate: number }> => {
  const [viewTag, newsTag] = categoriesConfig.pl;

  const getView = getRandomPosts({
    limit: 6,
    filter: `tag:${viewTag}`,
  });

  const getNewView = getManyPosts({
    limit: 2,
    filter: `tag:${viewTag}`,
  });

  const getNews = getManyPosts({
    limit: 7,
    filter: `tag:${newsTag}`,
  });

  const [newsData, viewData, newViewData] = await Promise.all([
    getNews,
    getView,
    getNewView,
  ]);
  const news = newsData || [];
  const view = viewData || [];
  const featured = [news.shift(), ...(newViewData || [])];

  return {
    revalidate: 60,
    props: {
      languageNotAvailable: locale !== "pl",
      posts: {
        featured,
        news,
        view,
      },
    },
  };
};

export default Articles;
