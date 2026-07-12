import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { ReactNode } from "react";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kaiyaku-info.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "解約情報リファレンス（kaiyaku-info.com）",
    template: "%s | 解約情報リファレンス",
  },
  description:
    "公式サイトに掲載されている解約・退会情報を、見やすく整理して提供する中立的なリファレンス。",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  return (
    <html lang="ja" className={`${notoSansJp.variable} ${notoSerifJp.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

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
        <div className="site-chrome">
          <header className="site-header">
            <div className="shell header-inner">
              <Link href="/" className="brand">
                <span className="brand-mark">kaiyaku-info.com</span>
                <span className="brand-name">解約情報リファレンス</span>
              </Link>
              <nav className="nav" aria-label="メインナビゲーション">
                <Link href="/" className="nav-link">
                  ホーム
                </Link>
                <Link href="/service" className="nav-link">
                  サービス一覧
                </Link>
              </nav>
            </div>
          </header>

          <main className="main-content">{children}</main>

          <footer className="site-footer">
            <div className="shell footer-panel">
              <p className="footer-disclaimer">
                本サイトは、各サービスが公式に公開している解約・退会情報を整理した中立的な参照ページです。実際の条件や手続き画面は、必ず公式案内をご確認ください。
              </p>
              <div className="footer-meta">
                <nav className="footer-links" aria-label="フッターナビゲーション">
                  <Link href="/about">このサイトについて</Link>
                  <Link href="/privacy">プライバシーポリシー</Link>
                  <Link href="/terms">利用規約</Link>
                </nav>
                <p className="copyright">
                  © {new Date().getFullYear()} 解約情報リファレンス
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
