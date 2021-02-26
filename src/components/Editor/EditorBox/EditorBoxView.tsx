import React from "react";
import {
  Container,
  Divider,
  ContentWrapper,
  SideWrapper,
} from "./EditorBoxStyle";

interface Props {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  hideContent?: boolean;
}

const EditorBox: React.FC<Props> = ({
  header,
  children,
  footer,
  hideContent = false,
}) => (
  <Container>
    {header && (
      <>
        <SideWrapper>{header}</SideWrapper>
        {!hideContent && <Divider />}
      </>
    )}
    {!hideContent && (
      <>
        <ContentWrapper>{children}</ContentWrapper>
        {footer && (
          <>
            <Divider />
            <SideWrapper>{footer}</SideWrapper>
          </>
        )}
      </>
    )}
  </Container>
);

export default EditorBox;
