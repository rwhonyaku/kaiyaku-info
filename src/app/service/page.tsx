import { AdSlot } from "@/components/AdSlot";
import { ServiceDirectory } from "@/components/ServiceDirectory";
import { PHASE1_SERVICES } from "@/lib/services";

export const metadata = {
  title: "サービス一覧",
  description:
    "解約・退会に関する公式公開情報を、中立的に整理したサービス一覧です。",
  alternates: { canonical: "/service" },
};

export default function ServiceIndexPage() {
  return (
    <div className="shell page-stack">
      <section className="hero-panel hero-panel-compact">
        <div className="stack">
          <p className="hero-kicker">掲載サービス一覧</p>
          <h1 className="hero-title hero-title-compact">サービス一覧</h1>
          <p className="lead lead-compact">
            主な手続き方法、ログイン要否、情報参照日を一覧で確認できます。
          </p>
        </div>
      </section>

      <section className="service-hub stack-lg">
        <div className="service-index-header">
          <div className="stack">
            <h2 className="section-heading">掲載中のサービス</h2>
            <p className="section-intro">
              各詳細ページでは、確認先や公式注記を見やすく整理しています。
            </p>
          </div>
          <p className="section-caption">
            現在 {PHASE1_SERVICES.length} サービスを掲載しています。
          </p>
        </div>

        <ServiceDirectory services={PHASE1_SERVICES} />
      </section>

      <AdSlot slotId="kaiyaku-info-service-index-bottom" />
    </div>
  );
}
