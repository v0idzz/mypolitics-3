import React, { useContext, useState } from "react";
import { ItemType } from "./EditorSlidingUpPanelView";

type Callback = (id: string) => void;

interface SlidingUpPanelContextType {
  isIn: boolean;
  type: ItemType;
  show: (type: ItemType, callback: Callback) => void;
  hide: () => void;
  callback: Callback;
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
  const [callback, setCallback] = useState<Callback>();

  const show = (type: ItemType, callback: Callback) => {
    setCallback(() => callback);
    setIsIn(true);
    setType(type);
  };

  const hide = () => {
    setIsIn(false);
  };

  const providerValue: SlidingUpPanelContextType = {
    isIn,
    type,
    show,
    hide,
    callback,
  };

  return (
    <EditorSlidingUpPanelContext.Provider value={providerValue}>
      {children}
    </EditorSlidingUpPanelContext.Provider>
  );
};
