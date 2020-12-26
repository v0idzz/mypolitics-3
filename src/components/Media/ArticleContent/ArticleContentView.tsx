import React from "react";
import { ExtendedPostPartsFragment } from "@generated/graphql";
import { Title, Lead } from "@shared/Typography";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Header,
  ThumbnailImage,
  Content,
  ShareContent,
  ShareLink,
} from "./ArticleContentStyle";

interface Props {
  post: ExtendedPostPartsFragment;
}

const ArticleContent: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  const { t, lang } = useTranslation("articles");
  const { published_at: publishedAt } = post;
  const title = post.title[lang];
  const content = post.content[lang];
  const url = encodeURI(`https://mypolitics.pl/${lang}${router.asPath}`);
  const titleEncoded = encodeURI(title);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Lead as="div">{new Date(publishedAt).toLocaleDateString()}</Lead>
      </Header>
      <ThumbnailImage src={post.thumbnail.formats.large.url} />
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <ShareContent>
        <Title as="div">{t("share.title")}</Title>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${titleEncoded}`}
          passHref
        >
          <ShareLink target="_blank" type="facebook">
            {t("share.facebook")}
          </ShareLink>
        </Link>
        <Link
          href={`https://twitter.com/share?url=${url}&text=${titleEncoded}&via=myPolitics__&hashtags=myPolitics`}
          passHref
        >
          <ShareLink target="_blank" type="twitter">
            {t("share.twitter")}
          </ShareLink>
        </Link>
      </ShareContent>
    </Container>
  );
};

export default ArticleContent;
