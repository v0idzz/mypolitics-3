import styled, {
  css,
  DefaultTheme,
  SimpleInterpolation,
} from "styled-components";
import { lighten, transparentize } from 'polished';
import { SurveyAnswerType } from "@generated/graphql";
import { SlimAnswer } from "@components/Survey/utils/useSurvey";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 6rem);
  padding: 2rem;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const Logo = styled.img`
  height: 2rem;
  width: auto;
  display: block;
`;

export const Inner = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.5rem;
  padding: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  .item-enter {
    opacity: 0;
  }
  .item-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  .item-exit {
    opacity: 1;
  }
  .item-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in;
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
  }
  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 500ms;
  }
`;

export const FormQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.backgroundDarken};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  border-radius: 0.5rem;
  line-height: 1.4;
`;

