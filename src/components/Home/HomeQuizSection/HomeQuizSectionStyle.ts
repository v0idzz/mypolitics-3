import styled from "styled-components";

export const AdditionalContentImage = styled.picture`
  & > img {
    filter: drop-shadow(0px 0px 32px rgba(28, 87, 102, 0.2));
    width: 100%;
    border-radius: 1rem;
    height: auto;
  }
`;
