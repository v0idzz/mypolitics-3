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
  ComponentPersonPartner,
  FeaturedQuizzesDocument,
  FeaturedQuizzesQuery,
  PartnersDocument,
  TalksByFilterDocument,
  TalksByFilterQuery,
  PatreonQuery,
  PatreonDocument,
} from "@generated/graphql";
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

library.add(faPollH);

interface Props {
  posts: any;
  talks: BasicTalkPartsFragment[];
  partners: ComponentPersonPartner[];
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
}) => (
  <PageContainer>
    <Hero />
    <CurrentTalk />
    <QuizSection />
    <InnerSection>
      <Section
        title="Testy poglądów politycznych"
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

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const client = initializeApollo();

  const postsQuery = getManyPosts({
    limit: 2,
  });

  const talksQuery = client.query<TalksByFilterQuery>({
    query: TalksByFilterDocument,
    variables: {
      limit: 2,
      sort: "end:desc",
    },
  });

  const partnersQuery = client.query({
    query: PartnersDocument,
  });

  const quizzesQuery = client.query<FeaturedQuizzesQuery>({
    query: FeaturedQuizzesDocument,
  });

  const patreonQuery = client.query<PatreonQuery>({
    query: PatreonDocument,
  });

  const [posts, talks, partners, quizzes, patreons] = await Promise.all([
    postsQuery,
    talksQuery,
    partnersQuery,
    quizzesQuery,
    patreonQuery,
  ]);

  return {
    props: {
      posts: posts || [],
      talks: talks?.data?.talks || [],
      partners: partners?.data.partner.partners || [],
      featuredQuizzes: [
        ...(quizzes?.data.featuredQuizzes || []),
        ...(quizzes?.data.socialQuizzes || []).slice(0, 2),
      ],
      patreons: patreons?.data.patreon,
    },
  };
};

export default Home;
