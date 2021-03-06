import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UseEditor } from "@components/Editor/utils/useEditor";
import GoogleAd from "@shared/GoogleAd";
import useTranslation from "next-translate/useTranslation";
import PartyItem from "./PartyItem";
import IdeologyItem from "./IdeologyItem";
import {
  Wrapper,
  Title,
  Inner,
  Container,
  Header,
  HeaderInfo,
  ListContainer,
  ListDivider,
  ListInner,
  ListTitle,
} from "./EditorToolboxStyle";

library.add(faToolbox, faExclamationTriangle);

interface Props {
  editor: UseEditor;
}

const EditorToolboxView: React.FC<Props> = ({ editor }) => {
  const { t } = useTranslation("editor");
  const { versionInput } = editor;
  const { parties, traits } = versionInput;
  const ideologies = versionInput.ideologies.filter(
    (id) => !traits.includes(id)
  );

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      ref.current.style.height = "";
      ref.current.style.minHeight = "";
    });

    observer.observe(ref.current, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref}>
      <Container>
        <Inner>
          <Header>
            <Title>
              <FontAwesomeIcon icon={faToolbox} />
              <span>{t("toolbox.title")}</span>
            </Title>
            <HeaderInfo>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <span>{t("toolbox.cta")}</span>
            </HeaderInfo>
          </Header>
          <ListContainer>
            <ListTitle>{t("toolbox.section.parties")}</ListTitle>
            <ListDivider />
            <ListInner>
              {parties.map((id) => (
                <PartyItem key={id} id={id} />
              ))}
            </ListInner>
          </ListContainer>
          <ListContainer>
            <ListTitle>{t("toolbox.section.ideologies")}</ListTitle>
            <ListDivider />
            <ListInner>
              {ideologies.map((id) => (
                <IdeologyItem key={id} id={id} />
              ))}
            </ListInner>
          </ListContainer>
          <ListContainer>
            <ListTitle>{t("toolbox.section.traits")}</ListTitle>
            <ListDivider />
            <ListInner>
              {traits.map((id) => (
                <IdeologyItem key={id} id={id} />
              ))}
            </ListInner>
          </ListContainer>
        </Inner>
        <GoogleAd id="myp3-standard-middle" />
      </Container>
    </Wrapper>
  );
};

export default EditorToolboxView;
