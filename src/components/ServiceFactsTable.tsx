import type { ServiceRecord } from "@/lib/services";

type ServiceFactsTableProps = {
  service: ServiceRecord;
};

export function ServiceFactsTable({ service }: ServiceFactsTableProps) {
  return (
    <table className="facts-table">
      <tbody>
        <tr>
          <th scope="row">サービス名</th>
          <td>{service.serviceName}</td>
        </tr>
        <tr>
          <th scope="row">提供会社</th>
          <td>{service.companyName}</td>
        </tr>
        <tr>
          <th scope="row">主な手続き方法</th>
          <td>{service.primaryMethods}</td>
        </tr>
        <tr>
          <th scope="row">ログイン要否</th>
          <td>{service.loginRequired}</td>
        </tr>
        <tr>
          <th scope="row">所要時間</th>
          <td>{service.timeEstimate ?? "公式記載なし"}</td>
        </tr>
        <tr>
          <th scope="row">情報参照日</th>
          <td>{service.asOf}</td>
        </tr>
      </tbody>
    </table>
  );
}
