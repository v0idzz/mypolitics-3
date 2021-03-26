import styled from "styled-components";
import EditorDropArea from "@components/Editor/EditorDropArea/EditorDropAreaView";

export const Container = styled.div<{ padding?: number }>`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeight.secondary.regular};
  width: 100%;
  padding: ${({ padding = 0 }) => padding}rem;
`;

export const EditorIconsDropArea = styled((props) => (
  <EditorDropArea {...props} multiple />
))`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(32px, 1fr));
`;
