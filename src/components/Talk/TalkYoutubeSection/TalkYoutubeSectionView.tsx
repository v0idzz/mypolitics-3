import Link from "next/link";
import Button from "@shared/Button";
import React from "react";
import { Container, Heading } from "./TalkYoutubeSectionStyles";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useTranslation from "next-translate/useTranslation";

const TalkYoutubeSectionView = () => {
  const { t } = useTranslation("talks");

  return (
    <Container>
      <div>
        <Heading>{t("youtube.title")}</Heading>
        <Link href="https://www.youtube.com/myPolitics" passHref>
          <Button
            background="youtube"
            pulsating
            beforeIcon={<FontAwesomeIcon icon={faYoutube} />}
            as="a"
          >
            {t("youtube.button")}
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default TalkYoutubeSectionView;
