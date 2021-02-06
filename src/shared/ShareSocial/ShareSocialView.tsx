import React from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useToasts } from "react-toast-notifications";
import useTranslation from "next-translate/useTranslation";
import { Wrapper, Container, ButtonGroup } from "./ShareSocialStyle";

interface Props {
  url: string;
  message: string;
}

const ShareSocial: React.FC<Props> = ({ url, message }) => {
  const { t, lang } = useTranslation("common");
  const { addToast } = useToasts();

  return (
    <Wrapper>
      <Container>
        <h5>{t("share.share")}</h5>
        <ButtonGroup>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&via=mypolitics__&text=${message}&hashtags=myPolitics`}
          >
            <Button background="white">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
            <Button background="white">
              <FontAwesomeIcon
                icon={faFacebookF}
                // The size of `faFacebookF` is 8px by default, making the button not perfectly squared.
                style={{ width: "16px", height: "16px" }}
              />
            </Button>
          </a>
          <Button
            background="white"
            onClick={async () => {
              await navigator.clipboard.writeText(url);
              addToast(t("share.copied"), { appearance: "success" });
            }}
          >
            <FontAwesomeIcon icon={faLink} />
          </Button>
        </ButtonGroup>
      </Container>
      {lang === "pl" && (
        <Container>
          <h5>Społeczność</h5>
          <ButtonGroup>
            <a href="https://discord.gg/k9MbvxapuM" rel="noreferrer">
              <Button
                background="discord"
                beforeIcon={<FontAwesomeIcon icon={faDiscord} />}
              >
                Discord
              </Button>
            </a>
            <a
              href="https://facebook.com/groups/sztabmypolitics"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                background="white"
                beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
              >
                Sztab
              </Button>
            </a>
            <a
              href="https://facebook.com/groups/polemika"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                background="white"
                beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
              >
                Polemika
              </Button>
            </a>
          </ButtonGroup>
        </Container>
      )}
    </Wrapper>
  );
};

export default ShareSocial;
