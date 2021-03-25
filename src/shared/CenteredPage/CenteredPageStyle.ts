import styled from "styled-components";
import { Title } from "@shared/Typography";
import { spacingY } from '@utils/stylesUtils';

export const Container = styled.main<{ fullWidth: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: 100%;
  min-height: 80vh;

  & > ${Title} {
    margin-bottom: 2rem;
  }

  ${({ fullWidth }) =>
    !fullWidth &&
    `
    .container {
      width: auto;
    }
  `}
`;

export const Inner = styled.div`
  ${spacingY(1)};
  margin: auto;
  padding: 5% 0;
`;
