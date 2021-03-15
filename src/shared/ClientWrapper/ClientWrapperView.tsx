import React from "react";

interface Props {
  children: React.ReactNode;
}

const ClientWrapper: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ClientWrapper;
