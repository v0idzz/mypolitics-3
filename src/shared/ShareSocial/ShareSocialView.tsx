import React from "react";
import Button from "@shared/Button";
import { Wrapper, Container, ButtonGroup } from "./ShareSocialStyle";

interface Props {
  url: string;
}

const ShareSocial: React.FC<Props> = ({ url }) => (
  <Wrapper>
    <Container>
      <h5>Udostępnij</h5>
      <ButtonGroup>
        <a href="">
          <Button background="white">tweet</Button>
        </a>
        <a href="">
          <Button background="white">fb</Button>
        </a>
        <Button
          background="white"
          onClick={async () => {
            await navigator.clipboard.writeText(url);
          }}
        >
          copy
        </Button>
      </ButtonGroup>
    </Container>
    <Container>
      <h5>Społeczność</h5>
      <ButtonGroup>
        <a href="">
          <Button background="discord">Discord</Button>
        </a>
        <a href="">
          <Button background="white">Sztab</Button>
        </a>
        <a href="">
          <Button background="white">Polemika</Button>
        </a>
      </ButtonGroup>
    </Container>
  </Wrapper>
);

export default ShareSocial;
