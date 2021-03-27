import React from "react";
import { useCurrentUserQuery, UserRole } from "@generated/graphql";
import Link from "next/link";
import { apiPaths, paths } from "@constants";
import { toast } from "react-hot-toast";
import {
  faCrown,
  faShieldAlt,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import ClientWrapper from "@shared/ClientWrapper";
import { useHandleErrors } from "@utils/hooks/useHandleErrors";
import useTranslation from "next-translate/useTranslation";
import {
  Inner,
  Name,
  Container,
  BadgeWrapper,
  LogoutButton,
} from "./UserInfoStyle";

library.add(faCrown, faShieldAlt, faSignOutAlt, faSignInAlt);

const UserInfo: React.FC = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const handleErrors = useHandleErrors();
  const { data } = useCurrentUserQuery({
    errorPolicy: "all",
    onError: () => null,
  });

  const handleLogout = async () => {
    await fetch(apiPaths.auth.logout, {
      method: "POST",
      credentials: "include",
    })
      .then(async (r) => {
        if (!r.ok) {
          throw new Error(JSON.stringify(await r.json()));
        }

        toast.success(t("userInfo.logoutSuccess"));
        router.reload();
      })
      .catch((e) => {
        handleErrors(JSON.parse(e.message));
      });
  };

  if (!data) {
    return (
      <Container cols={1}>
        <Link href={paths.authLogin} passHref>
          <Inner as="a">
            <span>{t("userInfo.login")}</span>
            <span>
              <FontAwesomeIcon icon={faSignInAlt} />
            </span>
          </Inner>
        </Link>
      </Container>
    );
  }

  const { name, role } = data.me;

  const badge = {
    [UserRole.Admin]: faCrown,
    [UserRole.Moderator]: faShieldAlt,
    [UserRole.Regular]: null,
  }[role];

  return (
    <Container cols={2}>
      <Name>
        <span>{name}</span>
        {badge && (
          <BadgeWrapper>
            <FontAwesomeIcon icon={badge} />
          </BadgeWrapper>
        )}
      </Name>
      <LogoutButton as="button" onClick={handleLogout}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
    </Container>
  );
};

export const UserInfoWrapper: React.FC = () => (
  <ClientWrapper>
    <UserInfo />
  </ClientWrapper>
);

export default UserInfoWrapper;
