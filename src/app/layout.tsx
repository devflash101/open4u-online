import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open4U Online — Attorney Portfolio",
  description: "Professional attorney portfolio websites",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
