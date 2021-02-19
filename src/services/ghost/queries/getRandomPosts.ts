import { ghost } from "@services/ghost/connect";
import { Params, PostsOrPages } from "@tryghost/content-api";
import { getManyPosts } from "@services/ghost/queries/getManyPosts";

const BASE_LIMIT = 6;

export const getRandomPosts = async (
  options: Params
): Promise<void | PostsOrPages> => {
  const { limit: optLimit } = options;
  const limit = optLimit ? parseInt(`${optLimit}`, 10) : BASE_LIMIT;
  const ids = await ghost.posts.browse({
    fields: ["id"],
    limit: limit * 10,
  });

  const shuffledIds = ids.sort(() => Math.random() - 0.5).map((p) => p.id);
  const idsFiltered = shuffledIds.filter((_, i) => i < limit);
  const defaultOptions = {
    filter: `id:[${idsFiltered.toString()}]`,
  };

  return getManyPosts({
    ...defaultOptions,
    ...options,
  });
};
