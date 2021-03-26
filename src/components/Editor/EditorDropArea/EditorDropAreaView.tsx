import React from "react";
import { Container } from "./EditorDropAreaStyles";
import useBreakpoint from "@utils/hooks/useBreakpoint";
import {
  AddButton,
  Info,
} from "@components/Editor/EditorTraits/EditorTraitsStyle";
import { useDrop } from "react-dnd";
import { useEditorSlidingUpPanel } from "@components/Editor/EditorSlidingUpPanel";
import { ItemType } from "@constants";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  accept: ItemType;
  dropText: string;
  clickText: string;
  multiple?: boolean;
  onDropOrAdd: (item: any) => void;
  children: React.ReactNode;
  padding?: number;
}

const EditorDropArea: React.FC<Props> = ({
  accept,
  onDropOrAdd,
  clickText,
  dropText,
  multiple,
  children,
  ...rest
}) => {
  const { show } = useEditorSlidingUpPanel();

  const handleDrop = ({ id }: any) => {
    onDropOrAdd(id);
  };

  const [, drop] = useDrop(() => ({
    accept,
    drop: handleDrop,
  }));

  const handleAddClick = () => {
    show(accept, onDropOrAdd);
  };

  const isClickable = useBreakpoint("md");

  const childrenCount = React.Children.count(children);

  return (
    <Container ref={drop} {...rest}>
      {children}
      {childrenCount === 0 && (
        <Info as={isClickable ? "button" : "div"} onClick={handleAddClick}>
          {isClickable ? clickText : dropText}
        </Info>
      )}
      {childrenCount > 0 && isClickable && multiple && (
        <AddButton onClick={handleAddClick} />
      )}
    </Container>
  );
};

export default EditorDropArea;
