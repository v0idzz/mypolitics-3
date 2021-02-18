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
  PartnersDocument,
  TalksByFilterDocument,
  TalksByFilterQuery,
} from "@generated/graphql";
import { initializeApollo } from "@services/apollo";
import ShareSocial from "@shared/ShareSocial";

interface Props {
  posts: any;
  talks: BasicTalkPartsFragment[];
  partners: ComponentPersonPartner[];
}

const Home: React.FC<Props> = ({ posts, talks, partners }) => (
  <PageContainer>
    <Hero />
    <QuizSection />
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
    <div style={{ maxWidth: 850, margin: "auto" }}>
      <ShareSocial />
    </div>
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

  const [posts, talks, partners] = await Promise.all([
    postsQuery,
    talksQuery,
    partnersQuery,
  ]);

  return {
    props: {
      posts: posts || [],
      talks: talks?.data?.talks || [],
      partners: partners?.data.partner.partners || [],
    },
  };
};

export default Home;
