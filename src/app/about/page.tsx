// src/app/about/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサイトについて（解約情報リファレンス）",
  description:
    "解約情報リファレンス（kaiyaku-info.com）の目的・運営方針・免責事項について。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="container stack-lg">
      <article className="card stack-lg">
        <h1>このサイトについて</h1>

        <p>
          解約情報リファレンス（kaiyaku-info.com）は、各サービス事業者が公式に公開している
          解約・退会手続きに関する情報を、中立的に整理し、参照しやすい形で提供することを目的とした
          リファレンスサイトです。
        </p>

        <section className="stack">
          <h2>運営方針</h2>
          <ul>
            <li>本サイトは、公式公開情報の要点整理を行います。</li>
            <li>操作方法の助言、判断の推奨、結果の保証は行いません。</li>
            <li>比較・ランキング・レビュー・ユーザー投稿は扱いません。</li>
            <li>掲載ページには「公式情報まとめ」「情報参照日」を明記します。</li>
          </ul>
        </section>

        <section className="stack">
          <h2>免責事項</h2>
          <p>
            掲載内容は作成時点の公式公開情報に基づく整理です。実際の条件・結果・手続きの可否は、
            必ず各サービスの公式案内をご確認ください。本サイトは、掲載内容の完全性・正確性・最新性を保証しません。
          </p>
        </section>

        <section className="stack">
          <h2>お問い合わせ</h2>
          <p>
            連絡先：<a href="mailto:contact@kaiyaku-info.com">contact@kaiyaku-info.com</a>
          </p>
          <p className="note">
            ※ サービスの契約・請求・解約手続きに関する個別サポートは行っていません。公式窓口をご確認ください。
          </p>
        </section>
      </article>
    </main>
  );
}
