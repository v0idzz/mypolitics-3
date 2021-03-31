import { DiscussionEmbed } from "disqus-react";
import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import { PostOrPage } from "@tryghost/content-api";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import { paths } from "@constants";
import { Comments } from "react-facebook";
import { QuizBasicPartsFragment } from "@generated/graphql";
import { Container } from "./CommentsStyle";
import { translate } from "@utils/translation";
import AlertErrorBoundary from "@shared/AlertErrorBoundary";

interface Props {
  post?: PostOrPage;
  quiz?: Pick<QuizBasicPartsFragment, "title" | "slug">;
  type?: "disqus" | "facebook";
}

const DisqusComments: React.FC<Props> = ({ post, quiz, type = "disqus" }) => {
  const disqusShortname = "mypolitics";
  const { lang } = useTranslation();
  const { url } = useCanonicalUrl(
    post ? paths.article(post.slug) : paths.quiz(quiz.slug)
  );

  const disqusConfig = {
    identifier: post ? post.id : quiz.slug,
    title: post ? post.title : translate(quiz.title, lang),
    language: lang,
    url,
  };

  return (
    <AlertErrorBoundary>
      <Container>
        {type === "facebook" && <Comments lang="pl" width="100%" href={url} />}
        {type === "disqus" && (
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </AlertErrorBoundary>
  );
};
export default DisqusComments;
