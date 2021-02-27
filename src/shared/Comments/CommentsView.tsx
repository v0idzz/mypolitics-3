import { DiscussionEmbed } from "disqus-react";
import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { PostOrPage } from "@tryghost/content-api";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import { paths } from "@constants";
import { Comments } from "react-facebook";
import { Container } from "./CommentsStyle";

interface Props {
  post: PostOrPage;
  type?: "disqus" | "facebook";
}

const DisqusComments: React.FC<Props> = ({ post, type = "disqus" }) => {
  const { lang } = useTranslation();
  const { id, title } = post;
  const { url } = useCanonicalUrl(paths.article(post.slug, post.id));

  const disqusShortname = "mypolitics";
  const disqusConfig = {
    identifier: id,
    language: lang,
    url,
    title,
  };

  return (
    <Container>
      {type === "facebook" && <Comments lang="pl" width="100%" href={url} />}
      {type === "disqus" && (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      )}
    </Container>
  );
};
export default DisqusComments;
