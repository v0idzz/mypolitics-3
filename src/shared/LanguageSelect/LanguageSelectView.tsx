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

  const toLanguageLinks = ({ id, name }: Language) => {
    const languageSelected = id === lang;

    if (languageSelected) {
      return (
        <LanguageImage
          onClick={toggleShowFull}
          key={id}
          title={name}
          /* eslint-disable-next-line import/no-dynamic-require */
          image={require(`@assets/images/langs/${id}.png`)}
          as="button"
        />
      );
    }

    return (
      <Link href={router.asPath} locale={id} key={id} passHref={id !== lang}>
        <LanguageImage
          onClick={toggleShowFull}
          key={id}
          title={name}
          /* eslint-disable-next-line import/no-dynamic-require */
          image={require(`@assets/images/langs/${id}.png`)}
        />
      </Link>
    );
  };

  const languagesSelectedFirst = languages.sort((x, y) => {
    if (x.id === lang) {
      return -1;
    }

    return y.id === lang ? 1 : 0;
  });

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
