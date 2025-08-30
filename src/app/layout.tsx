import type { Metadata } from "next";
import { Roboto, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chair Hub | 名作椅子図鑑",
  description: "名作椅子の図鑑です。有名デザイナーの椅子の詳細やストーリーを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${roboto.variable} ${notoSansJP.variable} bg-neutral-100 bg-dot-28-s-2-neutral-400 antialiased`}>
        {children}
      </body>
    </html>
  );
}
