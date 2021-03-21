import React from "react";
import StandardPage from "@shared/StandardPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPollH,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import QuizzesSection from "@components/Quiz/QuizzesSection";
import { useVerifyQueueQuizzesQuery } from "@generated/graphql";
import QuizLink from "@components/Quiz/QuizLink";
import Loading from "@shared/Loading";
import { ErrorCode } from "@typeDefs/error";
import { paths } from "@constants";
import { useRouter } from "next/router";
import { Title } from "./EditorModPageStyle";
import useTranslation from 'next-translate/useTranslation';

library.add(faShieldAlt, faPollH, faPlus);

const EditorListPage: React.FC = () => {
  const { t } = useTranslation("editor");
  const router = useRouter();
  const { data, loading } = useVerifyQueueQuizzesQuery({
    onError: (error) => {
      const message = error.graphQLErrors[0].message as any;
      const code = message?.statusCode || message?.code;
      const notAuthorized = code === ErrorCode.NOT_AUTHORIZED || code === 401;

      if (notAuthorized) {
        router.push(paths.authLogin);
      }
    },
  });
  const quizzes = data?.verifyQueueQuizzes || [];

  return (
    <StandardPage>
      <Title>
        <FontAwesomeIcon icon={faShieldAlt} />
        <span>{t("admin.title")}</span>
      </Title>
      <QuizzesSection
        icon={<FontAwesomeIcon icon={faPollH} />}
        title={t("admin.section.verifyRequests")}
      >
        {loading && <Loading />}
        {quizzes.map((quiz) => (
          <QuizLink key={quiz.id} quiz={quiz} canVerify />
        ))}
      </QuizzesSection>
    </StandardPage>
  );
};

export default EditorListPage;
