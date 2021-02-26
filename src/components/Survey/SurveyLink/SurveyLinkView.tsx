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
          {dayjs(survey.updatedAt).locale(lang).format("DD.MM.YYYY HH:MM")}
        </Text>
        {survey.finished && <Chips background="green">ukończone</Chips>}
        {!survey.finished && <Chips background="yellow">w trakcie</Chips>}
        <RemoveButton clicked={removeClicked} onClick={handleRemoveClick}>
          <FontAwesomeIcon icon={faTrash} />
        </RemoveButton>
      </ListElement>
    </Link>
  );
};

export default SurveyLink;
