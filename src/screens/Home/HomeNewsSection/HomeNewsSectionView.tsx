import React from "react";
import * as R from "ramda";
import Newspaper from "@assets/illustrations/newspaper.svg";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import {
  BasicPostPartsFragment,
  usePostsByFilterQuery,
} from "@generated/graphql";
import { Link } from "@components/News";
import useTranslation from "next-translate/useTranslation";
import { AdditionalContentWrapper } from "./HomeNewsSectionStyle";
import DefaultLink from 'next/dist/client/link';

const HomeNewsSection: React.FC = () => {
  const { t } = useTranslation("home");
  const { data } = usePostsByFilterQuery({
    variables: {
      limit: 2,
      sort: "published_at:desc",
    },
  });

  const toPostLink = (post: BasicPostPartsFragment) => (
    <Link key={post.id} data={post} />
  );

  const postsList = R.map(toPostLink, data?.posts || []);

  return (
    <Section
      title={t("news.title")}
      slogan={t("news.slogan")}
      variant="left"
      illustrationUrl={require("@assets/images/newspaper.png")}
      content={
        <>
          <p>{t("news.content.text")}</p>
          <div>
            <DefaultLink href="/articles">
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
