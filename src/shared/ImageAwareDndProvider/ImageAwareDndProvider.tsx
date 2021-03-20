import { DndProvider, DndProviderProps } from "react-dnd";
import { useEffect } from "react";

const ImageAwareDndProvider: React.FC<DndProviderProps<any, any>> = (props) => {
  useEffect(() => {
    const handleDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    window.addEventListener("dragover", handleDrag);
    window.addEventListener("drop", handleDrag);

    return () => {
      window.removeEventListener("dragover", handleDrag);
      window.removeEventListener("drop", handleDrag);
    };
  }, []);

  return <DndProvider {...props} />;
};

export default ImageAwareDndProvider;
