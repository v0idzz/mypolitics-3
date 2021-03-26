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
  children: JSX.Element[];
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

  return (
    <Container ref={drop} {...rest}>
      {children}
      {children.length > 0 && isClickable && multiple && (
        <AddButton onClick={handleAddClick} />
      )}
      {children.length === 0 && (
        <Info as={isClickable ? "button" : "div"} onClick={handleAddClick}>
          {isClickable ? clickText : dropText}
        </Info>
      )}
    </Container>
  );
};

export default EditorDropArea;
