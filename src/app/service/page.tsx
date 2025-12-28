import Link from "next/link";
import { PHASE1_SERVICES } from "@/lib/services";
import { AdSlot } from "@/components/AdSlot";

export const metadata = {
  title: "サービス一覧",
  description:
    "解約・退会に関する公式公開情報を、中立的に整理したサービス一覧です。",
  alternates: { canonical: "/service" },
};

export default function ServiceIndexPage() {
  return (
    <main className="container stack-lg">
      <section className="card stack">
        <h1>サービス一覧</h1>
        <p className="muted">
          本一覧は、各サービスが公式に公開している解約・退会情報への参照ページです。
          操作方法の助言や結果の保証を行うものではありません。
        </p>
      </section>

      <section className="card stack">
        <h2>Phase 1（20サービス）</h2>
        <ul className="list">
          {PHASE1_SERVICES.map((s) => (
            <li key={s.slug}>
              <Link href={`/service/${s.slug}`}>
                {s.serviceName}の解約・退会方法（公式情報まとめ）
              </Link>
              <div className="muted" style={{ marginTop: 4, fontSize: "0.95rem" }}>
                情報参照日：{s.asOf}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <AdSlot slotId="kaiyaku-info-service-index-bottom" />
    </main>
  );
}
