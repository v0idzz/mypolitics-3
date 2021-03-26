import React from "react";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import useTranslation from "next-translate/useTranslation";
import useCanonicalUrl from "@utils/hooks/useCanonicalUrl";
import {
  Wrapper,
  Container,
  ButtonGroup,
  TitleCommunity,
} from "./ShareSocialStyle";

interface Props {
  message?: string;
  defaultPath?: string;
}

const ShareSocial: React.FC<Props> = ({ message = "", defaultPath }) => {
  const { t, lang } = useTranslation("common");
  const { url } = useCanonicalUrl(defaultPath);

  return (
    <Wrapper>
      <Container>
        <h5>{t("share.share")}</h5>
        <ButtonGroup>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&via=mypolitics__&text=${message}&hashtags=myPolitics`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button background="white">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
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
              toast.success(t("share.copied"));
            }}
          >
            <FontAwesomeIcon icon={faLink} />
          </Button>
        </ButtonGroup>
      </Container>
      <Container>
        {lang !== "pl" && (
          <TitleCommunity>{t("share.community")}</TitleCommunity>
        )}
        <ButtonGroup>
          <a href="https://discord.gg/k9MbvxapuM" rel="noreferrer">
            <Button
              background="discord"
              beforeIcon={<FontAwesomeIcon icon={faDiscord} />}
            >
              Discord
            </Button>
          </a>
          {lang === "pl" && (
            <>
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
            </>
          )}
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default ShareSocial;
