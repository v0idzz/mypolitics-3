import {
  EditorQuizQueryHookResult,
  useEditorQuizQuery,
} from "@generated/graphql";
import { useRouter } from "next/router";
import { ErrorCode } from "@typeDefs/error";
import { paths } from "@constants";

const useEditorData = (): EditorQuizQueryHookResult => {
  const { query, push } = useRouter();
  return useEditorQuizQuery({
    variables: {
      slug: `${query.slug}`,
    },
    onError: (error) => {
      const message = error.graphQLErrors[0].message as any;
      const code = message?.statusCode || message?.code;
      const notAuthorized = code === ErrorCode.NOT_AUTHORIZED || code === 401;

      if (notAuthorized) {
        push(paths.authLogin);
      }
    },
  });
};

export default useEditorData;
