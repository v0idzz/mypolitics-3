import React, { useEffect, useState } from "react";
import * as R from "ramda";
import DefaultLink from "next/link";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import { BasicTalkPartsFragment } from "@generated/graphql";
import useTranslation from "next-translate/useTranslation";
import { paths } from "@constants";
import { Link } from "@components/Talk";
import { useInView } from "react-hook-inview";
import { AdditionalContentWrapper } from "./HomeTalkSectionStyle";

interface Props {
  talks: BasicTalkPartsFragment[];
}

const HomeTalkSection: React.FC<Props> = ({ talks }) => {
  const { t } = useTranslation("home");
  const [ref, inView] = useInView();
  const [show, setShow] = useState(false);

  const toTalkLink = (talk: BasicTalkPartsFragment) => (
    <Link key={talk.id} data={talk} />
  );
  const talksLinks = R.map(toTalkLink, talks);

  useEffect(() => {
    if (!inView) {
      return;
    }

    setShow(true);
  }, [inView]);

  const additionalContent = (
    <AdditionalContentWrapper>{talksLinks}</AdditionalContentWrapper>
  );

  return (
    <div ref={ref}>
      <Section
        title={t("talk.title")}
        slogan={t("talk.slogan")}
        variant="right"
        illustrationUrl={require("@assets/images/debate.png")}
        additionalContent={show ? additionalContent : null}
        content={
          <>
            <p>{t("talk.content.text")}</p>
            <div>
              <DefaultLink href={paths.talks} passHref>
                <Button as="a" showShadow>
                  {t("talk.content.buttonText")}
                </Button>
              </DefaultLink>
            </div>
          </>
        }
      />
    </div>
  );
};

export default HomeTalkSection;
