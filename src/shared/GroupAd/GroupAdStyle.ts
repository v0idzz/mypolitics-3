import styled from "styled-components";

export const Container = styled.div<{ backgroundUrl: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem;
  max-width: 900px;
  width: 100%;
  border-radius: 0.5rem;
  margin: auto;

  background-image: url(${({ backgroundUrl }) => backgroundUrl});
  background-size: cover;
  background-position: center;
`;

export const Logo = styled.img`
  display: block;
  height: 3rem;
  width: auto;
  margin-bottom: 1.5rem;
`;
