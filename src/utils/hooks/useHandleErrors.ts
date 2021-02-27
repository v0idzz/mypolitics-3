import { ErrorCode } from "@typeDefs/error";
import { ApolloError } from "@apollo/client";
import { useToasts } from "react-toast-notifications";
import useTranslation from "next-translate/useTranslation";
import { GraphQLError } from "graphql";

interface ErrorMessage {
  code: ErrorCode;
  text: string;
}

type ApolloErrorWithMessage = ApolloError & { message: ErrorMessage };
type GraphQLErrorWithMessage = GraphQLError & { message: ErrorMessage };
type HookFunction = (error: ApolloErrorWithMessage) => void;

export const useHandleErrors = (): HookFunction => {
  const { t } = useTranslation("common");
  const { addToast } = useToasts();

  const handleSingleError = (
    error: ApolloErrorWithMessage | GraphQLErrorWithMessage
  ) => {
    const key = `errorMessages.${error.message.code}`;
    let text = t(key);

    if (text === `common:${key}`) {
      text = t(`errorMessages.default`);
    }

    addToast(text, {
      appearance: "error",
      autoDismiss: true,
    });
  };

  return (error: ApolloErrorWithMessage) => {
    // eslint-disable-next-line no-console
    console.error(error);

    error.graphQLErrors.forEach((err: GraphQLErrorWithMessage) =>
      handleSingleError(err)
    );

    if (error.graphQLErrors.length === 0) {
      handleSingleError(error);
    }
  };
};
