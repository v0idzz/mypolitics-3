import React, { useState } from "react";
import { Title } from "@components/Editor/EditorContent/EditorContentStyle";
import { Box } from "@components/Editor";
import { UseEditor } from "@components/Editor/utils/useEditor";
import {
  faCheck,
  faCopy,
  faFlask,
  faTimes,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@shared/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BASE_PATH, paths, recaptchaSiteKey } from "@constants";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import {
  CurrentUserQuizzesDocument,
  useCreateSurveyMutation,
  useRequestQuizVerifyMutation,
} from "@generated/graphql";
import hash from "object-hash";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  RequirementContainer,
  RequirementIcon,
  Info,
  SaveContainer,
} from "./EditorFooterStyle";
import {
  useRequirements,
  Requirement,
  TestedVersion,
} from "./EditorFooterUtils";
import { useChangeTracker } from "@components/Editor/utils/ChangeTrackerContext";

library.add(faCheck, faTimes, faFlask, faCopy, faSave);

interface Props {
  editor: UseEditor;
}

const EditorFooter: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { hasUncommittedChanges, commitChanges, lastSave } = useChangeTracker();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { actions, versionInput, basicInput, data } = editor;
  const [testedVersion, setTestedVersion] = useState<TestedVersion>();
  const [recaptcha, setRecaptcha] = useState<string>();
  const [createSurvey] = useCreateSurveyMutation();
  const { data: requirements } = useRequirements(editor);
  const quizPath = `${BASE_PATH}/quizzes/${data.data.quiz.slug}`;
  const [requestVerify] = useRequestQuizVerifyMutation({
    onCompleted: () => toast.success(t("footer.verifyToast")),
    refetchQueries: [
      {
        query: CurrentUserQuizzesDocument,
      },
    ],
  });

  const toRequirement = ({ name, fulfilled }: Requirement) => (
    <RequirementContainer>
      <RequirementIcon fulfilled={fulfilled}>
        <FontAwesomeIcon icon={fulfilled ? faCheck : faTimes} />
      </RequirementIcon>
      <span>{name}</span>
    </RequirementContainer>
  );
  const requirementsList = requirements.map(toRequirement);
  const requirementsFullfilled = requirements.every((r) => r.fulfilled);
  const baseData = {
    versionInput,
    basicInput,
    questions: data.data.quiz.lastUpdatedVersion.questions,
  };
  const versionTested = hash(baseData) === testedVersion?.hash;

  const handleTest = async () => {
    setLoading(true);

    const quizVersion = await actions.saveVersion(versionInput, true);
    if (quizVersion) {
      try {
        const survey = await createSurvey({
          variables: {
            values: {
              quizVersion,
            },
          },
        });
        const surveyId = survey.data.createSurvey.id;
        const path = paths.survey(surveyId);
        window.open(path, "_blank");

        setTestedVersion({
          hash: hash(baseData),
          versionId: quizVersion,
        });
      } catch (e) {
        console.error(e);
      }
    }

    setLoading(false);
  };

  const handleRequestVerify = async () => {
    setLoading(true);

    try {
      await requestVerify({
        variables: {
          quizVersion: testedVersion.versionId,
          recaptcha,
        },
      });

      setTestedVersion(null);
      setRecaptcha("");
      await router.push(paths.editorVerifyRequested(data.data.quiz.slug));
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
  };

  const handleSaveClick = async () => {
    await commitChanges(false);
  };

  return (
    <Container>
      <div>
        <SaveContainer>
          {hasUncommittedChanges ? (
            <Button
              onClick={handleSaveClick}
              beforeIcon={<FontAwesomeIcon icon={faSave} />}
            >
              {t("footer.saveButton")}
            </Button>
          ) : (
            <>
              {t(
                lastSave.autoSave ? "footer.autoSaved" : "footer.manuallySaved"
              )}
              &nbsp;
              <FontAwesomeIcon icon={faCheck} />
            </>
          )}
        </SaveContainer>
        <Info>
          {t("footer.urlTitle")}&nbsp;
          <span
            onClick={() => {
              navigator.clipboard.writeText(quizPath);

              toast.success(t("footer.urlToast"));
            }}
          >
            {quizPath}&nbsp;
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </Info>
      </div>
      <div>
        {!requirementsFullfilled && (
          <Box header={<Title>{t("footer.requirements.title")}</Title>}>
            {requirementsList}
          </Box>
        )}
        {requirementsFullfilled && !versionTested && (
          <Button
            beforeIcon={<FontAwesomeIcon icon={faFlask} />}
            background="blue"
            onClick={handleTest}
            loading={loading}
            disabled={loading}
            showShadow
            isFullWidth
          >
            {t("footer.testBeforeVerify")}
          </Button>
        )}
        {versionTested && !recaptcha && (
          <ReCAPTCHA onChange={setRecaptcha} sitekey={recaptchaSiteKey} />
        )}
        {versionTested && recaptcha && (
          <Button
            beforeIcon={<FontAwesomeIcon icon={faCheck} />}
            background="bluish"
            onClick={handleRequestVerify}
            loading={loading}
            disabled={loading}
            pulsating
            isFullWidth
          >
            {t("footer.verifyRequest")}
          </Button>
        )}
      </div>
    </Container>
  );
};

export default EditorFooter;
