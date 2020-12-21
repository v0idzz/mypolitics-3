import React, { useState } from "react";
import * as R from "ramda";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  Wrapper,
  Container,
  Inner,
  DropdownButton,
  LanguageImage,
} from "./LanguageSelectStyle";
import { Language, languages } from "./LanguageSelectUtils";

library.add(faAngleDown, faAngleUp);

const LanguageSelect: React.FC = () => {
  const router = useRouter();
  const { lang } = useTranslation();
  const [showFull, setShowFull] = useState<boolean>(false);
  const toggleShowFull = () => setShowFull(!showFull);

  const toLanguageLinks = ({ id, name }: Language) => (
    <Link href={router.pathname} locale={id} key={id}>
      <LanguageImage
        onClick={toggleShowFull}
        key={id}
        title={name}
        image={`/static/images/langs/${id}.png`}
        disabled={id === lang}
      />
    </Link>
  );

  const languagesSelectedFirst = languages.sort((x, y) =>
    x.id === lang ? -1 : (y.id === lang ? 1 : 0)
  );

  const languageButtons = R.map(toLanguageLinks, languagesSelectedFirst);

  return (
    <Wrapper>
      <Container showFull={showFull}>
        <Inner>{languageButtons}</Inner>
        <DropdownButton onClick={toggleShowFull}>
          <FontAwesomeIcon icon={showFull ? faAngleUp : faAngleDown} />
        </DropdownButton>
      </Container>
    </Wrapper>
  );
};

export default LanguageSelect;
