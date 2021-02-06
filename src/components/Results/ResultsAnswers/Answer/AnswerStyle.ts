import styled, { css, SimpleInterpolation } from "styled-components";
import { SurveyAnswerType } from "@generated/graphql";

export const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Number = styled.div`
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const Question = styled(Number)`
  max-width: 40rem;
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  line-height: 1.3;
  margin-bottom: 0;
`;

export const HeaderButton = styled.button<{ opened: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  border: 0;
  background: transparent;
  color: inherit;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  ${({ opened }) =>
    opened &&
    css`
      transform: rotate(180deg);
    `}
`;

export const Content = styled(Header)`
  display: grid;
  align-items: flex-start;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  width: 100%;
  grid-gap: 1rem;
`;

export const Container = styled.div<{ type: SurveyAnswerType }>`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;
  border-radius: 0.5rem;
  overflow: hidden;

  ${({ type, theme }) => {
    const backgroundColor: Record<SurveyAnswerType, SimpleInterpolation> = {
      [SurveyAnswerType.Agree]: css`
        background: #e8fbf4;
        color: ${theme.colors.green};

        ${Content} {
          border-top: 1px solid #a2ebd1;
        }
      `,
      [SurveyAnswerType.Disagree]: css`
        background: #fbe8e9;
        color: ${theme.colors.red};

        ${Content} {
          border-top: 1px solid #eba2a7;
        }
      `,
      [SurveyAnswerType.Neutral]: css`
        background: ${theme.colors.backgroundDarken};
        color: ${theme.colors.textMuted};
      `,
    };

    return backgroundColor[type];
  }};
`;

export const AnswerElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const AnswerElementTitleWrapper = styled.div`
  display: flex;
`;

export const AnswerElementTitle = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const AnswerElementContent = styled(AnswerElementTitle)`
  background: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 0;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(32px, 1fr));
  color: ${({ theme }) => theme.colors.primary};
`;

export const Col = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;

export const IdeologyWrapper = styled.button<{ background: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  background: ${({ background }) => background};
  color: ${({ theme }) => theme.colors.backgroundLighten};
  border: 0;
  cursor: pointer;

  & > img {
    height: 1rem;
    width: 1rem;
  }
`;

export const PartyImage = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  display: block;
`;

export const NeutralChip = styled.div`
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};
`;
