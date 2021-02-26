import { ghost } from "@services/ghost/connect";
import { Params, PostsOrPages } from "@tryghost/content-api";
import { getManyPosts } from "@services/ghost/queries/getManyPosts";

const BASE_LIMIT = 6;

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export const getRandomPosts = async (
  options: Params
): Promise<void | PostsOrPages> => {
  const { limit: optLimit, filter } = options;
  const limit = optLimit ? parseInt(`${optLimit}`, 10) : BASE_LIMIT;
  const ids = await ghost.posts.browse({
    order: "published_at DESC",
    fields: ["id"],
    limit: limit * 10,
    filter,
  });

  const shuffledIds = shuffle(ids).map((p) => p.id);
  const idsFiltered = shuffledIds.filter((_, i) => i < limit);

  const defaultOptions: Params = {
    filter: `id:[${idsFiltered.toString()}]`,
  };

  return getManyPosts({
    ...defaultOptions,
    ...options,
  }).then(shuffle);
};
