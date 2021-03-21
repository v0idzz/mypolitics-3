import React, { useContext, useState } from "react";
import { ItemType } from "./EditorSlidingUpPanelView";

interface SlidingUpPanelContextType {
  setIsIn: (isIn: boolean) => void;
  isIn: boolean;
  type: ItemType;
  setType?: (type: ItemType) => void;
}

const EditorSlidingUpPanelContext = React.createContext<SlidingUpPanelContextType>(
  undefined
);

export const useEditorSlidingUpPanel = () => {
  const context = useContext(EditorSlidingUpPanelContext);
  if (context === undefined) {
    throw new Error(
      "useSlidingUpPanel must be used within SlidingUpPanelProvider"
    );
  }

  return context;
};

export const EditorSlidingUpPanelProvider: React.FC = ({ children }) => {
  const [isIn, setIsIn] = useState(true);
  const [type, setType] = useState<ItemType>("party");

  const providerValue: SlidingUpPanelContextType = {
    setIsIn,
    isIn,
    setType,
    type,
  };

  return (
    <EditorSlidingUpPanelContext.Provider value={providerValue}>
      {children}
    </EditorSlidingUpPanelContext.Provider>
  );
};
