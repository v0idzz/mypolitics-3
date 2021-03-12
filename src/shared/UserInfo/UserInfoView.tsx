import React from "react";
import {
  useCurrentUserQuery,
  useLogoutMeMutation,
  UserRole,
} from "@generated/graphql";
import Link from "next/link";
import { paths } from "@constants";
import { useToasts } from "react-toast-notifications";
import {
  faCrown,
  faShieldAlt,
  faSignOutAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useRouter } from "next/router";
import {
  Inner,
  Name,
  Container,
  BadgeWrapper,
  LogoutButton,
} from "./UserInfoStyle";

library.add(faCrown, faShieldAlt, faSignOutAlt, faSignInAlt);

const UserInfo: React.FC = () => {
  const router = useRouter();
  const { addToast } = useToasts();
  const { data } = useCurrentUserQuery();
  const [logout] = useLogoutMeMutation({
    onError: () =>
      addToast("Wystąpił błąd przy wylogowaniu", { appearance: "error" }),
    onCompleted: () => {
      addToast("Poprawnie wylogowano", { appearance: "success" });
      router.reload();
    },
  });

  if (!data) {
    return (
      <Container cols={1}>
        <Link href={paths.authLogin} passHref>
          <Inner as="a">
            <span>Zaloguj się</span>
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
      <LogoutButton as="button" onClick={() => logout()}>
        <FontAwesomeIcon icon={faSignOutAlt} />
      </LogoutButton>
    </Container>
  );
};

const ClientWrapper = (func) => (typeof window === "undefined" ? null : func);

export default ClientWrapper(UserInfo);
