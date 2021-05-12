import {
  HeroGrid,
  HeroGridCol,
  HeroGridContent,
  HeroGridRow,
} from "@shared/HeroGrid";
import { BasicTalkPartsFragment } from "@generated/graphql";
import { Title } from "@shared/Typography";
import React from "react";
import TalkLink from "@components/Talk/TalkLink";
import useTranslation from "next-translate/useTranslation";

interface Props {
  featuredTalks: BasicTalkPartsFragment[];
}

const TalkHeroView: React.FC<Props> = ({ featuredTalks }) => {
  const { t } = useTranslation("talks");

  return (
    <HeroGrid>
      <HeroGridContent>
        <Title>{t("hero.title")}</Title>
        <HeroGridRow>
          <HeroGridCol>
            <TalkLink data={featuredTalks[0]} />
          </HeroGridCol>
          <HeroGridCol>
            <TalkLink data={featuredTalks[1]} />
            <TalkLink data={featuredTalks[2]} />
          </HeroGridCol>
        </HeroGridRow>
      </HeroGridContent>
    </HeroGrid>
  );
};

export default TalkHeroView;
