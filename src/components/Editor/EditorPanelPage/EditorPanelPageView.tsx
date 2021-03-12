import React from "react";
import StandardPage from "@shared/StandardPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilRuler,
  faPlus,
  faPollH,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import GoogleAd from "@shared/GoogleAd";
import ShareSocial from "@shared/ShareSocial";
import QuizzesSection from "@components/Quiz/QuizzesSection";
import {
  CurrentUserQuizzesDocument,
  useCreateQuizMutation,
  useCurrentUserQuizzesQuery,
} from '@generated/graphql';
import QuizLink from "@components/Quiz/QuizLink";
import Loading from "@shared/Loading";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { Title, ButtonWrapper } from "./EditorPanelPageStyle";

library.add(faPencilRuler, faPollH, faPlus);

const EditorListPage: React.FC = () => {
  const router = useRouter();
  const { lang } = useTranslation();
  const { data, loading } = useCurrentUserQuizzesQuery();
  const quizzes = data?.currentUserQuizzes || [];
  const [createQuiz, { loading: createQuizLoading }] = useCreateQuizMutation({
    variables: {
      values: {
        title: {
          [lang]: "Mój nowy quiz",
        },
        description: {
          [lang]: "Tu będzie fajny opis",
        },
        logoUrl: "",
      },
    },
    refetchQueries: [{
      query: CurrentUserQuizzesDocument,
    }],
    onCompleted: ({ createQuiz: { slug } }) => {
      router.push(paths.editor(slug));
    },
  });

  return (
    <StandardPage>
      <GoogleAd id="myp3-standard-top" />
      <Title>
        <FontAwesomeIcon icon={faPencilRuler} />
        <span>Panel twórcy</span>
      </Title>
      <QuizzesSection
        icon={<FontAwesomeIcon icon={faPollH} />}
        title="Twoje quizy"
      >
        {loading && <Loading />}
        {quizzes.map((quiz) => (
          <QuizLink key={quiz.id} quiz={quiz} editable showState />
        ))}
        <ButtonWrapper>
          <Button
            background="blue"
            size="large"
            beforeIcon={<FontAwesomeIcon icon={faPlus} />}
            onClick={() => createQuiz()}
            loading={createQuizLoading}
            disabled={createQuizLoading}
            pulsating
          >
            Stwórz nowy
          </Button>
        </ButtonWrapper>
      </QuizzesSection>
      <ShareSocial />
    </StandardPage>
  );
};

export default EditorListPage;
