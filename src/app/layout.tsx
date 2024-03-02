import type { Metadata } from "next";

import { plusJakartaSans } from "@/libs/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Vocagame Auth",
  description: "Vocagame auth page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
