import React from "react";
import ContactActionSection from "@shared/ContactActionSection";
import Trans from "next-translate/Trans";
import { PageContainer } from "@shared/Page";
import {
  Hero,
  QuizSection,
  NewsSection,
  PartnersSection,
  TalkSection,
} from "@components/Home";
import { getManyPosts } from "@services/ghost";
import {
  BasicTalkPartsFragment,
  FeaturedQuizzesQuery,
  PatreonQuery,
  StandardPageDocument,
  HomePageQuery, HomePageDocument,
} from '@generated/graphql';
import { initializeApollo } from "@services/apollo";
import ShareSocial from "@shared/ShareSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPollH } from "@fortawesome/free-solid-svg-icons";
import { Link, Section } from "@components/Quiz";
import { library } from "@fortawesome/fontawesome-svg-core";
import { CurrentTalk } from "@components/Talk";
import Patreon from "@shared/Patreon";
import styled from "styled-components";
import { EditorCTA } from "@components/Editor";
import useTranslation from "next-translate/useTranslation";
import { toLanguageEnum } from "@utils/toLanguageEnum";

library.add(faPollH);

interface Props {
  posts: any;
  talks: BasicTalkPartsFragment[];
  partners: HomePageQuery["partner"]["partners"];
  featuredQuizzes: FeaturedQuizzesQuery["featuredQuizzes"];
  patreons: PatreonQuery["patreon"];
}

const InnerSection = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  grid-gap: 2rem;
  max-width: 900px;
  margin: auto;
  padding: 1rem;
`;

const Home: React.FC<Props> = ({
  posts,
  talks,
  partners,
  featuredQuizzes,
  patreons,
}) => {
  const { t } = useTranslation("common");

  return (
    <PageContainer>
      <Hero />
      <CurrentTalk />
      <QuizSection />
      <InnerSection>
        <Section
          title={t("standardPage.section.quizzes.title")}
          icon={<FontAwesomeIcon icon={faPollH} />}
        >
          {featuredQuizzes.map((quiz) => (
            <Link
              featured={quiz.slug === "mypolitics"}
              key={quiz.id}
              quiz={quiz}
              showType
            />
          ))}
        </Section>
        <EditorCTA />
      </InnerSection>
      <NewsSection posts={posts} />
      <TalkSection talks={talks} />
      <PartnersSection partners={partners} />
      <ContactActionSection
        title={
          <Trans
            i18nKey="common:contact.title"
            components={[<React.Fragment key="0" />, <b key="1" />]}
          />
        }
      />
      <InnerSection>
        <Patreon patreons={patreons} />
        <ShareSocial />
      </InnerSection>
    </PageContainer>
  );
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}): Promise<{ props: Props; revalidate: number }> => {
  const client = initializeApollo();

  const postsQuery = getManyPosts({
    limit: 2,
  });

  const homePageQuery = client.query<HomePageQuery>({
    query: HomePageDocument,
    variables: {
      lang: toLanguageEnum(locale),
    },
  });

  const [posts, homePage] = await Promise.all([postsQuery, homePageQuery]);

  return {
    revalidate: 60,
    props: {
      posts: posts || [],
      talks: homePage?.data?.talks || [],
      partners: homePage?.data.partner.partners || [],
      patreons: homePage?.data.patreon,
      featuredQuizzes: [
        ...(homePage?.data.featuredQuizzes || []),
        ...(homePage?.data.socialQuizzes || []),
      ],
    },
  };
};

export default Home;
