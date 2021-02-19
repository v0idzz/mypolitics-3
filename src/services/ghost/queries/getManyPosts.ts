import { ghost } from "@services/ghost/connect";
import { Params, PostsOrPages } from "@tryghost/content-api";

const defaultOptions: Params = {
  fields: ["id", "title", "slug", "feature_image"],
  include: "tags",
  order: "published_at ASC",
};

export const getManyPosts = async (
  options: Params
): Promise<void | PostsOrPages> =>
  ghost.posts.browse({ ...defaultOptions, ...options }).catch((err) => {
    console.error(err);
  });
