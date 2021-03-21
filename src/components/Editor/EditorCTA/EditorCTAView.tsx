import React from "react";
import Button from "@shared/Button";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { paths } from "@constants";
import useTranslation from "next-translate/useTranslation";
import { Container } from "./EditorCTAStyle";

library.add(faPencilRuler);

const EditorCta: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <div>
        <b>{t("editorCta.title.0")}</b>&nbsp;{t("editorCta.title.1")}
      </div>
      <Link href={paths.editorPanel} passHref>
        <Button
          as="a"
          beforeIcon={<FontAwesomeIcon icon={faPencilRuler} />}
          pulsating
        >
          {t("editorCta.button")}
        </Button>
      </Link>
    </Container>
  );
};

export default EditorCta;
