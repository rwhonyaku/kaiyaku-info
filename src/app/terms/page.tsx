// src/app/terms/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約（解約情報リファレンス）",
  description:
    "解約情報リファレンス（kaiyaku-info.com）の利用規約。情報の位置付け、免責、禁止事項など。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="container stack-lg">
      <article className="card stack-lg">
        <h1>利用規約</h1>

        <p>
          本規約は、解約情報リファレンス（kaiyaku-info.com）（以下「本サイト」）の利用条件を定めるものです。
          本サイトをご利用いただいた場合、本規約に同意したものとみなします。
        </p>

        <section className="stack">
          <h2>1. 提供情報の位置付け</h2>
          <p>
            本サイトは、各サービス事業者が公式に公開している解約・退会等の情報を、中立的に整理して掲載する参考情報です。
            本サイトは、操作方法の助言、判断の推奨、結果の保証、法務・税務・会計等の助言を行いません。
          </p>
        </section>

        <section className="stack">
          <h2>2. 公式情報の確認</h2>
          <p>
            実際の条件・結果・手続きの可否は、必ず各サービスの公式案内をご確認ください。
            本サイトに掲載される情報は作成時点の内容であり、変更される場合があります。
          </p>
        </section>

        <section className="stack">
          <h2>3. 免責事項</h2>
          <p>
            本サイトは、掲載内容の完全性・正確性・最新性を保証しません。
            本サイトの利用または利用不能により生じた損害について、本サイト運営者は一切の責任を負いません。
          </p>
        </section>

        <section className="stack">
          <h2>4. 外部リンク</h2>
          <p>
            本サイトには外部サイトへのリンクが含まれます。リンク先の内容・安全性等について、本サイトは責任を負いません。
          </p>
        </section>

        <section className="stack">
          <h2>5. 禁止事項</h2>
          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>本サイトの運営を妨害する行為</li>
            <li>不正アクセス、スパム、過度な負荷を与える行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="stack">
          <h2>6. 規約の変更</h2>
          <p>
            本規約は、必要に応じて予告なく変更される場合があります。変更後の規約は、本サイトに掲載された時点で効力を生じます。
          </p>
        </section>

        <section className="stack">
          <h2>7. お問い合わせ</h2>
          <p>
            本規約に関するお問い合わせは、以下までご連絡ください。<br />
            <a href="mailto:contact@kaiyaku-info.com">contact@kaiyaku-info.com</a>
          </p>
        </section>
      </article>
    </main>
  );
}
