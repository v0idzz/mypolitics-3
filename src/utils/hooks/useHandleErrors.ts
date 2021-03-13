import { ErrorCode } from "@typeDefs/error";
import { ApolloError } from "@apollo/client";
import { useToasts } from "react-toast-notifications";
import useTranslation from "next-translate/useTranslation";

interface ErrorMessage {
  code: ErrorCode;
  text: string;
}

type MessageInterface = { message: ErrorMessage };
type ApolloErrorWithMessage = Omit<ApolloError, "message"> & MessageInterface;
type HookFunction = (error: ApolloErrorWithMessage | ErrorMessage) => void;

export const useHandleErrors = (): HookFunction => {
  const { t } = useTranslation("common");
  const { addToast } = useToasts();

  const handleSingleError = (error: MessageInterface) => {
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

  return (error?: ApolloErrorWithMessage | ErrorMessage) => {
    console.error(error);

    if ("graphQLErrors" in error) {
      const graphqlErrors: any = error?.graphQLErrors || [];

      if (graphqlErrors.length === 0) {
        handleSingleError(error);
        return;
      }

      graphqlErrors.forEach((err) => handleSingleError(err));
    } else {
      handleSingleError({
        message: error,
      });
    }
  };
};
