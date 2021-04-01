import React, { useCallback, useEffect, useState } from "react";

type CommitFunc = () => Promise<void> | void;

interface EntityChange {
  id?: any;
  commit: CommitFunc;
}

interface SaveInfo {
  autoSave: boolean;
}

export interface ChangeTrackerContextType {
  enqueueChange(func: CommitFunc, id: string): void;
  commitChanges(isAutoSave: boolean): Promise<void>;
  hasUncommittedChanges: boolean;
  lastSave: SaveInfo;
}

const ChangeTrackerContext = React.createContext<ChangeTrackerContextType>(
  undefined
);

export const useChangeTracker = () => React.useContext(ChangeTrackerContext);

interface Props {
  autoSaveInterval?: number;
}

export const ChangeTrackerProvider: React.FC<Props> = ({
  children,
  autoSaveInterval = 5000,
}) => {
  const [lastSave, setLastSave] = useState<SaveInfo>({
    autoSave: false,
  });
  const [changesQueue, setChangesQueue] = useState<EntityChange[]>([]);

  const commitChanges = useCallback(
    async (isAutoSave: boolean = true) => {
      while (changesQueue.length > 0) {
        const change = changesQueue.shift();
        await change.commit();
      }
      setChangesQueue([]);
      setLastSave({ autoSave: isAutoSave });
    },
    [changesQueue]
  );

  useEffect(() => {
    const intervalId = window.setInterval(commitChanges, autoSaveInterval);

    return () => window.clearInterval(intervalId);
  }, [autoSaveInterval, commitChanges]);

  const enqueueChange = (func: CommitFunc, id: string) => {
    setChangesQueue((previous) => {
      const previousChange = previous.find(
        (c) => c.id !== undefined && c.id === id
      );
      if (typeof previousChange !== "undefined") {
        previousChange.commit = func;
        return previous;
      } else {
        return [...previous, { commit: func, id }];
      }
    });
  };

  const value = {
    enqueueChange,
    commitChanges,
    hasUncommittedChanges: changesQueue.length !== 0,
    lastSave,
  };

  return (
    <ChangeTrackerContext.Provider value={value}>
      {children}
    </ChangeTrackerContext.Provider>
  );
};
