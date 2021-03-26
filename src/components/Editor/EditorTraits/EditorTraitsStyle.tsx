import styled from "styled-components";
import { transparentize } from "polished";
import Button from "@shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { EditorIconsDropArea } from "@components/Editor/EditorDropArea";

export const Description = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => transparentize(0.25, theme.colors.textMuted)};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  line-height: 1.4;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
`;

export const Info = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => transparentize(0.9, theme.colors.primary)};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem;
  grid-column: 1 / -1;
  width: 100%;
`;

export const TraitsDropArea = styled((props) => (
  <EditorIconsDropArea {...props} />
))`
  padding: 0.75rem;
`;

export const AddButton = styled(Button).attrs({
  background: "bluish",
  beforeIcon: <FontAwesomeIcon icon={faPlus} />,
})`
  padding: 0;
  width: 2rem;
  height: 2rem;
`;
