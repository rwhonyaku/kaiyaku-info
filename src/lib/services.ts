// lib/services.ts

export type ServiceLink = {
  label: string;
  url: string;
};

export type ServiceRecord = {
  slug: string;

  // Template fields
  serviceName: string;      // 【正式名称】
  companyName: string;      // 【会社名】
  primaryMethods: string;   // Web / アプリ / 電話 / 書面 (or combination)
  loginRequired: "必要" | "不要";
  timeEstimate?: string;    // "記載なし" or omit; DO NOT guess
  asOf: string;             // "YYYY年MM月" (reference date)
  officialLinks: ServiceLink[];

  // Optional: brief neutral notes that remain within your wording rules
  notes?: string[];
};

export const PHASE1_SERVICES: ServiceRecord[] = [
  {
    slug: "netflix",
    serviceName: "Netflix",
    companyName: "Netflix, Inc.",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      { label: "ヘルプ / 解約", url: "https://help.netflix.com/ja/node/407" },
      { label: "利用規約", url: "https://help.netflix.com/legal/termsofuse" },
    ],
  },

  {
    slug: "amazon-prime",
    serviceName: "Amazonプライム",
    companyName: "Amazon（Amazon.co.jp）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Amazonプライム会員登録をキャンセルする",
        url: "https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=GTJQ7QZY7QL2HK4Y",
      },
    ],
  },

  {
    slug: "spotify",
    serviceName: "Spotify Premium",
    companyName: "Spotify",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Premiumプランを解約する方法",
        url: "https://support.spotify.com/jp/article/cancel-premium/",
      },
    ],
  },

  {
    slug: "apple-music",
    serviceName: "Apple Music",
    companyName: "Apple Inc.",
    primaryMethods: "Web / 端末（サブスクリプション管理）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "サポート / Apple Musicを解約する方法",
        url: "https://support.apple.com/ja-jp/118399",
      },
      {
        label: "サポート / Appleのサブスクリプションを解約する",
        url: "https://support.apple.com/ja-jp/118428",
      },
    ],
  },

  {
    slug: "disney-plus",
    serviceName: "Disney+（ディズニープラス）",
    companyName: "Disney+",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Disney+の解約方法",
        url: "https://help.disneyplus.com/ja/article/disneyplus-cancel",
      },
    ],
  },

  {
    slug: "adobe-creative-cloud",
    serviceName: "Adobe Creative Cloud",
    companyName: "アドビ（Adobe）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / アドビのサブスクリプションを解約する方法",
        url: "https://helpx.adobe.com/jp/manage-account/using/cancel-subscription.html",
      },
      {
        label: "利用規約等 / サブスクリプション条件（該当ページ）",
        url: "https://www.adobe.com/jp/legal/subscription-terms.html",
      },
    ],
  },

  {
    slug: "microsoft-365",
    serviceName: "Microsoft 365",
    companyName: "Microsoft",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "サポート / Microsoft 365 サブスクリプションのキャンセル",
        url: "https://support.microsoft.com/ja-jp/office/microsoft-365-%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB-46e2634c-c64b-4c65-94b9-2cc9c960e91b",
      },
      {
        label: "サポート / Microsoft サブスクリプションをキャンセルする",
        url: "https://support.microsoft.com/ja-jp/account-billing/microsoft-%E3%82%B5%E3%83%96%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB%E3%81%99%E3%82%8B-c2c6b0e3-cab3-cb98-d83e-c9ad54620530",
      },
    ],
  },

  {
    slug: "notion",
    serviceName: "Notion",
    companyName: "Notion",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / プランの変更（公式ヘルプ）",
        url: "https://www.notion.com/ja/help/upgrade-or-downgrade-your-plan",
      },
    ],
    notes: [
      "※サブスクリプションの購入経路（App Store等）により手続きが異なる場合があります。",
    ],
  },

  {
    slug: "dropbox",
    serviceName: "Dropbox",
    companyName: "Dropbox",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / 個人用Dropboxプランをキャンセルまたは変更する方法",
        url: "https://help.dropbox.com/ja-jp/plans/downgrade-dropbox-individual-plans",
      },
    ],
  },

  {
    slug: "zoom",
    serviceName: "Zoom",
    companyName: "Zoom",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "サポート / サブスクリプションのキャンセル",
        url: "https://support.zoom.com/hc/ja/article?id=zm_kb&sysparm_article=KB0066700",
      },
    ],
  },

  {
    slug: "rakuten-magazine",
    serviceName: "楽天マガジン",
    companyName: "楽天",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "公式FAQ / 解約はどうすればできますか？",
        url: "https://magazine.faq.rakuten.net/s/detail/000003749",
      },
    ],
  },

  {
    slug: "rakuten-music",
    serviceName: "Rakuten Music（楽天ミュージック）",
    companyName: "楽天",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "公式FAQ / 有料プランを解約するにはどうすればいいですか？",
        url: "https://music.faq.rakuten.net/s/detail/000005467",
      },
    ],
  },

  {
    slug: "d-animestore",
    serviceName: "dアニメストア",
    companyName: "株式会社NTTドコモ",
    primaryMethods: "アプリ（購入経路により異なる場合あり）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "公式 / 解約方法",
        url: "https://animestore.docomo.ne.jp/animestore/CF/help_qa_cancel",
      },
    ],
  },

  {
    slug: "hulu-japan",
    serviceName: "Hulu",
    companyName: "Hulu Japan",
    primaryMethods: "Web（支払い方法により異なる場合あり）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Hulu を解約する",
        url: "https://help.hulu.jp/hc/ja/articles/360044685633-Hulu-%E3%82%92%E8%A7%A3%E7%B4%84%E3%81%99%E3%82%8B",
      },
    ],
  },

  {
    slug: "abema-premium",
    serviceName: "ABEMA（有料視聴プラン）",
    companyName: "ABEMA",
    primaryMethods: "Web / アプリ（決済手段により異なる場合あり）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / 有料の視聴プランを解約する方法",
        url: "https://help.abema.tv/hc/ja/articles/360013441412-%E6%9C%89%E6%96%99%E3%81%AE%E8%A6%96%E8%81%B4%E3%83%97%E3%83%A9%E3%83%B3%E3%82%92%E8%A7%A3%E7%B4%84%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95",
      },
    ],
  },

  {
    slug: "amazon-music-unlimited",
    serviceName: "Amazon Music Unlimited",
    companyName: "Amazon（Amazon.co.jp）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Amazon Music Unlimitedのサブスクリプションをキャンセルする",
        url: "https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=GCRZL3F2UZMNP3T3",
      },
    ],
  },

  {
    slug: "kindle-unlimited",
    serviceName: "Kindle Unlimited",
    companyName: "Amazon（Amazon.co.jp）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Kindle Unlimitedの会員登録をキャンセルする",
        url: "https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=GLSQ4722655M4ZEJ",
      },
    ],
  },

  {
    slug: "audible",
    serviceName: "Audible",
    companyName: "Audible（Amazon）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / Audible会員の退会方法",
        url: "https://help.audible.co.jp/s/article/cancel-membership?language=ja",
      },
    ],
  },

  {
    slug: "line-music",
    serviceName: "LINE MUSIC",
    companyName: "LINE",
    primaryMethods: "Web（LINE STORE等。購入経路により異なる場合あり）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "ヘルプ / LINE MUSICをやめたい",
        url: "https://help2.line.me/LINEMusic/web/?contentId=10009638&lang=ja",
      },
    ],
  },

  {
    slug: "yahoo-premium",
    serviceName: "LYPプレミアム（旧Yahoo!プレミアム）",
    companyName: "LINEヤフー",
    primaryMethods: "Web（決済方法により異なる場合あり）",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2025年12月",
    officialLinks: [
      {
        label: "サポート / LYPプレミアムをやめたい（解約）",
        url: "https://support.yahoo-net.jp/PccPremium/s/article/H000013721",
      },
    ],
  },
];

// Convenience helpers
export const PHASE1_SLUGS = PHASE1_SERVICES.map((s) => s.slug);

export function getServiceBySlug(slug: string) {
  return PHASE1_SERVICES.find((s) => s.slug === slug) ?? null;
}
