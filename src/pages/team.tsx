import React from "react";
import { initializeApollo } from "@services/apollo";
import {
  DepartmentPartsFragment,
  TeamQuery,
  TeamDocument,
} from "@generated/graphql";
import { Page } from "@components/Team";
import CenteredPage from "@shared/CenteredPage";

interface Props {
  departments: DepartmentPartsFragment[];
}

const Team: React.FC<Props> = ({ departments }) => (
  <CenteredPage>
    <Page departments={departments} />
  </CenteredPage>
);

export const getServerSideProps = async (): Promise<{ props: Props }> => {
  const client = initializeApollo();
  const { data } = await client.query<TeamQuery>({
    query: TeamDocument,
  });

  return {
    props: {
      departments: data?.team.departments || [],
    },
  };
};

export default Team;
