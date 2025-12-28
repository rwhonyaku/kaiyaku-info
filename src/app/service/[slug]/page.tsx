// src/app/service/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { getServiceBySlug, PHASE1_SLUGS } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PHASE1_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: `${svc.serviceName}の解約・退会方法（公式情報まとめ）`,
    description: `${svc.serviceName}が公式に案内している解約・退会情報を、中立的に整理した参考ページです。`,
    alternates: { canonical: `/service/${svc.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  return (
    <main className="container stack-lg">
      <article className="card stack-lg">
        <h1>{svc.serviceName}の解約・退会方法（公式情報まとめ）</h1>

        <p>
          本ページでは、{svc.serviceName}
          が公式に案内している解約・退会手続きに関する情報を整理して掲載しています。
          操作方法の助言や結果の保証を行うものではありません。
        </p>

        <section>
          <h2>基本情報</h2>
          <table>
            <tbody>
              <tr>
                <th>サービス名</th>
                <td>{svc.serviceName}</td>
              </tr>
              <tr>
                <th>提供会社</th>
                <td>{svc.companyName}</td>
              </tr>
              <tr>
                <th>解約手続きの主な方法</th>
                <td>{svc.primaryMethods}</td>
              </tr>
              <tr>
                <th>ログイン要否</th>
                <td>{svc.loginRequired}</td>
              </tr>
              <tr>
                <th>手続きにかかる目安時間</th>
                <td>{svc.timeEstimate ?? "記載がある場合のみ"}</td>
              </tr>
              <tr>
                <th>情報参照日</th>
                <td>{svc.asOf}</td>
              </tr>
            </tbody>
          </table>

          <p className="note">目安時間は公式記載がある場合のみ。推測は行いません。</p>
        </section>

        <section>
          <h2>解約手続き（公式案内ベース）</h2>
          <ol>
            <li>マイページにログイン</li>
            <li>契約情報／アカウント設定を開く</li>
            <li>「解約」「退会」等の項目を選択</li>
            <li>画面の案内に従って完了</li>
          </ol>

          <p className="note">※ UI文言は断定せず、抽象度を保っています。</p>

          {svc.notes?.length ? (
            <ul>
              {svc.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          ) : null}
        </section>

        <section>
          <h2>公式に案内されている注意点</h2>
          <ul>
            <li>次回請求日前の手続きが必要な場合があります</li>
            <li>解約後もしばらく利用可能な場合があります</li>
            <li>プランによって手続きが異なる場合があります</li>
          </ul>
          <p className="note">※ 公式に明記されている事項のみを前提にしています。</p>
        </section>

        <section>
          <h2>公式リンク</h2>
          <ul>
            {svc.officialLinks.map((l) => (
              <li key={l.url}>
                <Link href={l.url} target="_blank" rel="noopener noreferrer">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="disclaimer">
          <p>
            本情報は公式公開情報を整理したものです。実際の条件・結果は必ず公式案内をご確認ください。
          </p>
        </section>
      </article>

      <AdSlot slotId={`kaiyaku-info-${svc.slug}-bottom`} />
    </main>
  );
}
