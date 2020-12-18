import React from "react";
import * as R from "ramda";
import Debate from "@assets/illustrations/debate.svg";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import {
  BasicTalkPartsFragment,
  useTalksByFilterQuery,
} from "@generated/graphql";
import { Link } from "@components/Talk";
import { AdditionalContentWrapper } from "./HomeTalkSectionStyle";

const HomeTalkSection: React.FC = () => {
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
      title="Debaty i wywiady polityczne"
      slogan="najciekawsze"
      variant="right"
      illustrationUrl="/static/images/debate.png"
      content={
        <>
          <p>
            Promujemy aktywizm polityczny poprzez organizację debat i wywiadów z
            udziałem młodzieżówek i dorosłych polityków wszystkich opcji
            politycznych. Nasze transmisje na żywo docierają do kilkuset tysięcy
            polskich odbiorców każdego miesiąca.
          </p>
          <Button showShadow>Zobacz więcej</Button>
        </>
      }
      additionalContent={
        <AdditionalContentWrapper>{talksLinks}</AdditionalContentWrapper>
      }
    />
  );
};

export default HomeTalkSection;
