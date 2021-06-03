import {
  BasicTalkPartsFragment,
  FeaturedQuizzesQuery,
  PatreonQuery,
  StandardPageDocument,
  StandardPageQuery,
} from "@generated/graphql";
import { initializeApollo } from "@services/apollo";
import { getRandomPosts } from "@services/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { categoriesConfig } from "@components/Media/utils/useCategory";
import { NextPageContext } from "next";
import { toLanguageEnum } from "@utils/toLanguageEnum";

type LocaleContext = NextPageContext & { locale: string };

export interface StandardPageProps {
  articles: PostOrPage[];
  talks: BasicTalkPartsFragment[];
  quizzes: FeaturedQuizzesQuery["featuredQuizzes"];
  patreons: PatreonQuery["patreon"];
}

const getData = async ({
  locale,
  query,
}: LocaleContext): Promise<StandardPageProps> => {
  const client = initializeApollo();
  const [viewTag, newsTag] = categoriesConfig[locale];
  const notCurrentFilter = `slug:-['${query?.slug}']`;
  const languageEnum = toLanguageEnum(locale);

  const newsQuery = getRandomPosts({
    limit: 1,
    filter: `tags:${newsTag}+${notCurrentFilter}`,
  });

  const viewQuery = getRandomPosts({
    limit: 2,
    filter: `tags:${viewTag}+${notCurrentFilter}`,
  });

  const randomArticleQuery = getRandomPosts({
    limit: 1,
    filter: `tags:${viewTag}+${notCurrentFilter}`,
    fields: ["id", "title", "slug", "feature_image", "published_at"],
    include: ["tags", "authors"],
  });

  const standardPageQuery = client.query<StandardPageQuery>({
    query: StandardPageDocument,
    variables: {
      lang: languageEnum,
      locale,
    },
  });

  const [news, view, randomArticles, standardPage] = await Promise.all([
    newsQuery,
    viewQuery,
    randomArticleQuery,
    standardPageQuery,
  ]);

  return {
    articles: [...(news || []), ...(view || []), ...(randomArticles || [])],
    talks: standardPage?.data.talks || [],
    patreons: standardPage?.data.patreon,
    quizzes: [
      ...(standardPage?.data.featuredQuizzes || []),
      ...(standardPage?.data.socialQuizzes || []),
    ],
  };
};

let cache: { lastUpdated: Date; props: StandardPageProps };
const CACHE_LIVE = 1000 * 60 * 10; // 10 minutes miliseconds
const isCacheValid = (currentTime) =>
  currentTime.getTime() - (cache.lastUpdated.getTime() - CACHE_LIVE) >
  CACHE_LIVE;

export async function getStandardPageProps(
  context: LocaleContext
): Promise<StandardPageProps> {
  const currentTime = new Date();
  const fetchFromCache = cache && isCacheValid(currentTime);

  if (fetchFromCache) {
    return cache.props;
  }

  const props = await getData(context);
  cache = {
    lastUpdated: currentTime,
    props,
  };

  return props;
}
