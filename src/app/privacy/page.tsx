// src/app/privacy/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー（解約情報リファレンス）",
  description:
    "解約情報リファレンス（kaiyaku-info.com）のプライバシーポリシー。Cookie、広告、アクセス解析について。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="container stack-lg">
      <article className="card stack-lg">
        <h1>プライバシーポリシー</h1>

        <p>
          本ページは、解約情報リファレンス（kaiyaku-info.com）における個人情報等の取り扱いについて説明します。
        </p>

        <section className="stack">
          <h2>収集する情報について</h2>
          <p>
            本サイトでは、サイト改善および広告配信のため、Cookie等の技術を利用する場合があります。
            これにより、IPアドレス、閲覧したページ、参照元、ブラウザ情報、閲覧日時などの情報が収集されることがあります。
            これらは、単独で個人を特定する目的で利用するものではありません。
          </p>
        </section>

        <section className="stack">
          <h2>広告について（Google AdSense）</h2>
          <p>
            本サイトは、第三者配信の広告サービス（Google AdSense）を利用します。
            第三者配信事業者は、Cookie等を使用して、ユーザーの過去のアクセス情報に基づいた広告を配信することがあります。
          </p>
          <p>
            Google による広告で使用される情報の詳細や、パーソナライズド広告の無効化については、
            以下をご参照ください。
          </p>
          <ul>
            <li>
              <Link
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google の広告に関するポリシー（Cookie等の技術）
              </Link>
            </li>
            <li>
              <Link
                href="https://myadcenter.google.com/?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                マイ アド センター（広告設定）
              </Link>
            </li>
          </ul>
        </section>

        <section className="stack">
          <h2>アクセス解析について</h2>
          <p>
            本サイトは、利用状況の把握と改善のためにアクセス解析ツールを利用する場合があります。
            解析ツールはCookie等を用いてトラフィックデータを収集することがあります。
          </p>
        </section>

        <section className="stack">
          <h2>Cookieの無効化</h2>
          <p>
            Cookieの使用は、ブラウザ設定により無効化できます。ただし、Cookieを無効化すると、
            一部の機能が利用できなくなる場合があります。
          </p>
        </section>

        <section className="stack">
          <h2>お問い合わせ</h2>
          <p>
            本ポリシーに関するお問い合わせは、以下までご連絡ください。<br />
            <a href="mailto:contact@kaiyaku-info.com">contact@kaiyaku-info.com</a>
          </p>
        </section>

        <section className="disclaimer">
          <p>本ポリシーは、必要に応じて改定される場合があります。</p>
        </section>
      </article>
    </main>
  );
}
