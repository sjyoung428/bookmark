import React, { useState } from "react";
import { SessionProvider } from "next-auth/react";
import AuthWrapper from "@/components/AuthWrapper";
import StyledComponentsRegistry from "@/lib/registry";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <StyledComponentsRegistry>
        <QueryClientProvider client={queryClient}>
          <SessionProvider refetchOnWindowFocus={false}>
            <AuthWrapper>
              <>{children}</>
            </AuthWrapper>
          </SessionProvider>
        </QueryClientProvider>
      </StyledComponentsRegistry>
    </>
  );
};
