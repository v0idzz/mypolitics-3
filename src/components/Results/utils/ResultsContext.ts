import React, { useContext } from "react";
import { ResultsPartsFragment } from "@generated/graphql";

interface ResultsContextType extends ResultsPartsFragment {
  isClassic: boolean;
}

export const ResultsContext = React.createContext<ResultsContextType>(
  undefined
);

export const useCurrentResults = (): ResultsContextType => {
  const context = useContext(ResultsContext);
  if (context === undefined) {
    throw new Error(
      "useCurrentResults must be used within a ResultsContext.Provider"
    );
  }

  return context;
};
