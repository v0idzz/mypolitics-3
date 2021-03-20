import React from "react";
import ActionButton from "@shared/ActionButton";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  QuizVoteType,
  useCurrentUserQuery,
  useVoteQuizMutation,
} from "@generated/graphql";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { Container, Value, VoteWrapper } from "./QuizVoteStyle";

library.add(faThumbsUp, faThumbsDown);

interface Props {
  quizId: string;
  value: number;
}

const QuizVote: React.FC<Props> = ({ quizId, value }) => {
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [vote] = useVoteQuizMutation();
  const { data } = useCurrentUserQuery({
    fetchPolicy: "cache-only",
  });
  const positive = value > 0;

  const handleVote = async (type: QuizVoteType) => {
    if (!data) {
      await router.push(paths.authLogin);
      return;
    }

    try {
      await vote({
        variables: {
          id: quizId,
          type,
        },
      });

      router.reload();
    } catch (e) {
      handleErrors(e);
    }
  };

  return (
    <Container>
      <Value positive={positive}>
        <span>Głosy:</span>
        <span>
          {positive && "+"}
          {value}
        </span>
      </Value>
      <VoteWrapper>
        <span>Oceń quiz:</span>
        <ActionButton
          variant="green"
          onClick={() => handleVote(QuizVoteType.For)}
          mustConfirm
        >
          <FontAwesomeIcon icon={faThumbsUp} />
        </ActionButton>
        <ActionButton
          variant="red"
          onClick={() => handleVote(QuizVoteType.Against)}
          mustConfirm
        >
          <FontAwesomeIcon icon={faThumbsDown} />
        </ActionButton>
      </VoteWrapper>
    </Container>
  );
};

export default QuizVote;
