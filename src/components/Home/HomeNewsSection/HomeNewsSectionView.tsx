import React from "react";
import * as R from "ramda";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import { Link } from "@components/Media";
import useTranslation from "next-translate/useTranslation";
import DefaultLink from "next/dist/client/link";
import { paths } from "@constants";
import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { AdditionalContentWrapper } from "./HomeNewsSectionStyle";

interface Props {
  posts: PostsOrPages;
}

const HomeNewsSection: React.FC<Props> = ({ posts }) => {
  const { t } = useTranslation("home");
  const toPostLink = (post: PostOrPage) => <Link key={post.id} data={post} />;
  const postsList = R.map(toPostLink, posts);

  return (
    <Section
      title={t("news.title")}
      slogan={t("news.slogan")}
      variant="left"
      illustrationUrls={{
        modern: require("@assets/images/newspaper.png?webp"),
        fallback: require("@assets/images/newspaper.png?resize&sizes[]=320&sizes[]=120"),
      }}
      content={
        <>
          <p>{t("news.content.text")}</p>
          <div>
            <DefaultLink href={paths.articles} passHref>
              <Button as="a" showShadow>
                {t("news.content.buttonText")}
              </Button>
            </DefaultLink>
          </div>
        </>
      }
      additionalContent={
        <AdditionalContentWrapper>{postsList}</AdditionalContentWrapper>
      }
    />
  );
};

export default HomeNewsSection;
