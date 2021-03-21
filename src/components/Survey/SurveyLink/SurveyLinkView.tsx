import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  MeRespondentSurveysDocument,
  useDeleteSurveyMutation,
} from "@generated/graphql";
import { paths } from "@constants";
import Link from "next/link";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { LeanSurvey } from "@components/Survey";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Chips, ListElement, RemoveButton, Text } from "./SurveyLinkStyle";

library.add(faTrash);

const SurveyLink: React.FC<{ survey: LeanSurvey }> = ({ survey }) => {
  const { t } = useTranslation("quiz");
  const { lang } = useTranslation();
  const [remove] = useDeleteSurveyMutation({
    variables: { id: survey.id },
    refetchQueries: [
      {
        query: MeRespondentSurveysDocument,
      },
    ],
  });
  const [removeClicked, setRemoveClicked] = useState<boolean>(false);
  const href = survey.finished
    ? paths.results(survey.id)
    : paths.survey(survey.id);

  const handleRemoveClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!removeClicked) {
      setRemoveClicked(true);
      setTimeout(() => setRemoveClicked(false), 1000);
      return;
    }

    await remove();
  };

  return (
    <Link href={href} passHref>
      <ListElement>
        <Text>
          {dayjs(survey.updatedAt).locale(lang).format("YYYY-MM-DD HH:MM")}
        </Text>
        {survey.finished && (
          <Chips background="green">{t("surveyHistory.type.finished")}</Chips>
        )}
        {!survey.finished && (
          <Chips background="yellow">
            {t("surveyHistory.type.notFinishedYet")}
          </Chips>
        )}
        <RemoveButton clicked={removeClicked} onClick={handleRemoveClick}>
          <FontAwesomeIcon icon={faTrash} />
        </RemoveButton>
      </ListElement>
    </Link>
  );
};

export default SurveyLink;
