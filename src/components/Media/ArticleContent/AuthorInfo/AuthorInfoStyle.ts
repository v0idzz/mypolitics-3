import styled from "styled-components";
import { CategoryWrapper } from "@components/Media/ArticleContent/AuthorHeader/AuthorHeaderStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  opacity: 0.75;
  font-size: 1.25rem;
`;

export const Image = styled.img`
  display: block;
  height: 2rem;
  width: 2rem;
  object-fit: cover;
  border-radius: 100%;
  margin-right: 1rem;
`;

export const Name = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a<{ variant: "facebook" | "twitter" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  background: ${({ variant }) =>
    variant === "facebook" ? "#1773EA" : "#009DEB"};
  color: ${({ theme }) => theme.colors.backgroundLighten};

  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Inner = styled(NameWrapper)`
  line-height: 1.4;
  font-size: 1rem;
  margin-top: 1rem;
`;
