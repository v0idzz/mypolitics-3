import React from "react";
import { Title } from "@shared/Typography";
import { Divider } from "@shared/Common";
import Link from "next/link";
import { BASE_PATH, paths } from "@constants";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useToasts } from "react-toast-notifications";
import useTranslation from "next-translate/useTranslation";
import {
  Container,
  Header,
  ActionsWrapper,
  Info,
  InfoDescription,
  UrlWrapper,
  InfoTitle,
} from "./EditorVerifyRequestedStyle";

library.add(faPencilRuler, faCopy);

const EditorVerifyRequested: React.FC = () => {
  const { t } = useTranslation("editor");
  const { addToast } = useToasts();
  const { query } = useRouter();
  const slug = `${query.slug}`;
  const quizPath = `${BASE_PATH}/quizzes/${slug}`;

  return (
    <Container>
      <Header>
        <Title>{t("verifyRequested.title")}</Title>
      </Header>
      <Divider />
      <Info highlighted>
        <InfoTitle>{t("verifyRequested.section.url.title")}</InfoTitle>
        <InfoDescription>
          {t("verifyRequested.section.url.description")}
        </InfoDescription>
        <UrlWrapper>
          <span
            onClick={() => {
              navigator.clipboard.writeText(quizPath);
              addToast(t("verifyRequested.section.url.urlToast"), {
                appearance: "success",
              });
            }}
          >
            {quizPath}&nbsp;
            <FontAwesomeIcon icon={faCopy} />
          </span>
        </UrlWrapper>
      </Info>
      <Info>
        <InfoTitle>{t("verifyRequested.section.meaning.title")}</InfoTitle>
        <InfoDescription>
          {t("verifyRequested.section.meaning.description")}
        </InfoDescription>
      </Info>
      <Info>
        <InfoTitle>{t("verifyRequested.section.edit.title")}</InfoTitle>
        <InfoDescription>
          {t("verifyRequested.section.edit.description")}
        </InfoDescription>
      </Info>
      <Info>
        <InfoTitle>{t("verifyRequested.section.vote.title")}</InfoTitle>
        <InfoDescription>
          {t("verifyRequested.section.vote.description")}
        </InfoDescription>
      </Info>
      <ActionsWrapper>
        <Link href={paths.editor(slug)} passHref>
          <Button as="a" background="gray">
            {t("verifyRequested.footer.returnButton")}
          </Button>
        </Link>
        <Link href={paths.editorPanel} passHref>
          <Button
            as="a"
            beforeIcon={<FontAwesomeIcon icon={faPencilRuler} />}
            showShadow
          >
            {t("verifyRequested.footer.panelButton")}
          </Button>
        </Link>
      </ActionsWrapper>
    </Container>
  );
};

export default EditorVerifyRequested;
