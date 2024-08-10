import type { Metadata } from "next";
import "./globals.css";
import { fontClassNames } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Hrdaya yoga",
  description: "마음의 중심을 찾는 공간, 흐르다야요가",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontClassNames}>{children}</body>
    </html>
  );
}
