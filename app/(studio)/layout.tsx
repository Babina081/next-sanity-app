import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Personal Website",
  description: "Generated by create next app and sanity.io",
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
