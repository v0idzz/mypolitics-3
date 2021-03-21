import React from "react";
import { BasicPostPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { paths } from "@constants";
import { PostOrPage } from "@tryghost/content-api";
import { useCategory } from "@components/Media/utils/useCategory";
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
  data: PostOrPage;
  large?: boolean;
}

const PostLink: React.FC<Props> = ({ data, large = false }) => {
  const { id, tags, title, slug, feature_image: thumbnailUrl } = data;
  const link = paths.article(slug);
  const { category, subCategories } = useCategory(tags);
  const hasSubcategories = subCategories.length > 0;

  return (
    <Link href={link} passHref>
      <Container large={large} imageUrl={thumbnailUrl}>
        <Inner>
          <Title>{title}</Title>
          <Footer>
            {category && (
              <>
                <Category>{category}</Category>
                {hasSubcategories && <Divider>|</Divider>}
              </>
            )}
            <SubCategory>{subCategories.join(", ")}</SubCategory>
          </Footer>
        </Inner>
      </Container>
    </Link>
  );
};

export default PostLink;
