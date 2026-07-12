import { AdSlot } from "@/components/AdSlot";
import { ServiceDirectory } from "@/components/ServiceDirectory";
import { PHASE1_SERVICES } from "@/lib/services";

export default function HomePage() {
  return (
    <div className="shell page-stack">
      <section className="hero-panel">
        <div className="hero-grid">
          <div className="hero-copy stack">
            <p className="hero-kicker">解約・退会情報を、確認しやすい順番で整理。</p>
            <h1 className="hero-title">
              <span className="hero-title-line">先に知りたい項目を</span>
              <span className="hero-title-line">まとめて確認できる</span>
              <span className="hero-title-line">解約情報リファレンス</span>
            </h1>
            <p className="lead">
              主な手続き方法、ログイン要否、情報参照日、公式リンクを先に見られる形で掲載しています。
            </p>
          </div>

          <div className="hero-summary">
            <div className="summary-row summary-row-count">
              <span className="summary-label">掲載サービス数</span>
              <span className="summary-value">{PHASE1_SERVICES.length}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">掲載対象</span>
              <span className="summary-text">公式公開情報のみを掲載</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">確認しやすい項目</span>
              <span className="summary-text">手続き場所・注記・公式リンクを整理</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">各ページ共通</span>
              <span className="summary-text">情報参照日を各ページに明記</span>
            </div>
          </div>
        </div>
      </section>

      <section className="service-hub stack-lg">
        <div className="service-index-header">
          <div className="stack">
            <h2 className="section-heading">掲載サービス</h2>
            <p className="section-intro">
              確認に必要な項目から見られるように整理しています。
            </p>
          </div>
          <p className="section-caption">
            主な手続き方法と参照日を一覧で確認できます。
          </p>
        </div>

        <ServiceDirectory services={PHASE1_SERVICES} />
      </section>

      <section className="compact-grid">
        <section className="compact-panel compact-panel-primary stack">
          <h2 className="panel-title">掲載方針</h2>
          <ul className="clean-list stack">
            <li>各サービスの公式サイトで公開されている内容のみを整理しています。</li>
            <li>主な手続き方法、注記、公式リンクを先に把握しやすい構成にしています。</li>
            <li>条件や画面表示の最終確認は、必ず公式案内をご確認ください。</li>
          </ul>
        </section>

        <section className="compact-panel compact-panel-secondary stack">
          <h2 className="panel-title">使い方</h2>
          <ol className="mini-steps">
            <li>サービスを選ぶ</li>
            <li>手続き場所や注記を確認する</li>
            <li>公式リンクで最新条件を確認する</li>
          </ol>
        </section>
      </section>

      <AdSlot slotId="kaiyaku-info-home-bottom" />
    </div>
  );
}
