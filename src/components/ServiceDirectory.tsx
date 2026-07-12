import Link from "next/link";
import type { ServiceRecord } from "@/lib/services";

type ServiceDirectoryProps = {
  services: ServiceRecord[];
};

export function ServiceDirectory({ services }: ServiceDirectoryProps) {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={`/service/${service.slug}`}
          className="service-card"
        >
          <div className="service-card-heading">
            <div>
              <h3 className="service-card-title">{service.serviceName}</h3>
              <span className="service-card-company">{service.companyName}</span>
            </div>
          </div>

          <p>
            手続き方法、ログイン要否、情報参照日を先に確認できます。
          </p>

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
      ))}
    </div>
  );
}
