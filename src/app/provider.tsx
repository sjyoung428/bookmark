import React from "react";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "@/components/AuthWrapper";
import StyledComponentsRegistry from "@/lib/registry";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  return (
    <>
      <StyledComponentsRegistry>
        <SessionProvider refetchOnWindowFocus={false}>
          <AuthWrapper>
            <>{children}</>
          </AuthWrapper>
        </SessionProvider>
      </StyledComponentsRegistry>
    </>
  );
};
