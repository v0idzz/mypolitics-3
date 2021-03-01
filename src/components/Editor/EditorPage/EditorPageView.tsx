import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useVerifyAdminLazyQuery } from "@generated/graphql";
import { useDebounce } from "use-debounce";
import { Headers } from "@constants";
import Loading from "@shared/Loading";
import { Content } from "@components/Editor";
import {
  Container,
  ContentWrapper,
  Header,
  IconWrapper,
  Title,
  Input,
  MobileInfo,
} from "./EditorPageStyle";

library.add(faPencilRuler);

const EditorPage: React.FC = () => {
  const [verify, { data, loading }] = useVerifyAdminLazyQuery();
  const [adminCode, setAdminCode] = useState<string>(
    typeof window === "undefined" ? "" : localStorage.getItem(Headers.ADMIN)
  );
  const [code] = useDebounce(adminCode, 1000, { leading: true });
  const isAdmin = data?.verifyAdmin;

  const handleAdminCodeChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAdminCode(e.target.value);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    localStorage.setItem(Headers.ADMIN, code);
    setTimeout(() => verify(), 100);
  }, [code]);

  return (
    <Container>
      <Header>
        <div>
          <IconWrapper>
            <FontAwesomeIcon icon={faPencilRuler} />
          </IconWrapper>
          <Title>Edytor quizu</Title>
        </div>
        {!isAdmin && (
          <Input
            value={adminCode}
            onChange={handleAdminCodeChange}
            placeholder="Kod admina"
          />
        )}
      </Header>
      {loading && <Loading />}
      {isAdmin && (
        <ContentWrapper>
          <Content />
        </ContentWrapper>
      )}
      {isAdmin && (
        <MobileInfo>
          Edytor quizów jest dostępny tylko w wersji komputerowej.
        </MobileInfo>
      )}
    </Container>
  );
};

export default EditorPage;
