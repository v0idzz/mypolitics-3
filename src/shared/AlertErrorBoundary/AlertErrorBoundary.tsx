import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Alert from "@shared/Alert";

const AlertErrorBoundary: React.FC = ({ children }) => (
  <ErrorBoundary
    fallbackRender={(e) => <Alert type="error">{e.error.message}</Alert>}
  >
    {children}
  </ErrorBoundary>
);

export default AlertErrorBoundary;
