import styled from "styled-components";
import { Container as InternationalizedInputStyleContainer } from "@shared/InternationalizedInput/InternationalizedInputStyle";
import { Divider } from "@shared/Common";
import { Container as PartyCardContainer } from "../PartyCard/PartyCardStyle";

export const Container = styled.div`
  form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1.25rem;

    & > div:last-child {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
      width: 100%;
      grid-column: 1 / -1;
    }
  }

  ${InternationalizedInputStyleContainer}, ${PartyCardContainer} {
    background: ${({ theme }) => theme.colors.backgroundDarken};
  }

  ${Divider} {
    grid-column: 1 / -1;
  }
`;
