import {
  BasicSurveyPartsFragment,
  Question,
  Quiz,
  SingleSurveyDocument,
  SingleSurveyQuery,
  SurveyAnswer,
  useSingleSurveyQuery,
  useUpdateSurveyMutation,
} from "@generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import { useEffect } from "react";
import { ErrorCode } from "@typeDefs/error";
import { useRouter } from "next/router";
import { paths } from "@constants";

export type SlimQuestion = Pick<Question, "id" | "text">;
export type SlimAnswer = Pick<
  SurveyAnswer,
  "type" | "weight" | "__typename"
> & {
  question: Pick<Question, "id">;
};

export interface UseSurveyData {
  currentQuestion?: SlimQuestion;
  questions: SlimQuestion[];
  answers: SlimAnswer[];
  quiz: Pick<Quiz, "logoUrl">;
}

export interface UseSurveyActions {
  deleteSurvey(): void;
  previousQuestion(): void;
  nextQuestion(answer: SlimAnswer): Promise<boolean>;
}

interface UseSurvey {
  data: UseSurveyData;
  actions: UseSurveyActions;
  loading: boolean;
}

const useServerData = (id: string): Omit<UseSurveyData, "currentQuestion"> => {
  const { data: surveyData, loading } = useSingleSurveyQuery({
    variables: { id },
  });

  if (loading) {
    return {
      questions: [],
      answers: [],
      quiz: {
        logoUrl: "",
      },
    };
  }

  const { answers, quizVersion } = surveyData.survey;
  const { quiz, questions } = quizVersion;

  return {
    questions,
    answers,
    quiz,
  };
};

export const useSurvey = (id: string): UseSurvey => {
  const client = useApolloClient();
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const [updateSurvey, { loading }] = useUpdateSurveyMutation();
  const { questions, answers, quiz } = useServerData(id);

  const persist = async (answersData: SlimAnswer[]) => {
    try {
      const finished = answersData.length === questions.length;
      const answersValue = answersData.map(
        ({ __typename, question, ...answer }) => ({
          ...answer,
          question: question.id,
        })
      );

      await updateSurvey({
        variables: {
          id,
          values: {
            answers: answersValue,
            finished,
          },
        },
      });
    } catch (e) {
      handleErrors(e);

      const notAuthorized = e.graphQLErrors.some(
        ({ message }) => message.code === ErrorCode.NOT_AUTHORIZED
      );

      if (notAuthorized) {
        await router.push(paths.quizzes);
      }
    }
  };

  const updateAnswers = (data: BasicSurveyPartsFragment["answers"]) => {
    client.writeQuery<SingleSurveyQuery>({
      query: SingleSurveyDocument,
      variables: {
        id,
      },
      data: {
        survey: {
          __typename: "Survey",
          answers: data,
          quizVersion: {
            questions,
            quiz,
            __typename: "QuizVersion",
          },
        },
      },
    });
  };

  const deleteSurvey = () => updateAnswers([]);

  const nextQuestion = async (answer: SlimAnswer): Promise<boolean> => {
    const newAnswers = [...answers, answer];
    const hasNextQuestion = newAnswers.length !== questions.length;
    updateAnswers(newAnswers);

    if (!hasNextQuestion) {
      await persist(newAnswers);
    }

    return hasNextQuestion;
  };

  const previousQuestion = () => {
    const newAnswers = [...answers];
    newAnswers.pop();
    updateAnswers(newAnswers);
  };

  const currentQuestion = questions && questions[answers.length];

  useEffect(() => {
    if (questions.length > 0) {
      persist(answers);
    }
  }, [answers]);

  return {
    loading,
    actions: {
      deleteSurvey,
      previousQuestion,
      nextQuestion,
    },
    data: {
      currentQuestion,
      questions,
      answers,
      quiz,
    },
  };
};
