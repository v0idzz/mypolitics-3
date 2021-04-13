import { useEffect } from "react";
import { useChangeTracker } from "@components/Editor/utils/ChangeTrackerContext";
import { Router } from "next/router";
import useTranslation from "next-translate/useTranslation";

export const useWarnIfUnsavedChanges = () => {
  const { t } = useTranslation("editor");
  const { hasUncommittedChanges } = useChangeTracker();

  useEffect(() => {
    const message = t("misc.unsavedChangesWarning");

    const handleRouteChangeStart = () => {
      if (hasUncommittedChanges && !confirm(message)) {
        throw "Route change was aborted. This error can be safely ignored.";
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUncommittedChanges) {
        e.preventDefault();
        e.returnValue = message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    Router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      Router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [hasUncommittedChanges]);
};

export default useWarnIfUnsavedChanges;
