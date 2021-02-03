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
import { Wrapper, Container, ButtonGroup } from "./ShareSocialStyle";

interface Props {
  url: string;
}

const ShareSocial: React.FC<Props> = ({ url }) => {
  const { addToast } = useToasts();

  return (
    <Wrapper>
      <Container>
        <h5>Udostępnij</h5>
        <ButtonGroup>
          <a href="">
            <Button background="white">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
          </a>
          <a href="">
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
              addToast("Copied URL to clipboard", { appearance: "success" });
            }}
          >
            <FontAwesomeIcon icon={faLink} />
          </Button>
        </ButtonGroup>
      </Container>
      <Container>
        <h5>Społeczność</h5>
        <ButtonGroup>
          <a href="https://discord.gg/k9MbvxapuM">
            <Button
              background="discord"
              beforeIcon={<FontAwesomeIcon icon={faDiscord} />}
            >
              Discord
            </Button>
          </a>
          <a href="facebook.com/groups/sztabmypolitics">
            <Button
              background="white"
              beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
            >
              Sztab
            </Button>
          </a>
          <a href="facebook.com/groups/polemika">
            <Button
              background="white"
              beforeIcon={<FontAwesomeIcon icon={faFacebookF} />}
            >
              Polemika
            </Button>
          </a>
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default ShareSocial;
