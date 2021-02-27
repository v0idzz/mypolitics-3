import React from "react";
import { MemberPartsFragment } from "@generated/graphql";
import {
  Container,
  Inner,
  Content,
  Lead,
  Image,
  Title,
} from "./TeamMemberStyle";

interface Props {
  data: MemberPartsFragment;
  showRole?: boolean;
}

const TeamMember: React.FC<Props> = ({ data, showRole = true }) => (
  <Container>
    <Image src={data.image.formats.thumbnail.url} alt={data.name} />
    <Inner>
      <Content>
        <Title>{data.name}</Title>
        {data.role && showRole && <Lead>{data.role}</Lead>}
      </Content>
    </Inner>
  </Container>
);

export default TeamMember;
