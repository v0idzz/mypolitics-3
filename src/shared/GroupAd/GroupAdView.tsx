import React from "react";
import Button from "@shared/Button";
import Link from "next/link";
import { GroupName } from "./GroupAdTypes";
import { groupsConfig } from "./GroupAdUtils";
import { Container, Logo } from "./GroupAdStyle";

interface Props {
  name: GroupName;
}

const GroupAd: React.FC<Props> = ({ name }) => {
  const { url, backgroundUrl, logoUrl } = groupsConfig[name];

  return (
    <Container backgroundUrl={backgroundUrl}>
      <Logo src={logoUrl} alt={name} />
      <Link href={url} passHref>
        <Button as="a" showShadow>
          Dołącz!
        </Button>
      </Link>
    </Container>
  );
};

export default GroupAd;
