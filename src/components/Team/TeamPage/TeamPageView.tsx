import React from "react";
import { DepartmentPartsFragment } from "@generated/graphql";
import { Title } from "@shared/Typography";
import { Member } from "@components/Team";
import {
  Container,
  Divider,
  DeptHeader,
  DeptImage,
  DeptInner,
  DeptWrapper,
} from "./TeamPageStyle";
import useTranslation from "next-translate/useTranslation";

interface Props {
  departments: DepartmentPartsFragment[];
}

const TeamPage: React.FC<Props> = ({ departments }) => {
  const { t } = useTranslation("common");

  return (
    <Container>
      <Title>{t("team.title")}</Title>
      <Divider />
      <Member
        data={{
          id: "founder",
          name: "Adrian Orłów",
          role: "myPolitics Founder",
          image: {
            formats: {
              thumbnail: {
                url:
                  "https://files.mypolitics.pl/mypolitics2/cdnv2-6004d868d4c2291c4d16b54f9b32c2de_d0e3031906.webp",
              },
            },
          },
        }}
      />
      {departments.map(({ id, logo, title, members, leaders }) => (
        <DeptWrapper key={id}>
          <DeptHeader>
            <DeptImage src={logo.url} alt={title} />
          </DeptHeader>
          <DeptInner>
            <div>
              {leaders.map((leader) => (
                <Member key={leader.id} data={leader} />
              ))}
            </div>
            <div>
              {members.map((member) => (
                <Member key={member.id} data={member} showRole={false} />
              ))}
            </div>
          </DeptInner>
        </DeptWrapper>
      ))}
    </Container>
  );
};

export default TeamPage;
