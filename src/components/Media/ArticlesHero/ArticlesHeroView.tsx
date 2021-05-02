import React from "react";
import useTranslation from "next-translate/useTranslation";
import { Title } from "@shared/Typography";
import { Link } from "@components/Media";
import { PostOrPage } from "@tryghost/content-api";
import {
  HeroGrid,
  HeroGridContent,
  HeroGridRow,
  HeroGridCol,
} from "@shared/HeroGrid";

interface Props {
  featuredPosts: PostOrPage[];
}

const ArticlesHero: React.FC<Props> = ({ featuredPosts }) => {
  const { t } = useTranslation("articles");

  return (
    <HeroGrid>
      <HeroGridContent>
        <Title>{t("hero.title")}</Title>
        <HeroGridRow>
          <HeroGridCol>
            <Link data={featuredPosts[0]} large />
          </HeroGridCol>
          <HeroGridCol>
            <Link data={featuredPosts[1]} />
            <Link data={featuredPosts[2]} />
          </HeroGridCol>
        </HeroGridRow>
      </HeroGridContent>
    </HeroGrid>
  );
};

export default ArticlesHero;
