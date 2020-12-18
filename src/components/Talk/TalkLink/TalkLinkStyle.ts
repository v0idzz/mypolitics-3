import styled from "styled-components";

export const Container = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 0.5rem;
  height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  object-fit: cover;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(95%);
    cursor: pointer;
  }
`;
