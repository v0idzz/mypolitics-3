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

interface Props {
  global?: boolean;
  value?: string;
  onChange?(value: string): void;
  color?: "grayish" | "bluish";
}

const LanguageSelect: React.FC<Props> = ({
  global = true,
  color = "grayish",
  value,
  onChange,
}) => {
  const router = useRouter();
  const { lang } = useTranslation();
  const [showFull, setShowFull] = useState<boolean>(false);
  const toggleShowFull = () => setShowFull(!showFull);
  const currentLang = global ? lang : value;

  const toLanguageLinks = ({ id, name }: Language) => {
    const languageSelected = id === currentLang;

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      toggleShowFull();

      if (!global) {
        onChange(id);
      }
    };

    if (languageSelected || !global) {
      return (
        <LanguageImage
          onClick={handleClick}
          key={id}
          title={name}
          /* eslint-disable-next-line import/no-dynamic-require */
          image={require(`@assets/images/langs/${id}.png`)}
          as="button"
          type="button"
        />
      );
    }

    return (
      <Link href={router.asPath} locale={id} key={id} passHref={id !== lang}>
        <LanguageImage
          onClick={handleClick}
          key={id}
          title={name}
          /* eslint-disable-next-line import/no-dynamic-require */
          image={require(`@assets/images/langs/${id}.png`)}
        />
      </Link>
    );
  };

  const languagesSelectedFirst = languages.sort((x, y) => {
    if (x.id === currentLang) {
      return -1;
    }

    return y.id === currentLang ? 1 : 0;
  });

  const languageButtons = R.map(toLanguageLinks, languagesSelectedFirst);

  return (
    <Wrapper>
      <Container showFull={showFull} color={color}>
        <Inner>{languageButtons}</Inner>
        <DropdownButton onClick={toggleShowFull} type="button">
          <FontAwesomeIcon icon={showFull ? faAngleUp : faAngleDown} />
        </DropdownButton>
      </Container>
    </Wrapper>
  );
};

const areEqual = (prev: Props, next: Props) => prev.value === next.value;

export default React.memo(LanguageSelect, areEqual);
