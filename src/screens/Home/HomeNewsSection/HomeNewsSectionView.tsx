import React from "react";
import * as R from "ramda";
import Newspaper from "@assets/illustrations/newspaper.svg";
import { Section } from "@components/Home";
import Button from "@shared/Button";
import {
  BasicPostPartsFragment,
  usePostsByFilterQuery,
} from "@generated/graphql";
import { Link } from "@components/News";
import { AdditionalContentWrapper } from "./HomeNewsSectionStyle";

const HomeNewsSection: React.FC = () => {
  const { data } = usePostsByFilterQuery({
    variables: {
      limit: 2,
      sort: "published_at:desc",
    },
  });

  const toPostLink = (post: BasicPostPartsFragment) => (
    <Link key={post.id} data={post} />
  );

  const postsList = R.map(toPostLink, data?.posts || []);

  return (
    <Section
      title="Wiadomości i opinie"
      slogan="dziennikarstwo"
      variant="left"
      illustrationUrl="/static/images/newspaper.png"
      content={
        <>
          <p>
            W świecie gdzie obiektywizm dziennikarski mocno stracił na
            popularności, my stworzyliśmy myPolitics News, które za swój cel
            postawiło właśnie oparcie na nim swojej działalności. Jednocześnie
            poprzez myPolitics View promujemy również spojrzenie ideologiczne,
            dla zrozumienia poglądów całej sceny politycznej.
          </p>
          <Button showShadow>Zobacz więcej</Button>
        </>
      }
      additionalContent={
        <AdditionalContentWrapper>{postsList}</AdditionalContentWrapper>
      }
    />
  );
};

export default HomeNewsSection;
