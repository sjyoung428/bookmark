"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import AuthWrapper from "@/components/AuthWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <StyledComponentsRegistry>
          <SessionProvider refetchOnWindowFocus={false}>
            <Header />
            <AuthWrapper>
              <>{children}</>
            </AuthWrapper>
          </SessionProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
