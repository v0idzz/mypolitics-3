import React from "react";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import {
  Container,
  Title,
  Inner,
  Divider,
  Footer,
  Category,
  SubCategory,
} from "./PostLinkStyle";

interface Props {
  data: BasicPostPartsFragment;
  large?: boolean;
}

const PostLink: React.FC<Props> = ({ data, large = false }) => {
  const { lang } = useTranslation();
  const { id, category, thumbnail } = data;
  const title = data.title[lang] || data.title.pl;
  const slug = data.slug[lang] || data.slug.pl;
  const subcategory = data.subcategory[lang] || data.subcategory.pl;
  const thumbnailUrl = thumbnail.formats[large ? "medium" : "small"].url;
  const link = paths.article(slug, id);

  return (
    <Link href={link} passHref>
      <Container large={large} imageUrl={thumbnailUrl}>
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

export default PostLink;
