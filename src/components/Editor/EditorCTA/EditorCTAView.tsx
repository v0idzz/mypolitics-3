import React from "react";
import Button from "@shared/Button";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { paths } from "@constants";
import { Container } from "./EditorCTAStyle";

library.add(faPencilRuler);

const EditorCta: React.FC = () => (
  <Container>
    <div>
      <b>Słaby quiz?</b>&nbsp;Stwórz lepszy w naszym edytorze!
    </div>
    <Link href={paths.editorPanel} passHref>
      <Button
        as="a"
        beforeIcon={<FontAwesomeIcon icon={faPencilRuler} />}
        pulsating
      >
        Panel twórcy
      </Button>
    </Link>
  </Container>
);

export default EditorCta;
