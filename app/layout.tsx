import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Should I?",
  description: "Platform to help you decide if you should do something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
