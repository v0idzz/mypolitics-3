import {
  EditorQuizQueryHookResult,
  useEditorQuizQuery,
} from "@generated/graphql";
import { useRouter } from "next/router";

const useEditorData = (): EditorQuizQueryHookResult => {
  const { query } = useRouter();
  return useEditorQuizQuery({
    variables: {
      slug: `${query.slug}`,
    },
  });
};

export default useEditorData;
