import React from "react";
import { PostOrPage } from "@tryghost/content-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Container,
  Inner,
  Header,
  Name,
  Image,
  SocialLink,
  NameWrapper,
  SocialWrapper,
} from "./AuthorInfoStyle";

library.add(faFacebookF, faTwitter);

interface Props {
  author: PostOrPage["authors"][0];
}

const AuthorInfo: React.FC<Props> = ({ author }) => {
  if (author.name === "Ghost") {
    return null;
  }

  return (
    <Container>
      <Header>
        <NameWrapper>
          {author.profile_image && (
            <Image src={author.profile_image} alt={author.name} />
          )}
          <Name>{author.name}</Name>
        </NameWrapper>
        <SocialWrapper>
          {author.facebook && (
            <SocialLink
              variant="facebook"
              href={author.facebook}
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </SocialLink>
          )}
          {author.twitter && (
            <SocialLink variant="twitter" href={author.twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </SocialLink>
          )}
        </SocialWrapper>
      </Header>
      {author.bio && <Inner>{author.bio}</Inner>}
    </Container>
  );
};

export default AuthorInfo;
