import React, { useEffect } from "react";
import { PageContainer } from "@shared/Page";
import { ArticlesListSection, RandomArticle } from "@components/Media";
import ShareSocial from "@shared/ShareSocial";
import { Link, Section } from "@components/Quiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler, faPollH } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { PostOrPage } from "@tryghost/content-api";
import {
  BasicTalkPartsFragment,
  FeaturedQuizzesQuery,
  PatreonQuery,
} from "@generated/graphql";
import GoogleAd from "@shared/GoogleAd";
import { useInView } from "react-hook-inview";
import { useRouter } from "next/router";
import { CurrentTalk } from "@components/Talk";
import Patreon from "@shared/Patreon";
import { EditorCTA } from "@components/Editor";
import { Content, Inner } from "./StandardPageStyle";

library.add(faPollH, faPencilRuler);

interface Props {
  children: React.ReactNode;
  fullWidth?: boolean;
  articles?: PostOrPage[];
  talks?: BasicTalkPartsFragment[];
  quizzes?: FeaturedQuizzesQuery["featuredQuizzes"];
  patreons?: PatreonQuery["patreon"];
}

const StandardPage: React.FC<Props> = ({
  children,
  fullWidth = false,
  articles = [],
  talks = [],
  quizzes = [],
  patreons,
}) => {
  const { asPath } = useRouter();
  const shortenedArticles = articles.filter((_, k) => k < 3);
  const lastArticles = articles.filter((v) => !shortenedArticles.includes(v));
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) {
      window.history.pushState({}, null, asPath);
    }
  }, [inView]);

  return (
    <PageContainer>
      <div className="container">
        <Inner>
          <Content fullWidth={fullWidth}>{children}</Content>
          {articles.length > 0 && (
            <>
              <ArticlesListSection
                posts={shortenedArticles}
                type="short-news"
              />
              <CurrentTalk />
              <ArticlesListSection talks={talks} type="short-talk" />
            </>
          )}
          <Inner style={{ maxWidth: 850, margin: "auto" }}>
            {quizzes.length > 0 && (
              <>
                <Section
                  title="Testy poglądów politycznych"
                  icon={<FontAwesomeIcon icon={faPollH} />}
                >
                  {quizzes.map((quiz) => (
                    <Link
                      key={quiz.id}
                      quiz={quiz}
                      featured={quiz.slug === "mypolitics"}
                    />
                  ))}
                </Section>
                <EditorCTA />
                <ShareSocial />
              </>
            )}
          </Inner>
          <GoogleAd id="myp3-standard-bottom" />
          <Inner ref={ref}>
            {articles.map((article) => (
              <RandomArticle key={article.id} post={article} />
            ))}
          </Inner>
          {articles.length > 0 && (
            <ArticlesListSection posts={lastArticles} type="short-news" />
          )}
          {patreons && <Patreon patreons={patreons} />}
        </Inner>
      </div>
    </PageContainer>
  );
};

export default StandardPage;
