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
} from "@generated/graphql";
import QuizLink from "@components/Quiz/QuizLink";
import Loading from "@shared/Loading";
import Button from "@shared/Button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { paths } from "@constants";
import { ErrorCode } from "@typeDefs/error";
import { toLanguageEnum } from "@utils/toLanguageEnum";
import { Title, ButtonWrapper } from "./EditorPanelPageStyle";

library.add(faPencilRuler, faPollH, faPlus);

const EditorListPage: React.FC = () => {
  const { t, lang } = useTranslation("editor");
  const router = useRouter();
  const { data, loading } = useCurrentUserQuizzesQuery({
    onError: (error) => {
      const message = error.graphQLErrors[0].message as any;
      const code = message?.statusCode || message?.code;
      const notAuthorized = code === ErrorCode.NOT_AUTHORIZED || code === 401;

      if (notAuthorized) {
        router.push(paths.authLogin);
      }
    },
  });
  const quizzes = data?.currentUserQuizzes || [];
  const [createQuiz, { loading: createQuizLoading }] = useCreateQuizMutation({
    variables: {
      values: {
        title: {
          [lang]: t("panel.defaultQuizValues.title"),
        },
        description: {
          [lang]: t("panel.defaultQuizValues.description"),
        },
        logoUrl: "",
        languages: [toLanguageEnum(lang)],
      },
    },
    refetchQueries: [
      {
        query: CurrentUserQuizzesDocument,
      },
    ],
    onCompleted: ({ createQuiz: { slug } }) => {
      router.push(paths.editor(slug));
    },
  });

  return (
    <StandardPage>
      <GoogleAd id="myp3-standard-top" />
      <Title>
        <FontAwesomeIcon icon={faPencilRuler} />
        <span>{t("panel.title")}</span>
      </Title>
      <QuizzesSection
        icon={<FontAwesomeIcon icon={faPollH} />}
        title={t("panel.section.quizzes.title")}
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
            {t("panel.section.quizzes.createButton")}
          </Button>
        </ButtonWrapper>
      </QuizzesSection>
      <ShareSocial />
    </StandardPage>
  );
};

export default EditorListPage;
