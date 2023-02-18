import { useSession } from "next-auth/react";
import React from "react";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
  const { status } = useSession();

  if (status === "loading") return null;
  return <>{children}</>;
};

export default AuthWrapper;
