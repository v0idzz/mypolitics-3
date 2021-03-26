import { ghost } from "@services/ghost/connect";
import { Params, PostOrPage } from "@tryghost/content-api";
import { replaceHttpHttps } from "@services/ghost/utils/replace-http-https";
import { emptyArrayIfUndefined } from "@services/ghost/utils/empty-array-if-undefined";

const defaultOptions: Params = {
  fields: ["id", "title", "slug", "feature_image"],
  include: "tags",
  order: "published_at DESC",
};

export const getManyPosts = async (
  options: Params
): Promise<void | PostOrPage[]> =>
  ghost.posts
    .browse({ ...defaultOptions, ...options })
    .catch((err) => {
      console.error(err);
    })
    .then(emptyArrayIfUndefined)
    .then(replaceHttpHttps);
