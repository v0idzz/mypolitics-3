import styled from "styled-components";

export const Image = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  object-fit: cover;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    transform: scale(1.25);
  }
`;
