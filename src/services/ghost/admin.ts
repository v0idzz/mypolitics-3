import getConfig from "next/config";
import GhostAdminAPI from "@tryghost/admin-api";
import { Nullable, Params, PostOrPage } from "@tryghost/content-api";
import { getSinglePost } from "@services/ghost/queries";

const ghost = () => {
  const { serverRuntimeConfig } = getConfig();
  const adminApiKey = serverRuntimeConfig.CONTENT_ADMIN_API_KEY;

  return new GhostAdminAPI({
    url: "https://editor.mypolitics.pl",
    key: adminApiKey,
    version: "v3",
  });
};

export const getSinglePostAsAdmin = async (
  data: { id: Nullable<string> } | { slug: Nullable<string> },
  options?: Params
): Promise<void | PostOrPage> => getSinglePost(data, options, ghost());
