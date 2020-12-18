import React from "react";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { Container, Title, Inner, Divider, Footer, Category, SubCategory } from "./NewsLinkStyle";
import Link from 'next/link';

interface Props {
  data: BasicPostPartsFragment;
}

const NewsLink: React.FC<Props> = ({ data }) => {
  const { lang } = useTranslation();
  const { id, category, thumbnail } = data;
  const title = data.title[lang] || data.title.pl;
  const slug = data.slug[lang] || data.slug.pl;
  const subcategory = data.subcategory[lang] || data.subcategory.pl;
  const thumbnailUrl = thumbnail.formats.small.url;
  const link = `/article/${id}-${slug}`;

  return (
    <Link href={link}>
      <Container imageUrl={thumbnailUrl}>
        <Inner>
          <Title>{title}</Title>
          <Footer>
            <Category>{category}</Category>
            <Divider>|</Divider>
            <SubCategory>{subcategory}</SubCategory>
          </Footer>
        </Inner>
      </Container>
    </Link>
  );
};

export default NewsLink;
