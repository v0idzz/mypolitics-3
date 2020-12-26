import { DiscussionEmbed } from "disqus-react";
import { BasicPostPartsFragment } from "@generated/graphql";
import * as React from "react";
import useTranslation from "next-translate/useTranslation";
import breakpoints from "@theme/breakpoints";

interface Props {
  post: BasicPostPartsFragment;
}

const DisqusComments: React.FC<Props> = ({ post }) => {
  const { lang } = useTranslation();
  const disqusShortname = "mypolitics";
  const disqusConfig = {
    url: `https://mypolitics.pl/${lang}/${post.slug[lang]}/${post.id}`,
    identifier: post.id,
    title: post.title[lang],
    language: lang,
  };
  return (
    <div style={{ maxWidth: breakpoints.lg, margin: "auto", width: "100%" }}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
