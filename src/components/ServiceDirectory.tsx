import Link from "next/link";
import type { ServiceRecord } from "@/lib/services";

type ServiceDirectoryProps = {
  services: ServiceRecord[];
};

type ServiceCategory = {
  title: string;
  description: string;
  slugs: string[];
};

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: "音楽サブスクリプション",
    description: "音楽配信、オーディオ、ポッドキャスト関連のページです。",
    slugs: [
      "youtube-music-premium",
      "spotify-free-premium",
      "spotify",
      "amazon-music-unlimited",
      "apple-music",
      "rakuten-music",
      "line-music",
      "awa",
      "apple-podcasts-subscriptions",
      "audible",
    ],
  },
  {
    title: "動画配信・放送",
    description: "動画配信、オンデマンド、放送系サービスのページです。",
    slugs: [
      "netflix",
      "disney-plus",
      "u-next",
      "hulu",
      "abema-premium",
      "lemino",
      "d-animestore",
      "wowow-on-demand",
    ],
  },
  {
    title: "ソフトウェア・クラウド",
    description: "ソフトウェア、クラウド、オンラインツール関連のページです。",
    slugs: [
      "adobe-creative-cloud",
      "microsoft-365",
      "notion",
      "dropbox",
      "zoom",
      "google-one",
      "icloud-plus",
      "canva",
      "evernote",
    ],
  },
  {
    title: "プレミアム・会員サービス",
    description: "会員特典、プレミアム契約、定額会員サービスのページです。",
    slugs: ["amazon-prime", "yahoo-premium"],
  },
  {
    title: "ニュース・読み物",
    description: "電子版、雑誌、読み放題サービスのページです。",
    slugs: [
      "nikkei-digital",
      "newspicks",
      "dmagazine",
      "rakuten-magazine",
      "kindle-unlimited",
    ],
  },
  {
    title: "ゲーム・オンラインサービス",
    description: "ゲーム機やオンラインサービス関連のページです。",
    slugs: ["nintendo-switch-online", "playstation-plus"],
  },
];

export function ServiceDirectory({ services }: ServiceDirectoryProps) {
  const servicesBySlug = new Map(services.map((service) => [service.slug, service]));
  const categorizedSlugs = new Set(
    SERVICE_CATEGORIES.flatMap((category) => category.slugs),
  );
  const groupedCategories = SERVICE_CATEGORIES.map((category) => ({
    ...category,
    services: category.slugs
      .map((slug) => servicesBySlug.get(slug))
      .filter((service): service is ServiceRecord => Boolean(service)),
  })).filter((category) => category.services.length > 0);
  const uncategorizedServices = services.filter(
    (service) => !categorizedSlugs.has(service.slug),
  );

  return (
    <div className="service-directory stack-lg">
      {groupedCategories.map((category) => (
        <section className="service-category stack" key={category.title}>
          <div className="service-category-header">
            <div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
            <span>{category.services.length}件</span>
          </div>

          <div className="service-grid">
            {category.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      ))}

      {uncategorizedServices.length ? (
        <section className="service-category stack">
          <div className="service-category-header">
            <div>
              <h3>その他</h3>
              <p>上記の分類以外の掲載ページです。</p>
            </div>
            <span>{uncategorizedServices.length}件</span>
          </div>

          <div className="service-grid">
            {uncategorizedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceRecord }) {
  return (
    <Link href={`/service/${service.slug}`} className="service-card">
      <div className="service-card-heading">
        <div>
          <h4 className="service-card-title">{service.serviceName}</h4>
          <span className="service-card-company">{service.companyName}</span>
        </div>
      </div>

      <p>手続き方法、ログイン要否、情報参照日を先に確認できます。</p>

      <div className="service-card-meta">
        <div className="service-card-meta-row">
          <span>主な手続き方法</span>
          <span>{service.primaryMethods}</span>
        </div>
        <div className="service-card-meta-row">
          <span>ログイン</span>
          <span>{service.loginRequired}</span>
        </div>
        <div className="service-card-meta-row">
          <span>情報参照日</span>
          <span>{service.asOf}</span>
        </div>
      </div>

      <span className="service-card-cta">詳細ページを見る</span>
    </Link>
  );
}
