import React from "react";
import * as R from "ramda";
import DefaultLink from "next/link";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import {
  BasicTalkPartsFragment,
  useTalksByFilterQuery,
} from "@generated/graphql";
import { Link } from "@components/Talk";
import useTranslation from "next-translate/useTranslation";
import { AdditionalContentWrapper } from "./HomeTalkSectionStyle";
import { paths } from '@constants';

const HomeTalkSection: React.FC = () => {
  const { t } = useTranslation("home");
  const { data } = useTalksByFilterQuery({
    variables: {
      limit: 2,
      sort: "end:desc",
    },
  });

  const toTalkLink = (talk: BasicTalkPartsFragment) => (
    <Link key={talk.id} data={talk} />
  );

  const talksLinks = R.map(toTalkLink, data?.talks || []);

  return (
    <Section
      title={t("talk.title")}
      slogan={t("talk.slogan")}
      variant="right"
      illustrationUrl={require("@assets/images/debate.png")}
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
      additionalContent={
        <AdditionalContentWrapper>{talksLinks}</AdditionalContentWrapper>
      }
    />
  );
};

export default HomeTalkSection;
