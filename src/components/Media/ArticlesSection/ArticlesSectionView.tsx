import React from "react";
import * as R from "ramda";
import { Title, Lead } from "@shared/Typography";
import { BasicPostPartsFragment } from "@generated/graphql";
import { Link } from "@components/Media";
import { Container, Header, Image, Content } from "./ArticlesSectionStyle";

interface Props {
  title: string;
  lead?: string;
  imageSrc: string;
  align?: "left" | "center";
  posts: BasicPostPartsFragment[];
}

const ArticlesSection: React.FC<Props> = ({
  title,
  lead,
  imageSrc,
  posts,
  align = "left",
}) => {
  const toPostLink = (post: BasicPostPartsFragment) => (
    <Link key={post.id} data={post} />
  );

  const postsList = R.map(toPostLink, posts);

  return (
    <Container className="container">
      <Header align={align}>
        <Image src={imageSrc} alt={title} />
        <Title>{title}</Title>
        {lead && <Lead>{lead}</Lead>}
      </Header>
      <Content>{postsList}</Content>
    </Container>
  );
};

export default ArticlesSection;
