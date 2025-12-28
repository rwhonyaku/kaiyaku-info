// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "解約情報リファレンス（kaiyaku-info.com）",
    template: "%s | 解約情報リファレンス",
  },
  description:
    "公式サイトに掲載されている解約・退会情報を、見やすく整理して提供する中立的リファレンス。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="ja">
      <head>
        {publisherId ? (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
            crossOrigin="anonymous"
          />
        ) : null}
      </head>

      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              解約情報リファレンス
            </Link>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/service" style={{ marginLeft: 12 }}>
                サービス一覧
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container">
            <p className="muted">
              本サイトは公式公開情報を整理した中立的リファレンスです。条件・結果は必ず公式案内をご確認ください。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
