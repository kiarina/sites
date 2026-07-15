import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiarina.github.io/sites/"),
  title: {
    default: "Kiarina Sites",
    template: "%s | Kiarina Sites",
  },
  description: "Projects created by Kiarina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
