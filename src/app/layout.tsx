import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Open4U Online — Attorney Portfolio",
  description: "Professional attorney portfolio websites",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
