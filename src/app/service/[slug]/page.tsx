import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/AdSlot";
import { ServiceFactsTable } from "@/components/ServiceFactsTable";
import { getServiceBySlug, PHASE1_SLUGS } from "@/lib/services";
import type { ServiceRecord } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type NoteGroup = {
  title: string;
  items: string[];
};

type DetailSection = {
  title: string;
  items?: string[];
  body?: string;
};

export function generateStaticParams() {
  return PHASE1_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title:
      service.seoTitle ??
      `${service.serviceName}の解約・退会方法（公式情報まとめ）`,
    description:
      service.seoDescription ??
      `${service.serviceName}が公式に案内している解約・退会情報を、中立的に整理した参考ページです。`,
    alternates: { canonical: `/service/${service.slug}` },
  };
}

function getWhereText(methods: string) {
  if (methods.includes("Web") && methods.includes("アプリ")) {
    return "Webとアプリの案内があり、購入経路や決済方法によって確認先が分かれる場合があります。";
  }
  if (methods.includes("端末")) {
    return "端末側のサブスクリプション管理画面を確認する形式です。";
  }
  if (methods.includes("アプリ")) {
    return "アプリ側の案内があり、購入経路によって手続き先が分かれる場合があります。";
  }
  if (methods.includes("Web")) {
    return "Web上のアカウント情報・契約情報・設定画面などから確認する形式です。";
  }

  return `${methods} での案内が掲載されています。`;
}

function buildRouteItems(
  primaryMethods: string,
  loginRequired: "必要" | "不要",
  notes?: string[],
) {
  const items = [
    getWhereText(primaryMethods),
    loginRequired === "必要"
      ? "公式案内では、手続きにログインが必要です。"
      : "公式案内では、ログインせず確認できる手順が案内されています。",
  ];

  if (notes?.length) {
    items.push(...notes);
  }

  return items;
}

function buildPrimaryNotes(slug: string): NoteGroup[] {
  const service = getServiceBySlug(slug);
  if (!service) return [];

  return [
    ...(service.timingPoints?.length
      ? [{ title: "タイミング・期間", items: service.timingPoints }]
      : []),
    ...(service.afterCancelPoints?.length
      ? [{ title: "解約後の取り扱い", items: service.afterCancelPoints }]
      : []),
    ...(service.confirmationPoints?.length
      ? [{ title: "確認に関する記載", items: service.confirmationPoints }]
      : []),
    ...(service.troubleshootingPoints?.length
      ? [{ title: "手続き先が分かれるケース", items: service.troubleshootingPoints }]
      : []),
    ...(service.benefitsPoints?.length
      ? [{ title: "特典・ポイント等", items: service.benefitsPoints }]
      : []),
  ];
}

function buildStructuredSections(service: ServiceRecord): DetailSection[] {
  return [
    ...(service.cancellationEntryPoint?.length || service.billingRouteNotes?.length
      ? [
          {
            title: "手続き先・管理画面",
            items: [
              ...(service.cancellationEntryPoint ?? []),
              ...(service.billingRouteNotes ?? []),
            ],
          },
        ]
      : []),
    ...(service.cancellationTimingNotes?.length || service.postCancellationAccess?.length
      ? [
          {
            title: "更新日・利用期間に関する記載",
            items: [
              ...(service.cancellationTimingNotes ?? []),
              ...(service.postCancellationAccess ?? []),
            ],
          },
        ]
      : []),
    ...(service.cancellationVsAccountDeletion?.length
      ? [
          {
            title: "解約とアカウント削除の違い",
            items: service.cancellationVsAccountDeletion,
          },
        ]
      : []),
    ...(service.confirmationNotes?.length
      ? [
          {
            title: "完了確認・表示に関する記載",
            items: service.confirmationNotes,
          },
        ]
      : []),
    ...(service.unavailableOrExceptionNotes?.length
      ? [
          {
            title: "契約経路が分かれるケース",
            items: service.unavailableOrExceptionNotes,
          },
        ]
      : []),
    ...(service.officialSourceSummary
      ? [
          {
            title: "公式ページで確認できる内容",
            body: service.officialSourceSummary,
          },
        ]
      : []),
  ];
}

function getLayoutTone(noteCount: number) {
  if (noteCount >= 4) return "rich";
  if (noteCount >= 2) return "balanced";
  return "lean";
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const structuredSections = buildStructuredSections(service);
  const hasStructuredSections = structuredSections.length > 0;
  const primaryNotes = hasStructuredSections ? [] : buildPrimaryNotes(service.slug);
  const routeItems = buildRouteItems(
    service.primaryMethods,
    service.loginRequired,
    service.notes,
  );
  const searchIntentNotes = service.searchIntentNotes ?? [];

  const layoutTone = getLayoutTone(primaryNotes.length);
  const featuredNote = primaryNotes[0] ?? null;
  const secondaryNotes = primaryNotes.slice(1);

  return (
    <div
      className={`reading-shell service-page service-page-varied service-page-${layoutTone}`}
    >
      <nav className="breadcrumb" aria-label="パンくず">
        <Link href="/">ホーム</Link>
        <span>/</span>
        <Link href="/service">サービス一覧</Link>
        <span>/</span>
        <span>{service.serviceName}</span>
      </nav>

      <article className="service-page">
        <section className="service-hero service-hero-tight">
          <div className="service-hero-inner">
            <p className="service-kicker">公式情報を見やすく整理</p>
            <h1 className="service-title">
              {service.serviceName}の解約・退会方法（公式情報まとめ）
            </h1>
            <p>
              主な手続き方法、確認先、注記、公式リンクを、先に把握しやすい形で整理しています。
            </p>
            <div className="summary-pills" aria-label="ページ要約">
              <span className="summary-pill">
                主な手続き方法: {service.primaryMethods}
              </span>
              <span className="summary-pill">
                ログイン: {service.loginRequired}
              </span>
              <span className="summary-pill">情報参照日: {service.asOf}</span>
            </div>
          </div>
        </section>

        <section className="service-intro-block">
          <h2 className="section-heading">このページで確認できること</h2>
          <p className="section-intro">
            {service.serviceName}
            の公式案内をもとに、手続き場所、基本情報、タイミングや取り扱いに関する注記、公式リンクをまとめています。
          </p>
        </section>

        <section className="detail-grid detail-grid-emphasis">
          <section className="info-panel stack">
            <h2 className="panel-title">基本情報</h2>
            <ServiceFactsTable service={service} />
            <p className="panel-note">
              所要時間は、公式に記載がある場合のみ掲載しています。
            </p>
          </section>

          <aside className="route-panel stack">
            <h2 className="panel-title">どこで解約するか</h2>
            <ul className="clean-list stack">
              {routeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        {service.contractRouteNotes?.length ? (
          <section className="section-panel stack-lg">
            <div className="stack">
              <h2 className="section-heading">契約経路別の確認先</h2>
              <p className="section-intro">
                公式ページ内で契約経路ごとに分かれている手続き先を整理しています。
              </p>
            </div>

            <div className="route-note-table-wrap">
              <table className="route-note-table">
                <thead>
                  <tr>
                    <th scope="col">契約経路</th>
                    <th scope="col">確認先</th>
                    <th scope="col">公式記載</th>
                  </tr>
                </thead>
                <tbody>
                  {service.contractRouteNotes.map((route) => (
                    <tr key={route.route}>
                      <td data-label="契約経路">
                        <span className="route-note-route">{route.route}</span>
                      </td>
                      <td data-label="確認先">
                        <span className="route-note-management">
                          {route.management}
                        </span>
                      </td>
                      <td data-label="公式記載">
                        {route.notes?.length ? (
                          <ul className="clean-list stack">
                            {route.notes.map((note) => (
                              <li key={note}>{note}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="route-note-empty">記載なし</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {searchIntentNotes.length ? (
          <section className="section-panel stack-lg">
            <div className="stack">
              <h2 className="section-heading">名称・表示別の確認事項</h2>
              <p className="section-intro">
                公式ページで使われている名称や請求元の分岐を、確認しやすい単位で整理しています。
              </p>
            </div>

            <div className="note-groups note-groups-varied">
              {searchIntentNotes.map((group, index) => (
                <section
                  key={group.title}
                  className={`note-card ${index === 0 ? "note-card-featured" : ""}`}
                >
                  <h3>{group.title}</h3>
                  <ul className="clean-list stack">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ) : null}

        {hasStructuredSections ? (
          <section className="section-panel stack-lg">
            <div className="stack">
              <h2 className="section-heading">サービス別の確認事項</h2>
              <p className="section-intro">
                公式ページに掲載されている内容を、契約経路、更新日、解約後の扱いなどに分けて整理しています。
              </p>
            </div>

            <div className="note-groups note-groups-varied">
              {structuredSections.map((group, index) => (
                <section
                  key={group.title}
                  className={`note-card ${index === 0 ? "note-card-featured" : ""}`}
                >
                  <h3>{group.title}</h3>
                  {group.body ? <p>{group.body}</p> : null}
                  {group.items?.length ? (
                    <ul className="clean-list stack">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </section>
        ) : service.officialProcedureSections?.length ? (
          <section className="section-panel stack-lg">
            <div className="stack">
              <h2 className="section-heading">公式案内で確認できる手続き項目</h2>
              <p className="section-intro">
                公式ページで実際に案内されている確認事項だけを、項目ごとに整理しています。
              </p>
            </div>

            <div className="note-groups note-groups-varied">
              {service.officialProcedureSections.map((group, index) => (
                <section
                  key={group.title}
                  className={`note-card ${index === 0 ? "note-card-featured" : ""}`}
                >
                  <h3>{group.title}</h3>
                  <ul className="clean-list stack">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ) : null}

        {featuredNote ? (
          <section className="service-focus-band">
            <div className="service-focus-copy stack">
              <h2 className="section-heading">先に確認しておきたいポイント</h2>
              <p className="section-intro">
                公式ページ内で特に確認しやすい注記を、内容ごとに整理しています。
              </p>
            </div>

            <section className="feature-note-card stack">
              <h3>{featuredNote.title}</h3>
              <ul className="clean-list stack">
                {featuredNote.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </section>
        ) : null}

        {secondaryNotes.length ? (
          <section className="secondary-notes-layout">
            <div className="note-groups note-groups-varied note-groups-secondary">
              {secondaryNotes.map((group, index) => (
                <section
                  key={group.title}
                  className={`note-card ${index % 3 === 2 ? "note-card-compact" : ""}`}
                >
                  <h3>{group.title}</h3>
                  <ul className="clean-list stack">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>
        ) : null}

        {primaryNotes.length === 0 ? (
          <section className="compact-panel compact-panel-secondary stack">
            <h2 className="panel-title">掲載範囲</h2>
            <p>
              このページでは、公式ページで確認できる基本情報と公式リンクを中心に整理しています。
            </p>
          </section>
        ) : null}

        <section className="links-and-disclaimer">
          <section className="section-panel section-panel-compact stack-lg">
            <div className="stack">
              <h2 className="section-heading">公式リンク</h2>
              <p className="section-intro">
                最新の条件や画面表示は、各公式ページでご確認ください。
              </p>
            </div>
            <ul className="official-link-list">
              {service.officialLinks.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="official-link-label">{link.label}</span>
                    <span className="official-link-url">{link.url}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="disclaimer-panel disclaimer-panel-inline stack">
            <h2 className="panel-title">免責事項</h2>
            <p>
              本ページは、公式公開情報を整理した参照ページです。実際の条件、適用時期、手続き結果、画面表示は、必ず各サービスの公式案内をご確認ください。
            </p>
          </section>
        </section>
      </article>

      <AdSlot slotId={`kaiyaku-info-${service.slug}-bottom`} />
    </div>
  );
}
