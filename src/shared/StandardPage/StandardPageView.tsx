import React from "react";
import { PageContainer } from "@shared/Page";
import { ArticlesListSection, RandomArticle } from "@components/Media";
import ShareSocial from "@shared/ShareSocial";
import { Link, Section } from "@components/Quiz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPollH } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { PostOrPage } from "@tryghost/content-api";
import {
  BasicTalkPartsFragment,
  FeaturedQuizzesQuery,
} from "@generated/graphql";
import GoogleAd from "@shared/GoogleAd";
import { Content, Inner } from "./StandardPageStyle";

library.add(faPollH);

interface Props {
  children: React.ReactNode;
  fullWidth?: boolean;
  articles: PostOrPage[];
  talks: BasicTalkPartsFragment[];
  quizzes: FeaturedQuizzesQuery["featuredQuizzes"];
}

const StandardPage: React.FC<Props> = ({
  children,
  fullWidth = false,
  articles,
  talks,
  quizzes,
}) => (
  <PageContainer>
    <div className="container">
      <Inner>
        <Content fullWidth={fullWidth}>{children}</Content>
        <ArticlesListSection posts={articles} type="short-news" />
        <ArticlesListSection talks={talks} type="short-talk" />
        <Inner style={{ maxWidth: 850, margin: "auto" }}>
          {quizzes.length > 0 && (
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
          )}
          <ShareSocial />
        </Inner>
        <GoogleAd id="myp3-standard-bottom" />
        {articles.map((article) => (
          <RandomArticle key={article.id} post={article} />
        ))}
      </Inner>
    </div>
  </PageContainer>
);

export default StandardPage;
