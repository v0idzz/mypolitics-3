import styled from "styled-components";
import { transparentize } from "polished";

export const SearchBox = styled.div`
  & > div {
    border-radius: 0.5rem;
    overflow: hidden;
    border: 0;

    .gsc-control-cse {
      border: 0;
    }

    .gsc-input-box {
      padding: 0.5rem;
      border-radius: 0.25rem;
      background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
      font-weight: ${({ theme }) => theme.fontWeight.secondary.bold};

      input {
        background: transparent !important;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    button.gsc-search-button-v2 {
      padding: 0.75rem 2rem;
      cursor: pointer;
    }

    .gsc-webResult.gsc-result {
      padding: 0.75rem;
      background: transparent;
      border: 0;
      transition: 0.2s ease-in-out;

      &:not(:last-child) {
        border-bottom: 1px solid rgb(0 0 0 / 5%);
      }
    }

    .gsc-results {
      border-radius: 0.5rem;
      overflow: hidden;
      background: ${({ theme }) => theme.colors.background};
    }

    .gscb_a {
      color: #fff;
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 0.25rem;
      background: ${({ theme }) => transparentize(0.5, theme.colors.primary)};
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.2s ease-in-out;

      &:hover {
        background: ${({ theme }) => transparentize(0.3, theme.colors.primary)};
        color: #fff;
      }
    }
  }
`;
