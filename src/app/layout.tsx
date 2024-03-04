import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import ThemeProvider from "@/components/theme-provider";

import { auth } from "@/auth";
import { plusJakartaSans } from "@/libs/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Vocagame Auth",
  description: "Vocagame auth page",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={plusJakartaSans.className}>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
