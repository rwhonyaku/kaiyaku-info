// lib/services.ts

export type ServiceLink = {
  label: string;
  url: string;
};

export type ServiceSection = {
  title: string;
  items: string[];
};

export type ContractRouteNote = {
  route: string;
  management: string;
  notes?: string[];
};

export type ServiceRecord = {
  slug: string;

  // Template fields
  serviceName: string; // 【正式名称】
  companyName: string; // 【会社名】
  primaryMethods: string; // Web / アプリ / 電話 / 書面 (or combination)
  loginRequired: "必要" | "不要";
  timeEstimate?: string; // "記載なし" or omit; DO NOT guess
  asOf: string; // "YYYY年MM月" (reference date)
  officialLinks: ServiceLink[];

  // Optional: brief neutral notes that remain within your wording rules
  notes?: string[];
  officialProcedureSections?: ServiceSection[];

  cancellationEntryPoint?: string[];
  billingRouteNotes?: string[];
  cancellationTimingNotes?: string[];
  postCancellationAccess?: string[];
  cancellationVsAccountDeletion?: string[];
  confirmationNotes?: string[];
  unavailableOrExceptionNotes?: string[];
  officialSourceSummary?: string;
  contractRouteNotes?: ContractRouteNote[];
  seoTitle?: string;
  seoDescription?: string;
  searchIntentNotes?: ServiceSection[];

  /**
   * OPTIONAL MODULES (data-driven sections)
   * - Keep statements generic, “officially framed”, and non-guaranteeing.
   * - Only include points you can support from the linked official sources.
   */
  afterCancelPoints?: string[]; // 解約後どうなる（公式案内より）
  confirmationPoints?: string[]; // 解約できているか確認（公式案内より）
  troubleshootingPoints?: string[]; // 解約できない／請求が続く等（公式案内より）
  benefitsPoints?: string[]; // 特典・ポイント等（公式案内より）
  timingPoints?: string[]; // いつまで／タイミング（公式案内より）
};

export const PHASE1_SERVICES: ServiceRecord[] = [
  {
    slug: "netflix",
    serviceName: "Netflix",
    companyName: "Netflix, Inc.",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2026年07月",
    officialLinks: [
      { label: "ヘルプ / 解約", url: "https://help.netflix.com/ja/node/407" },
      {
        label: "メンバーシップの管理",
        url: "https://www.netflix.com/cancelplan",
      },
      {
        label: "アカウント",
        url: "https://www.netflix.com/Account",
      },
      { label: "利用規約", url: "https://help.netflix.com/legal/termsofuse" },
    ],
    cancellationEntryPoint: [
      "Netflixアカウントは、メンバーシップの管理ページからキャンセルできます。",
      "ログインしていない場合は、メンバーシップの管理ページを開く前にログインが必要です。",
      "管理ページで「キャンセル」を選び、「キャンセル手続きの完了」をタップまたはクリックする流れです。",
    ],
    billingRouteNotes: [
      "Netflixを含むパッケージに変更する場合、既存のNetflixアカウントをキャンセルする必要はなく、アカウントをパッケージにリンクする案内です。",
      "アカウントをパッケージに連携すると、パッケージに料金が含まれるようになり、Netflixに登録済みの支払い方法への請求がただちに停止されます。",
      "プリペイド・ギフトカードやキャンペーンの残高が残っている場合のキャンセルについて、公式ページ内に別項目があります。",
    ],
    cancellationTimingNotes: [
      "メンバーシップの一時停止を選択した場合、次の請求日まではNetflixの視聴を継続できます。",
      "一時停止は次の請求日から1ヵ月間適用され、その期間の料金は発生しません。",
      "一時停止期間は、最大3ヵ月間まで延長可能と記載されています。",
    ],
    postCancellationAccess: [
      "アカウントの再開はいつでも可能と案内されています。",
      "視聴履歴はアカウントが閉鎖してから24ヵ月間保存され、その期間内にメンバーシップを再開すれば同じ視聴履歴が表示されます。",
      "あなたにオススメ、マイ評価、アカウント詳細、ゲームプレイの履歴、ゲームの保存内容も24ヵ月間保存されると記載されています。",
    ],
    cancellationVsAccountDeletion: [
      "公式ページでは、アカウントからログアウトする、またはNetflixアプリを削除するだけでは、アカウントをキャンセルできないと説明されています。",
      "メンバーシップのキャンセルとアカウント削除に関する操作は、公式ページで案内されている方法に沿って行う扱いです。",
    ],
    confirmationNotes: [
      "キャンセル手続きが完了すると、アカウントに登録されているメールアドレスに確認メールが送信されます。",
    ],
    unavailableOrExceptionNotes: [
      "キャンセルの選択肢が表示されない場合に関する項目が、公式ページ内に用意されています。",
      "メンバーシップの一時停止機能はベーシックプランでは利用できません。",
      "自動口座振替、プリペイド・ギフトカード、一部のパートナー経由の支払いでは、メンバーシップの一時停止機能を利用できない場合があります。",
      "一時停止中はストリーミング再生や作品のダウンロードはできませんが、作品検索やマイリストへの追加は引き続き可能です。",
      "一時停止中にアカウントをパッケージに連携させた場合、一時停止の解除まで最大24時間かかる場合があります。",
    ],
    officialSourceSummary:
      "Netflixのヘルプでは、メンバーシップの管理ページからキャンセルを完了する流れ、確認メール、ログアウトやアプリ削除ではキャンセルにならない点が案内されています。Netflixを含むパッケージへ変更する場合は、既存アカウントをキャンセルせずにパッケージへリンクする扱いです。一時停止、再開、視聴履歴などの24ヵ月保存、プリペイド・ギフトカードやキャンペーン残高がある場合の項目も同じページで確認できます。",
    contractRouteNotes: [
      {
        route: "Netflix直接契約",
        management: "メンバーシップの管理ページ",
        notes: ["「キャンセル」から「キャンセル手続きの完了」へ進む案内です。"],
      },
      {
        route: "Netflixを含むパッケージ",
        management: "既存アカウントをパッケージにリンク",
        notes: [
          "パッケージに料金が含まれるようになるため、Netflixに登録済みの支払い方法への請求が停止されます。",
        ],
      },
    ],
  },

  {
    slug: "amazon-prime",
    serviceName: "Amazonプライム",
    companyName: "Amazon（Amazon.co.jp）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2026年07月",
    officialLinks: [
      {
        label: "ヘルプ / Amazonプライム会員登録をキャンセルする",
        url: "https://www.amazon.co.jp/gp/help/customer/display.html?nodeId=GTJQ7QZY7QL2HK4Y",
      },
      {
        label: "Amazonプライム会員登録のキャンセル",
        url: "https://www.amazon.co.jp/mm/pipeline/cancellation",
      },
      {
        label: "Amazonプライム会員情報",
        url: "https://www.amazon.co.jp/gp/primecentral",
      },
      {
        label: "プライム会員情報を管理する",
        url: "https://www.amazon.co.jp/mc?ref=cs_help_148618_03",
      },
    ],
    cancellationEntryPoint: [
      "Amazonプライム会員から退会する場合は、「Amazonプライム会員情報」ページにアクセスします。",
      "「プライム会員情報」を選択し、画面上の指示に従って手続きする案内です。",
      "公式ヘルプには、Amazonプライム会員登録のキャンセルページへのリンクも掲載されています。",
    ],
    billingRouteNotes: [
      "返金は、プライム会員会費の支払いに使用した支払い方法に対して行われます。",
      "Amazonギフトカードで支払った場合は、クレジットカードでの支払い分を返金した後、残額をAmazonギフトカード残高に返す扱いです。",
    ],
    cancellationTimingNotes: [
      "無料体験期間または有料会員期間が終了すると、アカウントは有料Amazonプライム会員アカウントとして自動更新されます。",
      "無料体験期間終了日または有料会員期間更新日は、「プライム会員情報を管理する」の上部に表示されます。",
      "「更新前にお知らせを受け取る」を選択している場合、Amazonプライム会員期間終了の3日前にEメールが届くと記載されています。",
    ],
    postCancellationAccess: [
      "Amazonプライム特典の利用がない有料会員は、現在の会員期間中の会費の全額返金を受けられると記載されています。",
      "プライム特典利用のない場合は、退会と同時に会費を返金する扱いです。",
      "返金は2〜3営業日以内に処理されると案内されています。",
    ],
    confirmationNotes: [
      "無料体験期間終了日または有料会員期間更新日は、「プライム会員情報を管理する」の上部で確認できます。",
    ],
    officialSourceSummary:
      "Amazon.co.jpのヘルプでは、Amazonプライム会員情報ページからプライム会員登録をキャンセルする流れが案内されています。特典を利用していない有料会員の返金、支払い方法別の返金先、返金処理の目安も同じページで確認できます。無料体験期間終了日や有料会員期間更新日は、プライム会員情報を管理する画面の上部に表示される記載です。",
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
    officialProcedureSections: [
      {
        title: "解約手順",
        items: [
          "Premiumプランは、アカウント情報ページからいつでも解約できます。",
          "アカウント情報ページを開きます。",
          "画面上部の「現在のプラン」または「プランを管理」で「プランをキャンセル」を選択します。",
          "最終確認画面まで手順を進めます。",
        ],
      },
      {
        title: "解約後の状態",
        items: [
          "Premiumプランは次の請求日まで利用できます。",
          "それ以降はアカウントがFreeプランに切り替わります。",
          "アカウントがFreeプランになっても、プレイリストや保存済みの音楽を引き続き利用できます。",
        ],
      },
      {
        title: "無料体験・別経路",
        items: [
          "無料体験中に解約すると、アカウントはSpotifyの無料サービスにすぐに切り替わります。",
          "無料体験を再開することはできません。",
          "パートナー企業と連携したプランでは、アカウントページに表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内です。",
          "Spotify Freeと表示されている場合は、解約が必要なPremiumプランがないことを示しています。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Premiumプランは、アカウント情報ページから解約できます。",
      "画面上部の「現在のプラン」または「プランを管理」から「プランをキャンセル」を選択し、最終確認画面まで手順を進める案内です。",
    ],
    billingRouteNotes: [
      "パートナー企業と連携したプランでは、アカウントページに表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内です。",
    ],
    cancellationTimingNotes: [
      "Premiumプランは次の請求日まで利用できます。",
      "無料体験中に解約すると、アカウントはSpotifyの無料サービスにすぐに切り替わります。",
      "無料体験を再開することはできません。",
    ],
    postCancellationAccess: [
      "次の請求日以降はアカウントがFreeプランに切り替わります。",
      "Freeプランになっても、プレイリストや保存済みの音楽を引き続き利用できます。",
    ],
    confirmationNotes: [
      "Spotify Freeと表示されている場合は、解約が必要なPremiumプランがないことを示しています。",
    ],
    unavailableOrExceptionNotes: [
      "パートナー企業と連携したプランでは、Spotifyの通常の解約導線ではなく、表示されるパートナー企業のお問い合わせ用リンクから進める案内です。",
    ],
    officialSourceSummary:
      "Spotify Premiumのサポートでは、アカウント情報ページからPremiumプランを解約し、最終確認画面まで進める流れが説明されています。解約後は次の請求日までPremiumを利用でき、その後Freeプランへ切り替わります。パートナー企業と連携したプランや、Spotify Free表示時の扱いも同じ案内内で確認できます。",
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
    officialProcedureSections: [
      {
        title: "Webでの手続き",
        items: [
          "music.apple.com/jp/ にアクセスします。",
          "ページ上部で「サインイン」を選択します。「サインイン」が表示されない場合は、この手順は飛ばしてください。",
          "マイアカウントアイコンから「設定」を開き、「サブスクリプション登録」の「管理」を選択します。",
          "「サブスクリプションをキャンセルする」を選択します。",
        ],
      },
      {
        title: "別経路の案内",
        items: [
          "Webでサブスクリプションを解約できない場合は、「設定」でサブスクリプションを解約する案内があります。",
          "Google Play経由でApple Musicの料金を支払っている場合は、Androidデバイス上のApple Musicアプリまたは play.google.com でのみ解約できます。",
        ],
      },
      {
        title: "有効期限後の取り扱い",
        items: [
          "サブスクリプションの有効期限が切れると、Apple Musicカタログの曲、Apple Musicカタログから追加したプレイリスト、Apple Musicカタログの音楽を使って作成したプレイリストは利用できなくなります。",
          "「ライブラリを同期」を使用している場合、有効期限が切れると「ライブラリを同期」はオフになります。",
          "登録前にデバイスにあった音楽やプレイリストは、引き続き利用できます。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Apple Music のWebページでは、music.apple.com/jp/ にサインインし、マイアカウントアイコンから「設定」を開いて「サブスクリプション登録」の「管理」を選ぶ流れが案内されています。",
      "Appleのサブスクリプション管理画面から解約する方法も、別のAppleサポートページで案内されています。",
    ],
    billingRouteNotes: [
      "Google Play経由でApple Musicの料金を支払っている場合は、Androidデバイス上のApple Musicアプリまたは play.google.com でのみ解約できると記載されています。",
      "Webで解約できない場合は、端末の「設定」からサブスクリプションを管理する案内へ分岐します。",
    ],
    cancellationTimingNotes: [
      "Apple Musicの説明では、サブスクリプションの有効期限が切れた後の利用可否が項目ごとに示されています。",
    ],
    postCancellationAccess: [
      "有効期限が切れると、Apple Musicカタログの曲、Apple Musicカタログから追加したプレイリスト、Apple Musicカタログの音楽を使って作成したプレイリストは利用できなくなります。",
      "登録前にデバイスにあった音楽やプレイリストは、引き続き利用できると記載されています。",
    ],
    confirmationNotes: [
      "サブスクリプション管理画面では、Apple Musicの登録状態や終了予定を確認する流れが案内されています。",
    ],
    unavailableOrExceptionNotes: [
      "「サブスクリプションをキャンセルする」が表示されない場合は、すでに解約済みで更新されない状態とするAppleサポートの案内があります。",
      "Google Play経由の支払いは、AppleのWebページではなくApple MusicアプリまたはGoogle Play側で扱う記載です。",
    ],
    officialSourceSummary:
      "Apple Musicのサポートページでは、Web上のApple Music設定画面から解約する流れと、Appleのサブスクリプション管理画面を使う方法が分けて掲載されています。Google Play経由の支払いについては、Androidデバイス上のApple Musicアプリまたは play.google.com でのみ解約できると説明されています。有効期限後に利用できなくなるApple Musicカタログ由来の項目も確認できます。",
    seoTitle:
      "Apple Musicの解約方法・Webと設定アプリの確認先",
    seoDescription:
      "Apple Musicの解約方法について、music.apple.com、Appleのサブスクリプション管理、Google Play経由の支払い、「サブスクリプションをキャンセルする」が表示されない場合を公式情報にもとづいて整理しています。",
    searchIntentNotes: [
      {
        title: "Apple Musicとアップルミュージック表記",
        items: [
          "このページで扱う対象は、Apple Musicのサブスクリプション解約です。",
          "Appleサポートでは、Web上のApple Music設定画面から解約する方法と、Appleのサブスクリプション管理から解約する方法が分けて案内されています。",
          "Google Play経由で料金を支払っている場合は、Androidデバイス上のApple Musicアプリまたは play.google.com でのみ解約できると記載されています。",
        ],
      },
      {
        title: "ボタン表示と有効期限後の扱い",
        items: [
          "「サブスクリプションをキャンセルする」が表示されない場合は、すでに解約済みで更新されない状態とするAppleサポートの案内があります。",
          "有効期限が切れると、Apple Musicカタログの曲やカタログから追加したプレイリストは利用できなくなります。",
          "登録前にデバイスにあった音楽やプレイリストは、引き続き利用できると記載されています。",
        ],
      },
    ],
    contractRouteNotes: [
      {
        route: "Web上のApple Music",
        management: "music.apple.com/jp/ の設定",
        notes: [
          "サインイン後、マイアカウントアイコンから「設定」を開き、「サブスクリプション登録」の「管理」を選ぶ流れです。",
        ],
      },
      {
        route: "Appleのサブスクリプション管理",
        management: "端末の設定またはAppleのサブスクリプション管理画面",
        notes: [
          "Webで解約できない場合は、端末の「設定」からサブスクリプションを管理する案内へ分岐します。",
        ],
      },
      {
        route: "Google Play経由の支払い",
        management: "Androidデバイス上のApple Musicアプリまたは play.google.com",
        notes: [
          "Apple MusicアプリまたはGoogle Play側でのみ解約できると記載されています。",
        ],
      },
    ],
    // Modules (keep conservative / official-framed)
    afterCancelPoints: [
      "解約後の利用可否（いつまで使えるか等）は、請求（更新）サイクルや契約状況により異なる場合があります。",
      "解約後に利用できなくなる機能・コンテンツがある場合があります（プラン／利用状況により異なる場合があります）。",
    ],
    confirmationPoints: [
      "サブスクリプション管理画面で、Apple Musicの状態（有効／終了予定等）を確認できる場合があります。",
    ],
    troubleshootingPoints: [
      "解約できない／解約したのに請求が続くと感じる場合、購入経路（端末／Web／他社決済等）により確認箇所が異なる場合があります。",
    ],
    timingPoints: [
      "次回請求（更新）前に手続きが必要な場合があります。",
      "解約のタイミングにより、当月（当期間）の扱いが異なる場合があります。",
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
      {
        label: "ヘルプ / Billing partnerships on Disney+",
        url: "https://help.disneyplus.com/article/disneyplus-third-party-subscription",
      },
      {
        label: "ヘルプ / How do I view my Disney+ billing history and charges?",
        url: "https://help.disneyplus.com/article/disneyplus-en-jp-view-charges",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約の確認先",
        items: [
          "Disney+ヘルプには、解約専用の記事「Disney+の解約方法」が案内されています。",
          "同じヘルプ導線内で、契約情報の確認先として「View my Disney+ subscription information」が案内されています。",
        ],
      },
      {
        title: "請求・決済の確認",
        items: [
          "支払い方法の確認・変更に関する案内として、「How do I update my Disney+ payment method?」が案内されています。",
          "請求履歴や請求金額の確認に関する案内として、「How do I view my Disney+ billing history and charges?」が案内されています。",
        ],
      },
      {
        title: "別経路・関連案内",
        items: [
          "第三者経由の契約に関する案内として、「Billing partnerships on Disney+」が案内されています。",
          "アカウント削除に関する案内として、「Deleting my Disney+ account」が別記事で案内されています。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Disney+ヘルプでは、「Disney+の解約方法」という解約専用の記事が用意されています。",
      "契約情報の確認先として、Disney+のサブスクリプション情報を確認するヘルプ導線が案内されています。",
    ],
    billingRouteNotes: [
      "請求履歴や請求金額は、Disney+の請求履歴・請求額に関するヘルプ記事で確認する構成です。",
      "第三者経由の契約については、「Billing partnerships on Disney+」として別記事が示されています。",
    ],
    cancellationVsAccountDeletion: [
      "Disney+ヘルプでは、解約方法とアカウント削除が別の記事として扱われています。",
    ],
    confirmationNotes: [
      "契約内容の確認は、Disney+のサブスクリプション情報を確認する導線で案内されています。",
      "請求履歴や請求額は、請求履歴・請求金額の確認記事に分かれています。",
    ],
    unavailableOrExceptionNotes: [
      "第三者経由の契約は、Disney+本体の契約とは別に、請求パートナーに関する記事で説明されています。",
    ],
    officialSourceSummary:
      "Disney+のヘルプでは、解約方法、サブスクリプション情報、支払い方法、請求履歴、第三者経由の契約が別記事として整理されています。アカウント削除は解約とは別のヘルプ記事で扱われています。契約経路や請求内容を確認する項目が複数のヘルプ記事に分かれている点が特徴です。",
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
    officialProcedureSections: [
      {
        title: "キャンセル手順",
        items: [
          "account.microsoft.com/services/microsoft365 に移動します。",
          "Microsoft 365 サブスクリプションの購入に使用したのと同じ Microsoft アカウントでサインインします。",
          "「サブスクリプションのキャンセル」を選択します（「アップグレード」または「キャンセル」と表示される場合があります）。",
          "取り消しページ上部の「確認してください」セクションを確認します。",
        ],
      },
      {
        title: "画面表示の分岐",
        items: [
          "キャンセルのオプションが表示されず、「定期請求を有効にする」というリンクが表示される場合は、有効期限がすでに設定されており、その日付以降は課金されません。",
          "その場合、これ以上の操作は必要ありません。",
          "サブスクリプションの有効期限が切れるまでは、引き続きサブスクリプションを使用できます。",
        ],
      },
      {
        title: "解約後の取り扱い",
        items: [
          "Microsoft 365 Basic、Personal、Family、Premium を取り消した場合、クラウドストレージ容量は 5 GB に戻り、Outlook.com ストレージは 15 GB に戻ります。",
          "Family または Premium を取り消した場合、共有していたユーザーのストレージ許容量も減ります。",
          "無料の許容量を超えて使用している場合、新しいファイルのアップロード・編集・同期や Outlook.com の送受信ができなくなり、6か月後に OneDrive とその中のファイルが削除される場合があります。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Microsoft 365の案内では、account.microsoft.com/services/microsoft365 に移動し、購入に使用したMicrosoftアカウントでサインインする流れです。",
      "「サブスクリプションのキャンセル」を選択しますが、画面上では「アップグレード」または「キャンセル」と表示される場合があります。",
    ],
    cancellationTimingNotes: [
      "キャンセルのオプションが表示されず、「定期請求を有効にする」というリンクが表示される場合は、有効期限がすでに設定されており、その日付以降は課金されません。",
      "サブスクリプションの有効期限が切れるまでは、引き続きサブスクリプションを使用できます。",
    ],
    postCancellationAccess: [
      "Microsoft 365 Basic、Personal、Family、Premiumを取り消した場合、クラウドストレージ容量は5GBに戻り、Outlook.comストレージは15GBに戻ります。",
      "FamilyまたはPremiumを取り消した場合、共有していたユーザーのストレージ許容量も減ります。",
      "無料の許容量を超えて使用している場合、新しいファイルのアップロード・編集・同期やOutlook.comの送受信ができなくなり、6か月後にOneDriveとその中のファイルが削除される場合があります。",
    ],
    confirmationNotes: [
      "取り消しページ上部の「確認してください」セクションを確認する案内があります。",
      "「定期請求を有効にする」というリンクが表示される場合は、有効期限が設定済みで、その日付以降は課金されない状態として説明されています。",
    ],
    unavailableOrExceptionNotes: [
      "キャンセルのオプションが表示されない場合の画面表示として、「定期請求を有効にする」というリンクが案内されています。",
    ],
    officialSourceSummary:
      "Microsoft 365のサポートでは、Microsoftアカウントのサービス管理ページからサブスクリプションをキャンセルする流れが案内されています。キャンセル項目が表示されない場合の表示内容や、有効期限まで利用できる扱いも説明されています。取り消し後のクラウドストレージ容量や共有ユーザーへの影響も具体的に記載されています。",
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
    notes: ["※サブスクリプションの購入経路（App Store等）により手続きが異なる場合があります。"],
    officialProcedureSections: [
      {
        title: "ダウングレード手順",
        items: [
          "サイドバーで「設定」→「請求」→「プランを変更」をクリックします。",
          "変更するプランを選択し、「続行」をクリックします。",
          "フィードバックを提供し、「ダウングレード」をクリックします。",
          "ダウングレードの確認と現在のプランの終了日が表示されます。",
        ],
      },
      {
        title: "返金・請求の扱い",
        items: [
          "月払の場合は登録から3日以内、年払の場合は30日以内にダウングレードされた場合、全額（日割り精算なし）が返金されます。",
          "誤って追加されたメンバーに対して請求された場合、請求日から72時間以内の連絡で、日割り計算された料金が返金されます。",
          "支払い方法は、請求設定でいつでも変更できます。",
        ],
      },
      {
        title: "操作環境とワークスペース単位",
        items: [
          "プランの変更はデスクトップかWebからのみ実施できます。",
          "同じメールアドレスで複数のチームに所属できますが、ワークスペースごとに独立したプランでの利用となるため、アップグレードも個別に実施する必要があります。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Notionのプラン変更は、サイドバーの「設定」から「請求」を開き、「プランを変更」を選ぶ流れです。",
      "変更するプランを選択し、フィードバック入力後に「ダウングレード」を実行する案内があります。",
    ],
    billingRouteNotes: [
      "サブスクリプションの購入経路がApp Store等の場合、手続きが異なる場合がある注記があります。",
      "支払い方法は、請求設定で変更できると説明されています。",
    ],
    cancellationTimingNotes: [
      "月払の場合は登録から3日以内、年払の場合は30日以内にダウングレードされた場合、全額（日割り精算なし）が返金されます。",
      "誤って追加されたメンバーに対して請求された場合、請求日から72時間以内の連絡で、日割り計算された料金が返金されます。",
    ],
    confirmationNotes: [
      "ダウングレードの確認と現在のプランの終了日が表示されます。",
    ],
    unavailableOrExceptionNotes: [
      "プランの変更はデスクトップかWebからのみ実施できます。",
      "同じメールアドレスで複数のチームに所属できますが、ワークスペースごとに独立したプランでの利用となるため、アップグレードも個別に実施する必要があります。",
    ],
    officialSourceSummary:
      "Notionのヘルプでは、請求設定からプランを変更し、ダウングレード確認と現在のプラン終了日を確認する流れが説明されています。月払・年払の返金期限、誤って追加されたメンバーへの請求時の連絡期限、支払い方法の変更先も同じ案内内で扱われます。プラン変更はデスクトップまたはWebから行う記載です。",
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
    cancellationEntryPoint: [
      "オンラインでプランを購入した場合、Zoomの請求ポータルからサブスクリプションをキャンセルできると案内されています。",
      "Zoomウェブポータルにサインインし、請求ポータルの場所に応じて「プランと請求」または「アカウント管理」配下から対象プランを管理します。",
    ],
    billingRouteNotes: [
      "営業の見積もりからプランを直接購入した場合、請求ポータルでキャンセルできる可能性があるほか、専任のアカウントエグゼクティブまたはZoomサポートへの連絡が案内されています。",
      "Google PlayストアまたはApple App Storeから購入したZoomサブスクリプションは、GoogleまたはAppleのキャンセルオプションを確認する案内です。",
    ],
    cancellationTimingNotes: [
      "キャンセルは次回更新日より有効になります。",
      "現在のサブスクリプション契約期間が終了するまでは、引き続きサービスを利用できます。",
      "営業の見積もりから購入したプランでリクエストされた変更は、見積に記載されている登録契約期間の終了時に実行されます。",
    ],
    postCancellationAccess: [
      "有料のベースプランをキャンセルすると、クラウドレコーディングにはアクセスできなくなります。",
      "クラウドレコーディングはキャンセルから30日後に永久に削除されると記載されています。",
    ],
    cancellationVsAccountDeletion: [
      "ベーシック（無料）アカウントの場合はサブスクリプションがないため、アカウント削除で処理が完了すると説明されています。",
    ],
    confirmationNotes: [
      "プランのキャンセル時には確認ウィンドウが表示され、キャンセルが有効になる時期などの条件が通知されます。",
      "確定するには「キャンセルを確定」をクリックする案内です。",
      "変更の確認メールが届くと記載されています。",
    ],
    unavailableOrExceptionNotes: [
      "アクティブなアドオンがある場合は、アドオンをキャンセルしてからベースプランをキャンセルする必要があります。",
      "Zoomウェブポータルで手順が表示されない場合やキャンセルオプションがグレーアウトしている場合は、自分でサブスクリプションをキャンセルできない可能性があると案内されています。",
      "「プランをキャンセル」オプションが表示されない場合は、ウェブポータルからプランをキャンセルできない旨のメッセージが表示されます。",
    ],
    officialSourceSummary:
      "Zoomのサポートでは、オンライン購入、営業見積もり経由、Google Playストア、Apple App Storeの購入経路ごとにキャンセル先が分かれて説明されています。Zoomウェブポータル内の請求ポータル位置に応じて、「プランと請求」または「アカウント管理」から対象プランを管理します。キャンセルは次回更新日から有効になり、確認ウィンドウや確認メール、クラウドレコーディングの扱いも記載されています。",
    contractRouteNotes: [
      {
        route: "オンライン購入",
        management: "Zoomの請求ポータル",
        notes: ["Zoomウェブポータルから対象プランを管理する案内です。"],
      },
      {
        route: "営業見積もり経由",
        management: "請求ポータル / 専任アカウントエグゼクティブ / Zoomサポート",
        notes: ["リクエストされた変更は、登録契約期間の終了時に実行されます。"],
      },
      {
        route: "Google Play / Apple App Store",
        management: "GoogleまたはAppleのキャンセルオプション",
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
    officialProcedureSections: [
      {
        title: "ドコモ契約の解約",
        items: [
          "スマートフォン／タブレット、PCともに、dアニメストアトップページ下部の「解約」から手続きを進めます。",
          "手続きの際には、本人確認のため2段階認証が必須です。",
          "ドコモ回線を持っている場合はネットワーク暗証番号による認証、ドコモ回線を持っていない場合はSMSによる2段階認証が行われます。",
        ],
      },
      {
        title: "App Store購入の解約",
        items: [
          "App Store にアクセスし、右上のアイコンを選択します。",
          "「サブスクリプション」を選択します。",
          "dアニメストアを選択後、「サブスクリプションをキャンセルする」を選択します。",
          "解約は App Store より行う必要があります。",
        ],
      },
      {
        title: "更新日・注意事項",
        items: [
          "契約は1か月ごとに自動更新されます。",
          "次回更新日は App Store の定期購入から確認できます。",
          "解約を希望する場合は、次回更新日の前日までにキャンセル処理の完了が必要です。",
          "解約後も更新日までは追加料金なしで利用できます。",
          "アプリをアンインストールしただけでは解約できません。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "ドコモ契約の場合は、スマートフォン／タブレット、PCともに、dアニメストアトップページ下部の「解約」から手続きを進めます。",
      "App Store購入の場合は、App Storeの「サブスクリプション」からdアニメストアを選び、「サブスクリプションをキャンセルする」を選択します。",
    ],
    billingRouteNotes: [
      "ドコモ契約の手続きでは、本人確認のため2段階認証が必須です。",
      "ドコモ回線を持っている場合はネットワーク暗証番号、ドコモ回線を持っていない場合はSMSによる2段階認証が行われます。",
      "App Store購入分の解約は、App Storeより行う必要があります。",
    ],
    cancellationTimingNotes: [
      "契約は1か月ごとに自動更新されます。",
      "次回更新日はApp Storeの定期購入から確認できます。",
      "解約を希望する場合は、次回更新日の前日までにキャンセル処理の完了が必要です。",
    ],
    postCancellationAccess: [
      "解約後も更新日までは追加料金なしで利用できます。",
    ],
    confirmationNotes: [
      "App Store購入の場合、次回更新日はApp Storeの定期購入から確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "アプリをアンインストールしただけでは解約できません。",
      "App Store購入分は、dアニメストア内ではなくApp Storeより解約する必要があります。",
    ],
    officialSourceSummary:
      "dアニメストアの解約案内では、ドコモ契約とApp Store購入で手続き先が分かれています。ドコモ契約ではトップページ下部の「解約」から進み、本人確認として2段階認証が必要です。App Store購入の場合はApp Storeのサブスクリプション管理から解約し、次回更新日や更新日前日までの手続き期限も確認できます。",
    contractRouteNotes: [
      {
        route: "ドコモ契約",
        management: "dアニメストアトップページ下部の「解約」",
        notes: ["本人確認のため2段階認証が必須です。"],
      },
      {
        route: "App Store購入",
        management: "App Storeのサブスクリプション管理",
        notes: ["次回更新日はApp Storeの定期購入から確認できます。"],
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
    officialProcedureSections: [
      {
        title: "まず確認する項目",
        items: [
          "解約操作をする機器を選択する案内です。",
          "お支払い方法ごとに解約方法が異なります。",
          "お支払い方法が不明な場合は、アカウントページ内の「登録済みのお支払い方法」から確認できます。",
        ],
      },
      {
        title: "決済方法ごとの分岐",
        items: [
          "クレジットカードなど一部の支払い方法では、https://id.hulu.jp/account にアクセスし、「解約する」または「キャンセル手続きに進む」を選択します。",
          "iTunes Store 決済は App Store のサブスクリプションからキャンセルします。",
          "Google Play 決済は Google Play のお支払いと定期購入ページから解約します。",
          "Amazonアプリ内決済は Amazon の定期購読ページから自動更新をオフにします。",
          "ケーブルテレビ決済は Hulu サイトからは解約できず、ケーブルテレビ局への連絡が案内されています。",
        ],
      },
      {
        title: "補足事項",
        items: [
          "オプションサービス経由の契約では、各社サイトからの解約手続きが案内されています。",
          "テレビ、Huluアプリからの解約はできません。",
          "解約ボタンが表示されない場合は、「解約ボタンがない場合」のヘルプページが案内されています。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Huluの解約案内では、解約操作をする機器を選択する構成です。",
      "クレジットカードなど一部の支払い方法では、https://id.hulu.jp/account にアクセスし、「解約する」または「キャンセル手続きに進む」を選択します。",
    ],
    billingRouteNotes: [
      "お支払い方法ごとに解約方法が異なります。",
      "お支払い方法が不明な場合は、アカウントページ内の「登録済みのお支払い方法」から確認できます。",
      "iTunes Store決済はApp Storeのサブスクリプションからキャンセルします。",
      "Google Play決済はGoogle Playのお支払いと定期購入ページから解約します。",
      "Amazonアプリ内決済はAmazonの定期購読ページから自動更新をオフにします。",
      "ケーブルテレビ決済はHuluサイトからは解約できず、ケーブルテレビ局への連絡が案内されています。",
    ],
    confirmationNotes: [
      "お支払い方法が不明な場合は、アカウントページ内の「登録済みのお支払い方法」から確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "オプションサービス経由の契約では、各社サイトからの解約手続きが案内されています。",
      "テレビ、Huluアプリからの解約はできません。",
      "解約ボタンが表示されない場合は、「解約ボタンがない場合」のヘルプページが案内されています。",
      "ケーブルテレビ決済はHuluサイトからは解約できず、ケーブルテレビ局への連絡が案内されています。",
    ],
    officialSourceSummary:
      "Huluのヘルプでは、解約操作をする機器と支払い方法によって手続き先が分かれる構成です。クレジットカード等はHuluアカウントページ、iTunes Store決済はApp Store、Google Play決済はGoogle Play、Amazonアプリ内決済はAmazonの定期購読ページで扱われます。テレビやHuluアプリからは解約できないこと、ケーブルテレビ決済やオプションサービス経由の契約は別の確認先になることも記載されています。",
    contractRouteNotes: [
      {
        route: "クレジットカード等",
        management: "Huluアカウントページ",
        notes: ["「解約する」または「キャンセル手続きに進む」を選択する案内です。"],
      },
      {
        route: "iTunes Store決済",
        management: "App Storeのサブスクリプション",
      },
      {
        route: "Google Play決済",
        management: "Google Playのお支払いと定期購入",
      },
      {
        route: "Amazonアプリ内決済",
        management: "Amazonの定期購読ページ",
      },
      {
        route: "ケーブルテレビ決済",
        management: "ケーブルテレビ局への連絡",
        notes: ["Huluサイトからは解約できない案内です。"],
      },
      {
        route: "オプションサービス経由",
        management: "各社サイトでの手続き",
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
    officialProcedureSections: [
      {
        title: "共通の注意事項",
        items: [
          "有料の視聴プランを解約するためには、解約手続きが必要です。",
          "有効期限の24時間前までに解約手続きを完了する必要があります。",
          "登録した決済手段ごとに解約方法が異なります。",
          "アプリをアンインストールしても定期購入は解約されません。",
          "解約手続きを行わずに端末の初期化や機種変更をした場合、定期購入は継続されます。",
        ],
      },
      {
        title: "Webブラウザ登録の手順",
        items: [
          "ABEMA公式サイトにアクセスします。",
          "サイト内メニューより「アカウント・設定」を選択します。",
          "「アカウント管理」→「視聴プラン」に表示されている「登録/解約する」をクリックします。",
          "現在のプランから解約する有料視聴プランの「解約に進む」をクリックします。",
          "アンケート入力後に「解約する」をクリックし、最終確認画面で再度「解約する」をクリックします。",
          "解約期限の横に「解約済み」と表示されていることを確認します。",
        ],
      },
      {
        title: "完了確認と別アカウント時の表示",
        items: [
          "解約手続き完了後は、登録メールアドレス宛に解約完了メールが送信されます。",
          "視聴プランに「無料」と表示される場合は、登録したアカウントとは別のアカウントでログインしている状況と案内されています。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Webブラウザ登録の場合は、ABEMA公式サイトのメニューから「アカウント・設定」を開き、「アカウント管理」→「視聴プラン」に進む案内です。",
      "視聴プランに表示されている「登録/解約する」から、対象プランの「解約に進む」を選択します。",
    ],
    billingRouteNotes: [
      "登録した決済手段ごとに解約方法が異なります。",
    ],
    cancellationTimingNotes: [
      "有効期限の24時間前までに解約手続きを完了する必要があります。",
    ],
    confirmationNotes: [
      "アンケート入力後に「解約する」をクリックし、最終確認画面で再度「解約する」をクリックする案内です。",
      "解約期限の横に「解約済み」と表示されていることを確認します。",
      "解約手続き完了後は、登録メールアドレス宛に解約完了メールが送信されます。",
    ],
    unavailableOrExceptionNotes: [
      "アプリをアンインストールしても定期購入は解約されません。",
      "解約手続きを行わずに端末の初期化や機種変更をした場合、定期購入は継続されます。",
      "視聴プランに「無料」と表示される場合は、登録したアカウントとは別のアカウントでログインしている状況と案内されています。",
    ],
    officialSourceSummary:
      "ABEMAのヘルプでは、有料視聴プランの解約には手続きが必要で、有効期限の24時間前までに完了する必要があると説明されています。Webブラウザ登録では、アカウント管理の視聴プランから対象プランの解約へ進み、最終確認画面まで操作します。解約済み表示、解約完了メール、別アカウントでログインしている場合の表示も確認できます。",
    contractRouteNotes: [
      {
        route: "Webブラウザ登録",
        management: "ABEMA公式サイトのアカウント管理",
        notes: ["視聴プランから対象プランの「解約に進む」を選択する案内です。"],
      },
      {
        route: "その他の決済手段",
        management: "登録した決済手段ごとの解約方法",
        notes: ["登録した決済手段ごとに解約方法が異なると記載されています。"],
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
      {
        label: "Amazon Music よくある質問",
        url: "https://www.amazon.co.jp/music/i/faq",
      },
      {
        label: "Amazon Musicの設定",
        url: "https://www.amazon.co.jp/music/settings",
      },
    ],
    officialProcedureSections: [
      {
        title: "確認先",
        items: [
          "現在登録しているプランは「Amazon Musicの設定」で確認できます。",
          "Amazon Music Unlimitedのキャンセルは、公式ヘルプのキャンセル案内ページから確認できます。",
        ],
      },
      {
        title: "iTunes請求の案内",
        items: [
          "Apple iPhoneまたはiPadのアプリ経由で登録している場合は、Appleデバイスを通じて会員登録をキャンセルする案内があります。",
          "iOSデバイス経由の自動更新のキャンセルや、iTunesアカウント情報の管理は、Appleサポートの案内先が示されています。",
        ],
      },
      {
        title: "解約後・無料体験",
        items: [
          "キャンセルした場合も、現在の請求サイクルの終了時点まで会員登録は継続します。",
          "無料体験期間やキャンペーン期間中は、その適用期間が終了するまで当該価格・条件が適用されます。",
          "無料体験期間終了後は、自動更新をオフにしない限り、更新日に都度請求されます。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "現在登録しているプランは「Amazon Musicの設定」で確認できます。",
      "Amazon Music Unlimitedのキャンセルは、Amazonのヘルプ「Amazon Music Unlimitedのサブスクリプションをキャンセルする」で案内されています。",
    ],
    billingRouteNotes: [
      "Apple iPhoneまたはiPadのアプリ経由で登録している場合は、Appleデバイスを通じて会員登録をキャンセルする案内があります。",
      "iOSデバイス経由の自動更新やiTunesアカウント情報の管理について、Appleサポートの案内先が示されています。",
    ],
    cancellationTimingNotes: [
      "キャンセルした場合も、現在の請求サイクルの終了時点まで会員登録は継続します。",
      "無料体験期間やキャンペーン期間中は、その適用期間が終了するまで当該価格・条件が適用されます。",
    ],
    postCancellationAccess: [
      "キャンセル後も、現在の請求サイクル終了時点までは会員登録が継続する記載です。",
    ],
    confirmationNotes: [
      "登録中のプランは「Amazon Musicの設定」で確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "iPhoneまたはiPadのアプリ経由で登録している場合は、Amazon側の設定ではなくAppleデバイス側で会員登録をキャンセルする案内です。",
    ],
    officialSourceSummary:
      "Amazon Music Unlimitedのヘルプでは、サブスクリプションのキャンセルと、登録中プランを確認する「Amazon Musicの設定」が案内されています。iPhoneまたはiPadアプリ経由の登録は、Appleデバイス側で会員登録をキャンセルする扱いです。キャンセル後も現在の請求サイクル終了時点まで会員登録が継続する点が明記されています。",
    seoTitle:
      "Amazon Music Unlimitedの解約方法・設定画面とiPhone経由の確認先",
    seoDescription:
      "Amazon Music Unlimitedの解約方法について、Amazon Musicの設定、現在の請求サイクル、iPhoneまたはiPadアプリ経由で登録した場合の確認先を公式情報にもとづいて整理しています。",
    searchIntentNotes: [
      {
        title: "Amazon Musicの設定で確認する項目",
        items: [
          "現在登録しているプランは「Amazon Musicの設定」で確認できます。",
          "Amazon Music Unlimitedのキャンセルは、Amazonのヘルプ「Amazon Music Unlimitedのサブスクリプションをキャンセルする」で案内されています。",
          "登録中プランの確認先とキャンセル案内ページが、公式リンクとして分かれています。",
        ],
      },
      {
        title: "アマゾンミュージック表記とUnlimited",
        items: [
          "このページで扱う対象は、Amazon Music Unlimitedのサブスクリプションです。",
          "Amazon Musicのよくある質問には、無料体験期間やキャンペーン期間、更新に関する記載があります。",
        ],
      },
    ],
    contractRouteNotes: [
      {
        route: "Amazon Music Unlimited",
        management: "Amazon Musicの設定",
        notes: [
          "登録中のプランを確認する画面として案内されています。",
          "キャンセル後も、現在の請求サイクル終了時点までは会員登録が継続する記載です。",
        ],
      },
      {
        route: "iPhoneまたはiPadアプリ経由の登録",
        management: "Appleデバイス側の会員登録管理",
        notes: [
          "Amazon側の設定ではなく、Appleデバイスを通じて会員登録をキャンセルする案内です。",
        ],
      },
      {
        route: "無料体験・キャンペーン期間",
        management: "Amazon Musicのよくある質問",
        notes: [
          "無料体験期間やキャンペーン期間中は、その適用期間が終了するまで当該価格・条件が適用されます。",
        ],
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
    officialProcedureSections: [
      {
        title: "公式確認先",
        items: [
          "Amazon には「Kindle Unlimitedの会員登録をキャンセルする」という公式ヘルプページがあります。",
          "Kindle Unlimitedの登録ページでは、期間終了後はキャンセルされるまで月額で自動更新される案内があります。",
        ],
      },
      {
        title: "確認しておきたい点",
        items: [
          "キャンセル手続きの確認先は、Amazonアカウント側の会員登録・購読情報に紐づく案内です。",
          "更新条件や適用中のオファーの細則は、Kindle Unlimited の公式ページで確認できます。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Amazonには「Kindle Unlimitedの会員登録をキャンセルする」という公式ヘルプページがあります。",
      "キャンセル手続きの確認先は、Amazonアカウント側の会員登録・購読情報に紐づく案内です。",
    ],
    cancellationTimingNotes: [
      "Kindle Unlimitedの登録ページでは、期間終了後はキャンセルされるまで月額で自動更新される案内があります。",
    ],
    confirmationNotes: [
      "更新条件や適用中のオファーの細則は、Kindle Unlimitedの公式ページで確認できます。",
    ],
    officialSourceSummary:
      "Kindle Unlimitedの公式情報では、会員登録のキャンセルに関するヘルプページと、登録ページ上の自動更新条件が確認できます。キャンセル手続きはAmazonアカウント側の会員登録・購読情報に紐づく案内です。適用中のオファーや更新条件はKindle Unlimitedの公式ページで確認する構成です。",
  },

  {
    slug: "audible",
    serviceName: "Audible",
    companyName: "Audible（Amazon）",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2026年05月",
    officialLinks: [
      {
        label: "ヘルプ / Audible会員の退会方法",
        url: "https://help.audible.co.jp/s/article/cancel-membership?language=ja",
      },
    ],
    officialProcedureSections: [
      {
        title: "退会の確認先",
        items: [
          "Audible ヘルプセンターでは、「Audible会員の退会方法」が案内されています。",
          "アカウント関連の一覧でも、退会方法はアカウント管理の項目として掲載されています。",
        ],
      },
      {
        title: "決済経路による分岐",
        items: [
          "Google Play ストアまたは App Store で登録した場合、会員プランの管理は各ストア側で行う案内があります。",
          "ストア経由の支払いは、Apple または Google が直接対応すると案内されています。",
        ],
      },
      {
        title: "更新と無料体験",
        items: [
          "無料体験がある場合は体験期間終了後から、ない場合は登録時から月額料金が発生します。",
          "会員プランは退会するまで自動更新です。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Audibleヘルプセンターでは、「Audible会員の退会方法」がアカウント管理の項目として案内されています。",
    ],
    billingRouteNotes: [
      "Google PlayストアまたはApp Storeで登録した場合、会員プランの管理は各ストア側で行う案内があります。",
      "ストア経由の支払いは、AppleまたはGoogleが直接対応すると記載されています。",
    ],
    cancellationTimingNotes: [
      "無料体験がある場合は体験期間終了後から、ない場合は登録時から月額料金が発生します。",
      "会員プランは退会するまで自動更新です。",
    ],
    unavailableOrExceptionNotes: [
      "Google PlayストアまたはApp Storeで登録した会員プランは、Audible側ではなく各ストア側で管理する案内です。",
    ],
    officialSourceSummary:
      "Audibleのヘルプでは、会員の退会方法がアカウント管理の項目として掲載されています。Google PlayストアまたはApp Store経由の登録は、各ストア側で会員プランを管理する扱いです。無料体験の有無による料金発生時点と、自動更新についても記載されています。",
    contractRouteNotes: [
      {
        route: "Audibleヘルプセンター",
        management: "Audible会員の退会方法",
        notes: ["アカウント管理の項目として案内されています。"],
      },
      {
        route: "Google Play / App Store",
        management: "各ストア側の会員プラン管理",
        notes: ["ストア経由の支払いは、AppleまたはGoogleが直接対応すると案内されています。"],
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
    asOf: "2026年05月",
    officialLinks: [
      {
        label: "ヘルプ / LINE MUSICをやめたい",
        url: "https://help2.line.me/LINEMusic/web/?contentId=10009638&lang=ja",
      },
    ],
    officialProcedureSections: [
      {
        title: "最初に確認する項目",
        items: [
          "プランの購入場所と決済方法によって解約手順が異なります。",
          "ブラウザ版にログインし、会員情報の購入内訳で購入場所と決済方法を確認する案内があります。",
          "無料期間中に解約する場合も、同じ解約手順です。",
        ],
      },
      {
        title: "購入経路ごとの解約先",
        items: [
          "Google 表示の場合は、アプリ内のプラン管理から Google Play 側で定期購入を解約します。",
          "Apple 表示の場合は、アプリ内のプラン管理から App Store 側でサブスクリプションを解約します。",
          "LINE STORE 表示の場合は、LINE STORE のプラン管理から解約します。",
          "SoftBank Mobile、Y!mobile、LINEMO と表示される場合は、各キャリアのオプションサービス変更ページで解除手続きを行います。",
        ],
      },
      {
        title: "表示と利用期間",
        items: [
          "解約が完了している場合、購入経路によっては「すでに解約完了しました。」または利用終了日の表示で確認できます。",
          "現在のプランの有効期限が終わる 24 時間前までに解約処理を行う案内があります。",
          "プラン解約後も、有効期限までは引き続きサービスを利用できます。",
          "LINE MUSIC アプリをアンインストールしても、自動更新は解約されません。",
        ],
      },
      {
        title: "退会との違い",
        items: [
          "LINE MUSIC アカウントを削除するには、プランを解約し、保有しているチケットの有効期限終了後に退会操作を行う案内があります。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "ブラウザ版にログインし、会員情報の購入内訳で購入場所と決済方法を確認する案内があります。",
      "プランの購入場所と決済方法によって解約手順が異なります。",
    ],
    billingRouteNotes: [
      "Google表示の場合は、アプリ内のプラン管理からGoogle Play側で定期購入を解約します。",
      "Apple表示の場合は、アプリ内のプラン管理からApp Store側でサブスクリプションを解約します。",
      "LINE STORE表示の場合は、LINE STOREのプラン管理から解約します。",
      "SoftBank Mobile、Y!mobile、LINEMOと表示される場合は、各キャリアのオプションサービス変更ページで解除手続きを行います。",
    ],
    cancellationTimingNotes: [
      "無料期間中に解約する場合も、同じ解約手順です。",
      "現在のプランの有効期限が終わる24時間前までに解約処理を行う案内があります。",
    ],
    postCancellationAccess: [
      "プラン解約後も、有効期限までは引き続きサービスを利用できます。",
    ],
    cancellationVsAccountDeletion: [
      "LINE MUSICアカウントを削除するには、プランを解約し、保有しているチケットの有効期限終了後に退会操作を行う案内があります。",
    ],
    confirmationNotes: [
      "解約が完了している場合、購入経路によっては「すでに解約完了しました。」または利用終了日の表示で確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "LINE MUSICアプリをアンインストールしても、自動更新は解約されません。",
    ],
    officialSourceSummary:
      "LINE MUSICのヘルプでは、購入場所と決済方法を確認したうえで、Google、Apple、LINE STORE、キャリア決済ごとの解約先を分けて案内しています。無料期間中も同じ解約手順として扱われます。解約完了の表示、有効期限までの利用、アプリ削除では自動更新が止まらない点も同じページ内で確認できます。",
    contractRouteNotes: [
      {
        route: "Google",
        management: "Google Playの定期購入",
        notes: ["アプリ内のプラン管理からGoogle Play側で解約する案内です。"],
      },
      {
        route: "Apple",
        management: "App Storeのサブスクリプション",
        notes: ["アプリ内のプラン管理からApp Store側で解約する案内です。"],
      },
      {
        route: "LINE STORE",
        management: "LINE STOREのプラン管理",
      },
      {
        route: "SoftBank Mobile / Y!mobile / LINEMO",
        management: "各キャリアのオプションサービス変更ページ",
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
      {
        label: "LYPプレミアムヘルプ",
        url: "https://support.yahoo-net.jp/PccPremium/s/",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約関連の公式導線",
        items: [
          "LYPプレミアムヘルプでは、「LYPプレミアムをやめたい（解約したい）」が案内されています。",
          "ログインできない場合は、「LYPプレミアムをやめたい（ログインできない）」の案内が用意されています。",
        ],
      },
      {
        title: "請求・会員状態の確認",
        items: [
          "請求金額の確認先として、「請求金額を確認したい」が案内されています。",
          "会員状態の確認先として、「LYPプレミアム会員かを確認したい」が案内されています。",
        ],
      },
      {
        title: "関連する確認先",
        items: [
          "ヘルプ内では「支払について」「請求について」のカテゴリが案内されています。",
          "「LYPプレミアム with Netflixについて」も別カテゴリで案内されています。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "LYPプレミアムサポートでは、「LYPプレミアムをやめたい（解約したい）」が解約関連の導線として案内されています。",
      "ログインできない場合は、「LYPプレミアムをやめたい（ログインできない）」の案内が別に用意されています。",
    ],
    billingRouteNotes: [
      "ヘルプ内では「支払について」「請求について」のカテゴリが分かれています。",
      "請求金額の確認先として、「請求金額を確認したい」が案内されています。",
      "「LYPプレミアム with Netflixについて」も別カテゴリで扱われています。",
    ],
    cancellationTimingNotes: [
      "次回請求日前の手続きが必要な場合があります。",
    ],
    postCancellationAccess: [
      "解約後の特典・機能の利用可否は、契約状況や決済方法により異なる場合があります。",
      "解約後もしばらく利用可能なサービス・特典がある場合があります。",
    ],
    confirmationNotes: [
      "会員状態の確認先として、「LYPプレミアム会員かを確認したい」が案内されています。",
      "請求金額は、請求金額確認のヘルプ項目で確認する構成です。",
    ],
    unavailableOrExceptionNotes: [
      "ログインできない場合の解約案内が、通常の解約案内とは別に用意されています。",
      "決済経路によって手続き先が異なる場合がある旨の注記があります。",
    ],
    officialSourceSummary:
      "LYPプレミアムのサポートでは、解約、ログインできない場合、会員状態、請求金額、支払い・請求カテゴリが分かれて案内されています。LYPプレミアム with Netflixは別カテゴリとして扱われます。決済方法や契約状況によって表示や確認先が分かれる可能性があるため、会員状態と請求項目の確認導線が重要な構成になっています。",
    // Modules (keep conservative / official-framed)
    afterCancelPoints: [
      "解約後の特典・機能の利用可否は、契約状況や決済方法により異なる場合があります。",
      "解約後もしばらく利用可能なサービス・特典がある場合があります。",
    ],
    benefitsPoints: [
      "会員特典（例：ポイント・優待等）の取り扱いは、付与状況や条件により異なる場合があります。",
      "PayPay等の連携がある場合、連携状況・適用条件により表示や扱いが異なる場合があります。",
    ],
    troubleshootingPoints: [
      "解約できない／解約したのに反映されないと感じる場合、決済経路（例：携帯会社決済等）により手続き先が異なる場合があります。",
    ],
    timingPoints: ["次回請求日前の手続きが必要な場合があります。"],
    confirmationPoints: [
      "会員状態（加入中かどうか等）は、公式の会員情報ページ等で確認できる場合があります。",
    ],
  },
  {
    slug: "u-next",
    serviceName: "U-NEXT",
    companyName: "U-NEXT",
    primaryMethods: "Web（支払方法により異なる場合あり）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "ヘルプ / 解約する方法",
        url: "https://help.unext.jp/guide/detail/how-to-cancel-the-contract",
      },
      {
        label: "ヘルプ / 「解約」と「退会」の違い",
        url: "https://help.unext.jp/guide/detail/difference-between-cancell-and-withdrawal",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約と退会の違い",
        items: [
          "「解約」は月額プランなど、月額サービスの課金を停止する手続きです。",
          "解約後もアカウントは残り、購入済み動画の視聴、保有ポイントの利用、レンタル作品の利用、購入済み電子書籍・コミックの閲覧、無料マンガの閲覧が可能と案内されています。",
          "「退会」はU-NEXTのアカウントを完全に削除する手続きで、購入済み作品は視聴不可となり、ポイントはすべて失効し、取り消しはできません。",
          "月額サービスが継続中の場合は、退会はできないと案内されています。",
        ],
      },
      {
        title: "事前に確認する項目",
        items: [
          "テレビ上のアプリからは解約手続きはできません。",
          "アプリ削除やログアウトでは「解約」になりません。",
          "複数のサービスに申し込んでいる場合、それぞれ個別に解約が必要です。",
          "他社経由の申込で利用している場合は、U-NEXTでは解約できません。",
        ],
      },
      {
        title: "申込方法ごとの分岐",
        items: [
          "申込（支払い）方法により操作が異なり、A〜Dの申込パターンから該当する方法を選ぶ案内です。",
          "Amazon、Apple、Google Play で申し込んだ場合は、それぞれのアカウントでの操作が必要です。",
          "Amazon、Apple、Google Play 以外で申し込んだ場合は、メインアカウントで操作し、解約手続き完了後すぐに視聴できなくなると案内されています。",
        ],
      },
      {
        title: "料金・視聴の扱い",
        items: [
          "Amazon、Apple、Google Play で申し込んだ場合は、解約後も次回更新日まで視聴できます。",
          "U-NEXTから請求されるパターンでは、解約手続き完了後すぐに視聴できなくなります。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "申込（支払い）方法により操作が異なり、公式ヘルプではA〜Dの申込パターンから該当する方法を選ぶ構成です。",
      "Amazon、Apple、Google Playで申し込んだ場合は、それぞれのアカウントで操作する案内があります。",
      "Amazon、Apple、Google Play以外で申し込んだ場合は、メインアカウントで操作する記載です。",
    ],
    billingRouteNotes: [
      "Amazon、Apple、Google Playで申し込んだ場合は、それぞれの契約経路で解約手続きを行います。",
      "他社経由の申込で利用している場合は、U-NEXTでは解約できないと案内されています。",
    ],
    cancellationTimingNotes: [
      "31日間無料トライアル中に解約する場合は月額料金が発生しません。",
      "Apple ID決済の月額プランは、解約後も期間終了日まで利用できる記載です。",
    ],
    postCancellationAccess: [
      "Amazon、Apple、Google Playで申し込んだ場合は、解約後も次回更新日まで視聴できます。",
      "U-NEXTから請求されるパターンでは、解約手続き完了後すぐに視聴できなくなると案内されています。",
      "解約後もアカウントは残り、購入済み動画の視聴、保有ポイントの利用、レンタル作品の利用、購入済み電子書籍・コミックの閲覧、無料マンガの閲覧が可能と説明されています。",
    ],
    cancellationVsAccountDeletion: [
      "「解約」は月額プランなど、月額サービスの課金を停止する手続きです。",
      "「退会」はU-NEXTのアカウントを完全に削除する手続きで、購入済み作品は視聴不可となり、ポイントはすべて失効し、取り消しはできません。",
      "月額サービスが継続中の場合は、退会はできないと案内されています。",
    ],
    confirmationNotes: [
      "解約状況の確認先は、支払方法によって分かれます。",
    ],
    unavailableOrExceptionNotes: [
      "テレビ上のアプリからは解約手続きはできません。",
      "アプリ削除やログアウトでは「解約」になりません。",
      "複数のサービスに申し込んでいる場合、それぞれ個別に解約が必要です。",
      "他社経由の申込で利用している場合は、U-NEXTでは解約できません。",
    ],
    officialSourceSummary:
      "U-NEXTのヘルプでは、月額サービスの課金を止める「解約」と、アカウントを削除する「退会」が明確に分けて説明されています。申込方法ごとに解約先が分かれ、Amazon、Apple、Google Play経由と、それ以外のメインアカウント操作で扱いが異なります。解約後に視聴できる期間も契約経路によって異なる記載です。",
    notes: [
      "アプリの削除やログアウトは、サービスの解約手続きとは別です。",
    ],
    afterCancelPoints: [
      "解約後もアカウント自体は残ります。",
      "保有ポイントや利用可否の扱いは、公式ページの案内に沿って確認できます。",
    ],
    confirmationPoints: [
      "解約状況の確認先は、支払方法によって分かれます。",
    ],
    troubleshootingPoints: [
      "Apple ID、Google Play、Amazon等の決済経路や、提携事業者経由で利用している場合は、手続き先が異なります。",
    ],
    benefitsPoints: [
      "解約と退会では、保有ポイントやアカウント情報の扱いが異なります。",
    ],
    timingPoints: [
      "31日間無料トライアル中に解約する場合は月額料金が発生しません。",
      "Apple ID決済の月額プランは、解約後も期間終了日まで利用できます。",
    ],
  },

  {
    slug: "dmagazine",
    serviceName: "dマガジン",
    companyName: "NTTドコモ",
    primaryMethods: "Web",
    loginRequired: "必要",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "ヘルプ / よくある質問",
        url: "https://dmagazine.docomo.ne.jp/help/faq/",
      },
      {
        label: "ヘルプ / 解約",
        url: "https://dmagazine.docomo.ne.jp/help/register/delete",
      },
    ],
    notes: [
      "解約手続きは、ヘッダーのdアカウントメニューではなく、ページ下部の「dマガジン会員登録/解約」から行います。",
    ],
    cancellationEntryPoint: [
      "解約手続きは、ヘッダーのdアカウントメニューではなく、ページ下部の「dマガジン会員登録/解約」から行う案内です。",
    ],
    cancellationTimingNotes: [
      "月途中で解約した場合でも日割り返金はありません。",
    ],
    postCancellationAccess: [
      "解約後はダウンロード済みの雑誌を含めて閲覧できなくなります。",
    ],
    confirmationNotes: [
      "手続き後はdマガジンの契約状況画面やMy docomoで確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "別のdアカウントで契約している場合や、解約後の反映まで時間を要する場合があります。",
    ],
    officialSourceSummary:
      "dマガジンのヘルプでは、ページ下部の「dマガジン会員登録/解約」から手続きする導線が案内されています。月途中の解約でも日割り返金はなく、解約後はダウンロード済みの雑誌を含めて閲覧できなくなる記載です。契約状況はdマガジンの契約状況画面やMy docomoで確認できます。",
    afterCancelPoints: [
      "解約後はダウンロード済みの雑誌を含めて閲覧できなくなります。",
    ],
    confirmationPoints: [
      "手続き後はdマガジンの契約状況画面やMy docomoで確認できます。",
    ],
    troubleshootingPoints: [
      "別のdアカウントで契約している場合や、解約後の反映まで時間を要する場合があります。",
    ],
    timingPoints: [
      "月途中で解約した場合でも日割り返金はありません。",
    ],
  },

  {
    slug: "google-one",
    serviceName: "Google One",
    companyName: "Google",
    primaryMethods: "アプリ / Web（購入経路により異なる場合あり）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Google One ヘルプ / Google One メンバーシップを解約する",
        url: "https://support.google.com/googleone/answer/9056360?hl=ja",
      },
      {
        label: "Google One ヘルプ / 購入、解約、払い戻しのポリシー",
        url: "https://support.google.com/googleone/answer/2736362?hl=ja",
      },
    ],
    notes: [
      "App Store 経由で購入した場合は、App Store 側で解約します。",
    ],
    cancellationEntryPoint: [
      "Google Oneメンバーシップの解約方法は、Google Oneヘルプで案内されています。",
      "App Store経由で購入した場合は、App Store側で解約します。",
    ],
    billingRouteNotes: [
      "App Store経由で購入した場合は、Google One側ではなくApp Store側で解約する案内です。",
    ],
    cancellationTimingNotes: [
      "解約後も利用期間終了までは有料メンバーシップが続きます。",
    ],
    postCancellationAccess: [
      "解約後は追加ストレージや会員特典が利用できなくなります。",
      "使用量が15GBを超えている場合は、解約後の取り扱いに制限が生じます。",
      "Google Oneメンバー特典の扱いは、解約後に変わります。",
    ],
    unavailableOrExceptionNotes: [
      "Google One以外のストレージサービスに切り替える場合の手順が、公式ヘルプで別途案内されています。",
    ],
    officialSourceSummary:
      "Google Oneのヘルプでは、メンバーシップの解約と購入・解約・払い戻しポリシーが別ページで案内されています。App Store経由で購入した場合はApp Store側で解約する扱いです。解約後も利用期間終了までは有料メンバーシップが続き、終了後は追加ストレージや会員特典、15GB超過時の扱いに影響します。",
    contractRouteNotes: [
      {
        route: "Google One",
        management: "Google Oneメンバーシップの解約",
      },
      {
        route: "App Store購入",
        management: "App Store側のサブスクリプション管理",
      },
    ],
    afterCancelPoints: [
      "解約後は追加ストレージや会員特典が利用できなくなります。",
      "使用量が 15 GB を超えている場合は、解約後の取り扱いに制限が生じます。",
    ],
    troubleshootingPoints: [
      "Google One 以外のストレージサービスに切り替える場合の手順が、公式ヘルプで別途案内されています。",
    ],
    benefitsPoints: [
      "Google One メンバー特典の扱いは、解約後に変わります。",
    ],
    timingPoints: [
      "解約後も利用期間終了までは有料メンバーシップが続きます。",
    ],
  },

  {
    slug: "icloud-plus",
    serviceName: "iCloud+",
    companyName: "Apple Inc.",
    primaryMethods: "端末（サブスクリプション管理） / Web",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Apple サポート / iCloud+ をダウングレードするまたは解約する",
        url: "https://support.apple.com/ja-jp/108318",
      },
      {
        label: "Apple サポート / Apple デバイスがなくてもサブスクリプションを解約する",
        url: "https://support.apple.com/ja-jp/121290",
      },
    ],
    cancellationEntryPoint: [
      "iCloud+のダウングレードまたは解約は、Appleサポートで案内されています。",
      "Appleデバイスが手元にない場合の解約方法も、別のAppleサポートページで案内されています。",
    ],
    cancellationTimingNotes: [
      "ストレージ容量の変更は、請求期間終了後に適用されます。",
    ],
    postCancellationAccess: [
      "解約後はiCloud+の機能（例：プライベートリレー、非公開メール中継等）が利用できなくなります。",
      "保存量が新しいプラン容量を超える場合は、同期やバックアップの扱いに影響します。",
    ],
    unavailableOrExceptionNotes: [
      "Appleデバイスが手元にない場合の解約方法が、公式サポートで別途案内されています。",
    ],
    officialSourceSummary:
      "iCloud+のAppleサポートでは、プランのダウングレードまたは解約と、Appleデバイスがない場合のサブスクリプション解約方法が分けて案内されています。ストレージ容量の変更は請求期間終了後に適用されます。解約後はiCloud+機能や、保存量が新しい容量を超えている場合の同期・バックアップに影響します。",
    afterCancelPoints: [
      "解約後は iCloud+ の機能（例：プライベートリレー、非公開メール中継等）が利用できなくなります。",
      "保存量が新しいプラン容量を超える場合は、同期やバックアップの扱いに影響します。",
    ],
    troubleshootingPoints: [
      "Apple デバイスが手元にない場合の解約方法が、公式サポートで別途案内されています。",
    ],
    timingPoints: [
      "ストレージ容量の変更は、請求期間終了後に適用されます。",
    ],
  },

  {
    slug: "canva",
    serviceName: "Canva",
    companyName: "Canva",
    primaryMethods: "Web",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Canva / 利用規約",
        url: "https://www.canva.com/ja_jp/policies/terms-of-use/",
      },
    ],
    notes: [
      "利用規約上、アカウント設定からサブスクリプションを解約する形です。",
    ],
    cancellationEntryPoint: [
      "利用規約上、アカウント設定からサブスクリプションを解約する形です。",
    ],
    cancellationTimingNotes: [
      "解約は次の請求期間の開始前までに行い、効力は請求期間終了時に発生します。",
      "無料トライアルは、終了前に解約すると課金されません。",
    ],
    postCancellationAccess: [
      "解約後のデザイン、ユーザーコンテンツ、アップロード情報の扱いは、公式規約に沿って確認できます。",
      "共有中のデザインについては、解約後も利用可否の扱いが記載されている場合があります。",
    ],
    officialSourceSummary:
      "Canvaの利用規約では、サブスクリプションの解約はアカウント設定から行う形として整理されています。解約は次の請求期間の開始前までに行い、効力は請求期間終了時に発生します。無料トライアルは終了前に解約すると課金されない扱いです。",
    afterCancelPoints: [
      "解約後のデザイン、ユーザーコンテンツ、アップロード情報の扱いは、公式規約に沿って確認できます。",
      "共有中のデザインについては、解約後も利用可否の扱いが記載されている場合があります。",
    ],
    timingPoints: [
      "解約は次の請求期間の開始前までに行い、効力は請求期間終了時に発生します。",
      "無料トライアルは、終了前に解約すると課金されません。",
    ],
  },

  {
    slug: "evernote",
    serviceName: "Evernote",
    companyName: "Evernote",
    primaryMethods: "Web / App Store / Google Play",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Evernote ヘルプ / Evernote Personal を解約する",
        url: "https://help.evernote.com/hc/ja/articles/115005949208-Evernote-Personal-%E3%82%92%E8%A7%A3%E7%B4%84%E3%81%99%E3%82%8B",
      },
      {
        label: "Evernote Help / How to downgrade to Starter",
        url: "https://help.evernote.com/hc/en-us/articles/46706074208531-How-to-downgrade-to-Starter",
      },
    ],
    notes: [
      "解約手続きは、決済方法によって Web、App Store、Google Play のいずれかに分かれます。",
    ],
    cancellationEntryPoint: [
      "Evernote Personalの解約手続きは、決済方法によってWeb、App Store、Google Playのいずれかに分かれます。",
    ],
    billingRouteNotes: [
      "Web、App Store、Google Playのどの決済方法かによって、手続き先が分かれる案内です。",
    ],
    cancellationTimingNotes: [
      "直接課金のプランは、次回更新日にダウングレードが適用されます。",
    ],
    postCancellationAccess: [
      "解約後は現在の請求期間終了後にFree / Starterへ移行します。",
      "ノートやノートブックは、無料プランの利用条件の範囲で引き続きアクセスできます。",
    ],
    officialSourceSummary:
      "Evernoteのヘルプでは、Evernote Personalの解約とStarterへのダウングレードが案内されています。決済方法によってWeb、App Store、Google Playのいずれかに手続き先が分かれます。直接課金のプランは次回更新日にダウングレードが適用され、現在の請求期間終了後にFree / Starterへ移行します。",
    contractRouteNotes: [
      {
        route: "Web / 直接課金",
        management: "Evernote側のプラン管理",
        notes: ["直接課金のプランは、次回更新日にダウングレードが適用されます。"],
      },
      {
        route: "App Store",
        management: "App Store側のサブスクリプション管理",
      },
      {
        route: "Google Play",
        management: "Google Play側の定期購入管理",
      },
    ],
    afterCancelPoints: [
      "解約後は現在の請求期間終了後に Free / Starter へ移行します。",
      "ノートやノートブックは、無料プランの利用条件の範囲で引き続きアクセスできます。",
    ],
    timingPoints: [
      "直接課金のプランは、次回更新日にダウングレードが適用されます。",
    ],
  },

  {
    slug: "awa",
    serviceName: "AWA",
    companyName: "AWA",
    primaryMethods: "Web / App Store / Google Play",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "ガイド / プランを解約したい",
        url: "https://guide.awa.fm/hc/ja/articles/115009409488-%E3%83%97%E3%83%A9%E3%83%B3%E3%82%92%E8%A7%A3%E7%B4%84%E3%81%97%E3%81%9F%E3%81%84",
      },
      {
        label: "ガイド / アカウントを削除したい",
        url: "https://guide.awa.fm/hc/ja/articles/360009074954-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%82%92%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E3%81%84",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約と削除の区別",
        items: [
          "有料プランの解約とアカウント削除は別の手続きです。",
          "有料プランについては「プランを解約したい」、アカウントについては「アカウントを削除したい」の案内が分かれています。",
        ],
      },
      {
        title: "確認先と分岐",
        items: [
          "ステータス画面では、契約中プランや利用終了予定日を確認できます。",
          "optage、mineo、eo などの提携先経由は、提携先ごとの解約先が案内されています。",
        ],
      },
      {
        title: "更新・無料体験",
        items: [
          "次回購入期間が始まる 24 時間前までの手続きが案内されています。",
          "無料体験を解約後に再度有料会員へ登録した場合、無料体験は適用されません。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "有料プランについては「プランを解約したい」、アカウントについては「アカウントを削除したい」の案内が分かれています。",
      "ステータス画面では、契約中プランや利用終了予定日を確認できます。",
    ],
    billingRouteNotes: [
      "optage、mineo、eoなどの提携先経由は、提携先ごとの解約先が案内されています。",
    ],
    cancellationTimingNotes: [
      "次回購入期間が始まる24時間前までの手続きが案内されています。",
      "無料体験を解約後に再度有料会員へ登録した場合、無料体験は適用されません。",
    ],
    cancellationVsAccountDeletion: [
      "有料プランの解約とアカウント削除は別の手続きです。",
      "有料プランについては「プランを解約したい」、アカウントについては「アカウントを削除したい」の案内が分かれています。",
    ],
    confirmationNotes: [
      "ステータス画面で契約中プランや利用終了予定日を確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "optage、mineo、eoなどの提携先経由は、提携先ごとの解約先が案内されています。",
    ],
    officialSourceSummary:
      "AWAのガイドでは、有料プランの解約とアカウント削除が別の手続きとして分けて案内されています。契約中プランや利用終了予定日はステータス画面で確認できます。次回購入期間が始まる24時間前までの手続き、無料体験を解約後に再度有料会員登録した場合の扱い、提携先経由の解約先も確認できます。",
    contractRouteNotes: [
      {
        route: "AWAステータス画面",
        management: "契約中プラン・利用終了予定日の確認",
      },
      {
        route: "optage / mineo / eo等",
        management: "提携先ごとの解約先",
      },
    ],
    notes: [
      "有料プランの解約とアカウント削除は別の手続きとして案内されています。",
    ],
    confirmationPoints: [
      "ステータス画面で契約中プランや利用終了予定日を確認できます。",
    ],
    troubleshootingPoints: [
      "optage、mineo、eo 等の決済経路は、公式ガイド内で別の解約先が案内されています。",
    ],
    timingPoints: [
      "次回購入期間が開始する 24 時間前までの手続きが案内されています。",
      "無料体験を解約後に再度有料会員に登録した場合、無料体験は適用されません。",
    ],
  },

  {
    slug: "youtube-music-premium",
    serviceName: "YouTube Music Premium",
    companyName: "Google",
    primaryMethods: "Web / App Store / Google Play",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "YouTube Music ヘルプ / YouTube Premium と YouTube Music Premium のメンバーシップを解約する",
        url: "https://support.google.com/youtubemusic/answer/6308278?hl=ja",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約の確認先",
        items: [
          "Web 請求の場合、YouTube の有料メンバーシップ画面が確認先として案内されています。",
          "Apple 請求または Google Play 請求では、各ストア側での手続き案内があります。",
        ],
      },
      {
        title: "請求元による分岐",
        items: [
          "請求元が Apple、Google Play、その他のいずれかで、確認先が異なります。",
          "ヘルプでは、請求方法ごとに該当する案内先を確認する形になっています。",
        ],
      },
      {
        title: "無料体験の扱い",
        items: [
          "無料トライアル期間中に解約した場合、有料メンバーシップには移行しません。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Web請求の場合、YouTubeの有料メンバーシップ画面が確認先として案内されています。",
      "Apple請求またはGoogle Play請求では、各ストア側での手続き案内に分かれます。",
    ],
    billingRouteNotes: [
      "請求元がApple、Google Play、その他のいずれかによって、確認先が異なります。",
      "ヘルプでは、請求方法ごとに該当する案内先を確認する構成です。",
    ],
    cancellationTimingNotes: [
      "無料トライアル期間中に解約した場合、有料メンバーシップには移行しません。",
    ],
    confirmationNotes: [
      "Web請求の確認先として youtube.com/paid_memberships が案内されています。",
    ],
    unavailableOrExceptionNotes: [
      "Apple請求またはGoogle Play請求の場合は、YouTube側ではなく各ストア側での解約手続きが案内されています。",
      "請求元がApple、Google Play、その他のいずれかで手続き先が分かれます。",
    ],
    officialSourceSummary:
      "YouTube Music Premiumのヘルプでは、有料メンバーシップ画面から確認するWeb請求と、Apple請求・Google Play請求の手続き先が分けて説明されています。請求元によって参照先が変わるため、公式ページ自体も請求方法別の案内構成です。無料トライアル中に解約した場合は、有料メンバーシップへ移行しないと記載されています。",
    seoTitle:
      "YouTube Music Premiumの解約方法・請求元別の確認先",
    seoDescription:
      "YouTube Music Premiumの解約方法について、YouTubeの有料メンバーシップ画面、Apple請求、Google Play請求の確認先を公式情報にもとづいて整理しています。",
    searchIntentNotes: [
      {
        title: "名称・表示別の確認事項",
        items: [
          "公式ヘルプの対象は、YouTube PremiumとYouTube Music Premiumのメンバーシップ解約です。",
          "Web請求の場合は、YouTubeの有料メンバーシップ画面が確認先として案内されています。",
          "Apple請求またはGoogle Play請求の場合は、それぞれのストア側で手続きする扱いです。",
        ],
      },
      {
        title: "無料トライアルに関する記載",
        items: [
          "無料トライアル期間中に解約した場合、有料メンバーシップには移行しません。",
        ],
      },
    ],
    contractRouteNotes: [
      {
        route: "Web請求",
        management: "YouTubeの有料メンバーシップ画面",
        notes: ["youtube.com/paid_memberships が確認先として案内されています。"],
      },
      {
        route: "Apple請求",
        management: "App Store側のサブスクリプション管理",
        notes: ["YouTube側ではなく、Apple請求向けの手続き先に分かれます。"],
      },
      {
        route: "Google Play請求",
        management: "Google Play側の定期購入管理",
        notes: ["YouTube側ではなく、Google Play請求向けの手続き先に分かれます。"],
      },
    ],
    notes: [
      "Apple 請求または Google Play 請求の場合は、各ストア側での解約手続きが案内されています。",
    ],
    confirmationPoints: [
      "Web 請求の確認先として youtube.com/paid_memberships が案内されています。",
    ],
    troubleshootingPoints: [
      "請求元が Apple、Google Play、その他のいずれかによって、手続き先が異なります。",
    ],
    timingPoints: [
      "無料トライアル期間中に解約すると、有料メンバーシップには移行しません。",
    ],
  },

  {
    slug: "lemino",
    serviceName: "Lemino",
    companyName: "NTTドコモ",
    primaryMethods: "Web / App Store / Google Play",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Leminoニュース / Leminoプレミアムの解約方法",
        url: "https://lemino.docomo.ne.jp/leminonews/articles/979638277550112768",
      },
      {
        label: "Lemino / サービス規約",
        url: "https://conf.lemino.docomo.ne.jp/regulation/apps/service_regulation.html",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約の確認先",
        items: [
          "Lemino では、Leminoプレミアムの解約方法として、Web、App Store、Google Play の契約経路ごとの案内があります。",
          "アプリの削除だけでは解約手続きにならない旨が記載されています。",
        ],
      },
      {
        title: "解約後・表示の扱い",
        items: [
          "App Store / Google Play 決済を除く契約では、解約後にプレミアム対象作品を視聴できなくなる記載があります。",
          "dアカウント自体は解約後も残ります。",
          "解約ボタンが表示されない場合は、無料会員に移行済みの可能性があると案内されています。",
        ],
      },
      {
        title: "決済ごとの補足",
        items: [
          "App Store / Google Play 決済では、利用期間終了日まで利用できる案内があります。",
          "Web 決済については日割り返金がない記載があります。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Leminoプレミアムの解約方法として、Web、App Store、Google Playの契約経路ごとの案内があります。",
    ],
    billingRouteNotes: [
      "App Store / Google Play決済では、利用期間終了日まで利用できる案内があります。",
      "Web決済については日割り返金がない記載があります。",
    ],
    cancellationTimingNotes: [
      "App Store / Google Play決済は利用期間終了日まで利用できます。",
      "Web決済では日割り返金はありません。",
    ],
    postCancellationAccess: [
      "App Store / Google Play決済を除く契約では、解約後にプレミアム対象作品を視聴できなくなる記載があります。",
      "dアカウント自体は解約後も残ります。",
    ],
    confirmationNotes: [
      "解約ボタンが表示されない場合は、無料会員に移行済みの可能性があると案内されています。",
    ],
    unavailableOrExceptionNotes: [
      "アプリの削除だけでは解約手続きにならない旨が記載されています。",
    ],
    officialSourceSummary:
      "Leminoの解約案内では、Web、App Store、Google Playの契約経路ごとに確認先が分かれています。App Store / Google Play決済では利用期間終了日まで利用でき、Web決済では日割り返金がない記載です。アプリ削除だけでは解約にならない点と、dアカウント自体は解約後も残る点も整理されています。",
    contractRouteNotes: [
      {
        route: "Web",
        management: "LeminoのWeb側手続き",
        notes: ["Web決済については日割り返金がない記載があります。"],
      },
      {
        route: "App Store",
        management: "App Store側のサブスクリプション管理",
        notes: ["利用期間終了日まで利用できる案内があります。"],
      },
      {
        route: "Google Play",
        management: "Google Play側の定期購入管理",
        notes: ["利用期間終了日まで利用できる案内があります。"],
      },
    ],
    notes: [
      "アプリの削除だけでは解約になりません。",
    ],
    afterCancelPoints: [
      "App Store / Google Play 決済を除く契約では、解約後にプレミアム対象の視聴ができなくなります。",
      "dアカウント自体は解約後も残ります。",
    ],
    troubleshootingPoints: [
      "解約ボタンが表示されない場合は、無料会員に移行済みの可能性があります。",
    ],
    timingPoints: [
      "App Store / Google Play 決済は利用期間終了日まで利用できます。",
      "Web 決済では日割り返金はありません。",
    ],
  },

  {
    slug: "newspicks",
    serviceName: "NewsPicks",
    companyName: "Uzabase",
    primaryMethods: "Web / App Store / Google Play / Amazon",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "ヘルプ / 各種プレミアム（有料購読）の解約方法",
        url: "https://newspicks.zendesk.com/hc/ja/articles/115005073954-%E5%90%84%E7%A8%AE%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0-%E6%9C%89%E6%96%99%E8%B3%BC%E8%AA%AD-%E3%81%AE%E8%A7%A3%E7%B4%84%E6%96%B9%E6%B3%95",
      },
      {
        label: "ヘルプ / Web決済のプレミアムを解約したい",
        url: "https://newspicks.zendesk.com/hc/ja/related/click?data=BAh7CjobZGVzdGluYXRpb25fYXJ0aWNsZV9pZGwrCCEfu9FTADoYcmVmZXJyZXJfYXJ0aWNsZV9pZGwrCBmr6JiFDzoLbG9jYWxlSSIHamEGOgZFVDoIdXJsSSIBni9oYy9qYS9hcnRpY2xlcy8zNjAwMDA5ODY5MTMtV2ViJUU2JUIxJUJBJUU2JUI4JTg4JUUzJTgxJUFFJUUzJTgzJTk3JUUzJTgzJUFDJUUzJTgzJTlGJUUzJTgyJUEyJUUzJTgzJUEwJUUzJTgyJTkyJUU4JUE3JUEzJUU3JUI0JTg0JUUzJTgxJTk3JUUzJTgxJTlGJUUzJTgxJTg0BjsIVDoJcmFua2kG--035c853e3f7176868d87f1a64ba6b48987e623e1",
      },
    ],
    notes: [
      "解約手続きの確認先は、Web、App Store、Google Play、Amazon のどの決済方法かによって分かれます。",
    ],
    cancellationEntryPoint: [
      "各種プレミアム（有料購読）の解約方法は、Web、App Store、Google Play、Amazonのどの決済方法かによって確認先が分かれます。",
    ],
    billingRouteNotes: [
      "解約手続きの確認先は、Web、App Store、Google Play、Amazonのどの決済方法かによって分かれます。",
    ],
    cancellationTimingNotes: [
      "更新日の24時間前までの手続きが案内されています。",
      "Web決済は、解約後も期間満了まで利用できます。",
    ],
    cancellationVsAccountDeletion: [
      "アカウント削除は、プレミアムの期間満了後に行います。",
    ],
    confirmationNotes: [
      "アプリ内の「設定・アカウント」からサブスクリプションプランを確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "アカウント削除は、プレミアムの期間満了後に行います。",
    ],
    officialSourceSummary:
      "NewsPicksのヘルプでは、各種プレミアム（有料購読）の解約方法が、Web、App Store、Google Play、Amazonの決済方法ごとに分けて案内されています。更新日の24時間前までの手続きが案内され、Web決済は解約後も期間満了まで利用できます。アカウント削除はプレミアムの期間満了後に行う扱いです。",
    contractRouteNotes: [
      {
        route: "Web決済",
        management: "Web決済のプレミアム解約",
        notes: ["解約後も期間満了まで利用できます。"],
      },
      {
        route: "App Store / Google Play / Amazon",
        management: "各決済方法ごとの解約先",
        notes: ["決済方法によって確認先が分かれます。"],
      },
    ],
    confirmationPoints: [
      "アプリ内の「設定・アカウント」からサブスクリプションプランを確認できます。",
    ],
    troubleshootingPoints: [
      "アカウント削除は、プレミアムの期間満了後に行います。",
    ],
    timingPoints: [
      "更新日の 24 時間前までの手続きが案内されています。",
      "Web 決済は、解約後も期間満了まで利用できます。",
    ],
  },

  {
    slug: "spotify-free-premium",
    serviceName: "Spotify（Premium解約後のFree移行）",
    companyName: "Spotify",
    primaryMethods: "Web / アプリ（購入経路により異なる場合あり）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年05月",
    officialLinks: [
      {
        label: "Spotify サポート / Premium プランを解約する方法",
        url: "https://support.spotify.com/jp/article/cancel-premium/",
      },
      {
        label: "Spotify サポート / プランを変更する",
        url: "https://support.spotify.com/jp/article/change-plan/",
      },
    ],
    officialProcedureSections: [
      {
        title: "解約の確認先",
        items: [
          "Premium プランは、アカウント情報ページから解約できます。",
          "「現在のプラン」または「プランを管理」から「プランをキャンセル」を選択し、最終確認画面まで進める案内があります。",
        ],
      },
      {
        title: "Free への移行",
        items: [
          "Premium は次の請求日まで利用でき、その後に Free プランへ切り替わります。",
          "Free に切り替わった後も、プレイリストや保存済みの音楽は引き続き利用できます。",
        ],
      },
      {
        title: "無料体験と別経路",
        items: [
          "無料体験中に解約した場合、アカウントはすぐに Spotify の無料サービスへ切り替わります。",
          "パートナー企業経由のプランでは、アカウントページに表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内があります。",
          "Spotify Free と表示されている場合は、解約が必要な Premium プランがない状態です。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Premiumプランは、Spotifyのアカウント情報ページから解約できます。",
      "「現在のプラン」または「プランを管理」から「プランをキャンセル」を選択し、最終確認画面まで進める流れが案内されています。",
    ],
    billingRouteNotes: [
      "パートナー企業経由のプランでは、アカウントページに表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内があります。",
      "Google Playや提携事業者経由の契約は、手続き先がSpotify以外に分かれます。",
    ],
    cancellationTimingNotes: [
      "Premiumは次の請求日まで利用でき、その後にFreeプランへ切り替わります。",
      "無料体験中に解約した場合、アカウントはすぐにSpotifyの無料サービスへ切り替わります。",
      "無料体験を再開することはできません。",
    ],
    postCancellationAccess: [
      "Freeに切り替わった後も、プレイリストや保存済みの音楽は引き続き利用できます。",
      "Premium解約後は、広告付きのFreeプランに移行します。",
    ],
    confirmationNotes: [
      "アカウントページのプラン表示から、現在の契約状況を確認できます。",
      "Spotify Freeと表示されている場合は、解約が必要なPremiumプランがない状態です。",
    ],
    unavailableOrExceptionNotes: [
      "パートナー企業経由のプランでは、Spotifyの通常のアカウントページだけで完結せず、表示されるパートナー企業のお問い合わせ用リンクから進める案内です。",
      "Spotify Freeと表示されている場合は、Premiumの解約手続き対象ではありません。",
    ],
    officialSourceSummary:
      "Spotifyのサポートでは、Premiumプランをアカウント情報ページから解約し、最終確認画面まで進める流れが説明されています。Premiumは次の請求日まで利用でき、その後Freeプランへ切り替わると記載されています。パートナー企業経由のプランやSpotify Free表示時の扱いも同じ解約記事内で確認できます。",
    seoTitle:
      "Spotify Premiumの解約方法・Free表示とプラン変更の確認先",
    seoDescription:
      "Spotify Premiumの解約方法について、アカウント情報ページ、次回請求日後のFree移行、Spotify Free表示、パートナー企業経由プランの確認先を公式情報にもとづいて整理しています。",
    searchIntentNotes: [
      {
        title: "Premium解約とFree表示",
        items: [
          "Spotify Freeと表示されている場合は、解約が必要なPremiumプランがない状態です。",
          "Premium解約後は、次の請求日までPremiumを利用でき、その後Freeプランへ切り替わります。",
          "Freeに切り替わった後も、プレイリストや保存済みの音楽は引き続き利用できます。",
        ],
      },
      {
        title: "プラン変更・別経路の確認先",
        items: [
          "Premiumプランは、Spotifyのアカウント情報ページから解約できます。",
          "パートナー企業経由のプランでは、アカウントページに表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内があります。",
          "Spotifyサポートには、解約方法とは別にプラン変更の案内ページも掲載されています。",
        ],
      },
    ],
    contractRouteNotes: [
      {
        route: "Spotify直接管理のPremium",
        management: "Spotifyのアカウント情報ページ",
        notes: [
          "「現在のプラン」または「プランを管理」から「プランをキャンセル」を選択し、最終確認画面まで進める流れです。",
        ],
      },
      {
        route: "パートナー企業経由のプラン",
        management: "アカウントページに表示されるパートナー企業の案内先",
        notes: [
          "表示されるパートナー企業のお問い合わせ用リンクから解約を進める案内があります。",
        ],
      },
      {
        route: "Spotify Free表示",
        management: "アカウントページのプラン表示",
        notes: ["解約が必要なPremiumプランがない状態として案内されています。"],
      },
    ],
    notes: [
      "アカウントがすでに Free の場合は、Premium の解約手続き対象ではありません。",
    ],
    afterCancelPoints: [
      "Premium 解約後は、広告付きの Free プランに移行します。",
      "保存済みの音楽やプレイリストは、アカウント内に残ります。",
    ],
    confirmationPoints: [
      "アカウントページのプラン表示から、現在の契約状況を確認できます。",
    ],
    troubleshootingPoints: [
      "Google Play や提携事業者経由の契約は、手続き先が Spotify 以外に分かれます。",
    ],
    timingPoints: [
      "Premium は次回請求日まで続き、その後に Free に移行します。",
      "無料体験期間中に解約した場合は、Premium の利用がすぐに終了します。",
    ],
  },

  {
    slug: "apple-podcasts-subscriptions",
    serviceName: "Apple Podcasts サブスクリプション",
    companyName: "Apple Inc.",
    primaryMethods: "端末（サブスクリプション管理） / Web",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年05月",
    officialLinks: [
      {
        label: "Apple サポート / Apple Podcasts のサブスクリプションを入手、共有、管理する",
        url: "https://support.apple.com/ja-jp/118412",
      },
      {
        label: "Apple サポート / Apple のサブスクリプションを解約する",
        url: "https://support.apple.com/ja-jp/118428",
      },
    ],
    officialProcedureSections: [
      {
        title: "Apple側で登録したサブスクリプション",
        items: [
          "iPhone、iPad、Mac、Windows 用 Apple Music / Apple TV アプリ、または Web でサブスクリプションを解約する案内があります。",
          "Apple が請求元である場合は、サブスクリプション一覧から対象を選び、「サブスクリプションをキャンセル」を実行します。",
          "キャンセルボタンが表示されない場合や、期限切れの表示が赤字で出る場合は、解約済みです。",
        ],
      },
      {
        title: "見つからない場合の確認",
        items: [
          "Apple からの領収書メールで、どの Apple Account が使われたかを確認する案内があります。",
          "別の Apple Account や家族の Apple Account で登録している場合は、そのアカウント側で解約します。",
        ],
      },
      {
        title: "Apple以外の請求元",
        items: [
          "Apple 以外の提供者や Web で登録したサブスクリプションは、その提供者側で手続きします。",
          "通信事業者やその他のプロバイダ経由で登録したサブスクリプションは、該当する事業者側へ連絡する案内があります。",
          "ポッドキャストのフォロー解除だけでは、有料サブスクリプションの解約にはなりません。",
        ],
      },
    ],
    cancellationEntryPoint: [
      "Appleが請求元である場合は、サブスクリプション一覧から対象を選び、「サブスクリプションをキャンセル」を実行する案内があります。",
      "iPhone、iPad、Mac、Windows用Apple Music / Apple TVアプリ、またはWebでサブスクリプションを解約する案内があります。",
    ],
    billingRouteNotes: [
      "Apple以外の提供者やWebで登録したサブスクリプションは、その提供者側で手続きします。",
      "通信事業者やその他のプロバイダ経由で登録したサブスクリプションは、該当する事業者側へ連絡する案内があります。",
    ],
    confirmationNotes: [
      "サブスクリプション一覧で、「解約する」ボタンの表示有無や期間満了日の表示を確認できます。",
      "Appleからの領収書メールで、どのApple Accountが使われたかを確認する案内があります。",
    ],
    unavailableOrExceptionNotes: [
      "キャンセルボタンが表示されない場合や、期限切れの表示が赤字で出る場合は、解約済みです。",
      "別のApple Accountや家族のApple Accountで登録している場合は、そのアカウント側で解約します。",
      "ポッドキャストのフォロー解除だけでは、有料サブスクリプションの解約にはなりません。",
    ],
    officialSourceSummary:
      "Apple Podcastsサブスクリプションの案内では、Appleが請求元の場合のサブスクリプション管理と、Apple以外の提供者・通信事業者経由の場合の確認先が分けて説明されています。サブスクリプションが見つからない場合は、領収書メールや別のApple Accountを確認する流れです。ポッドキャストのフォロー解除は有料サブスクリプションの解約とは別と記載されています。",
    contractRouteNotes: [
      {
        route: "Apple請求",
        management: "Apple Accountのサブスクリプション一覧",
        notes: ["対象を選び、「サブスクリプションをキャンセル」を実行する案内です。"],
      },
      {
        route: "Apple以外の提供者 / Web登録",
        management: "登録した提供者側の手続き",
      },
      {
        route: "通信事業者・その他プロバイダ",
        management: "該当する事業者側の確認先",
      },
    ],
    notes: [
      "ポッドキャストをフォロー解除しただけでは、有料サブスクリプションの解約にはなりません。",
    ],
    confirmationPoints: [
      "サブスクリプション一覧で、「解約する」ボタンの表示有無や期間満了日の表示を確認できます。",
    ],
    troubleshootingPoints: [
      "Apple 以外の提供者や Web で登録したサブスクリプションは、その提供者側で手続きします。",
      "サブスクリプションが見つからない場合は、別の Apple Account で登録している可能性があります。",
    ],
  },

  {
    slug: "wowow-ondemand",
    serviceName: "WOWOWオンデマンド",
    companyName: "WOWOW",
    primaryMethods: "Web / アプリ（契約形態により異なる場合あり）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "WOWOW ヘルプ / 解約したい",
        url: "https://support.wowow.co.jp/s/article/000001965",
      },
      {
        label: "WOWOW ヘルプ / 解約手続きが完了できているか確認したい",
        url: "https://support.wowow.co.jp/s/article/000001966",
      },
      {
        label: "WOWOW ヘルプ / App Store 経由の WOWOW 解約方法",
        url: "https://support.wowow.co.jp/s/article/000002177",
      },
    ],
    notes: [
      "アプリの削除だけでは解約にはなりません。",
      "契約者のアカウントでログインして手続きを行います。",
    ],
    cancellationEntryPoint: [
      "WOWOWの解約は、契約者のアカウントでログインして手続きを行う案内です。",
      "My WOWOWの契約情報から、現在の契約状況を確認できます。",
    ],
    billingRouteNotes: [
      "J:COM、ひかりTV、スカパー！、Amazonアプリストア、App Store等の経路では、各提供元での手続きになります。",
    ],
    cancellationTimingNotes: [
      "App Store経由の場合は、次回更新日の24時間前までの手続きが案内されています。",
      "日割り返金はありません。",
    ],
    postCancellationAccess: [
      "WOWOWの解約が成立すると、WOWOWオンデマンドも同時に利用できなくなります。",
      "Webアカウント自体は、解約後も残ります。",
    ],
    confirmationNotes: [
      "My WOWOWの契約情報から、現在の契約状況を確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "アプリの削除だけでは解約にはなりません。",
      "J:COM、ひかりTV、スカパー！、Amazonアプリストア、App Store等の経路では、各提供元での手続きになります。",
    ],
    officialSourceSummary:
      "WOWOWオンデマンド関連のヘルプでは、WOWOWの解約、解約完了の確認、App Store経由の解約方法が別ページとして案内されています。契約者のアカウントでログインして手続きを行い、現在の契約状況はMy WOWOWの契約情報で確認する構成です。J:COM、ひかりTV、スカパー！、Amazonアプリストア、App Storeなど、提供元ごとに手続き先が分かれる記載があります。",
    contractRouteNotes: [
      {
        route: "WOWOW直接契約",
        management: "契約者アカウント / My WOWOW",
        notes: ["現在の契約状況はMy WOWOWの契約情報で確認できます。"],
      },
      {
        route: "J:COM / ひかりTV / スカパー！",
        management: "各提供元での手続き",
      },
      {
        route: "Amazonアプリストア / App Store",
        management: "各ストア側の手続き",
        notes: ["App Store経由の場合は、次回更新日の24時間前までの手続きが案内されています。"],
      },
    ],
    afterCancelPoints: [
      "WOWOW の解約が成立すると、WOWOWオンデマンドも同時に利用できなくなります。",
      "Web アカウント自体は、解約後も残ります。",
    ],
    confirmationPoints: [
      "My WOWOW の契約情報から、現在の契約状況を確認できます。",
    ],
    troubleshootingPoints: [
      "J:COM、ひかりTV、スカパー！、Amazonアプリストア、App Store 等の経路では、各提供元での手続きになります。",
    ],
    timingPoints: [
      "App Store 経由の場合は、次回更新日の 24 時間前までの手続きが案内されています。",
      "日割り返金はありません。",
    ],
  },

  {
    slug: "nikkei-digital",
    serviceName: "日経電子版",
    companyName: "日本経済新聞社",
    primaryMethods: "Web",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "日経電子版 / サービスの仕組みと月額料金",
        url: "https://www.nikkeimp.co.jp/service/denshi/",
      },
      {
        label: "日経IDラウンジ / 契約変更・解約に関するメンテナンス案内",
        url: "https://id.nikkei.com/lounge/mnt_info_20241115.html",
      },
    ],
    notes: [
      "契約変更や解約は、日経IDラウンジで手続きします。",
    ],
    cancellationEntryPoint: [
      "契約変更や解約は、日経IDラウンジで手続きします。",
    ],
    cancellationTimingNotes: [
      "1か月無料体験中は、無料体験終了前に解約すると月額料金はかかりません。",
      "無料体験終了後は、月額有料会員に自動移行します。",
    ],
    unavailableOrExceptionNotes: [
      "契約形態や申し込み時期によって、適用中のプランや無料体験の条件が異なります。",
    ],
    officialSourceSummary:
      "日経電子版の掲載情報では、契約変更や解約は日経IDラウンジで手続きする扱いです。1か月無料体験中は、無料体験終了前に解約すると月額料金はかかりません。契約形態や申し込み時期によって、適用中のプランや無料体験の条件が異なる場合があります。",
    troubleshootingPoints: [
      "契約形態や申し込み時期によって、適用中のプランや無料体験の条件が異なります。",
    ],
    timingPoints: [
      "1か月無料体験中は、無料体験終了前に解約すると月額料金はかかりません。",
      "無料体験終了後は、月額有料会員に自動移行します。",
    ],
  },

  {
    slug: "nintendo-switch-online",
    serviceName: "Nintendo Switch Online",
    companyName: "Nintendo",
    primaryMethods: "端末（ニンテンドーeショップ）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "Nintendo サポート / 「自動継続の更新停止」手順",
        url: "https://support.nintendo.com/jp/switch/nintendo_switch_online/08.html",
      },
    ],
    notes: [
      "公式案内では、解約に相当する手続きとして「自動継続の更新停止」が案内されています。",
    ],
    cancellationEntryPoint: [
      "公式案内では、解約に相当する手続きとして「自動継続の更新停止」が案内されています。",
      "ニンテンドーeショップのアカウント情報から、自動継続の設定状況を確認できます。",
    ],
    cancellationTimingNotes: [
      "有効期間満了日の48時間前に、自動継続分の代金が決済されます。",
      "自動継続を停止する場合は、有効期間満了日の48時間前までの手続きが案内されています。",
    ],
    postCancellationAccess: [
      "自動継続を停止しても、残りの利用期間中はNintendo Switch Onlineを利用できます。",
    ],
    confirmationNotes: [
      "ニンテンドーeショップのアカウント情報から、自動継続の設定状況を確認できます。",
    ],
    officialSourceSummary:
      "Nintendo Switch Onlineのサポートでは、解約に相当する手続きとして「自動継続の更新停止」が案内されています。自動継続分の決済は有効期間満了日の48時間前に行われるため、更新停止の期限も同じ48時間前として説明されています。更新停止後も残りの利用期間中はサービスを利用できる記載です。",
    afterCancelPoints: [
      "自動継続を停止しても、残りの利用期間中は Nintendo Switch Online を利用できます。",
    ],
    confirmationPoints: [
      "ニンテンドーeショップのアカウント情報から、自動継続の設定状況を確認できます。",
    ],
    timingPoints: [
      "有効期間満了日の 48 時間前に、自動継続分の代金が決済されます。",
      "自動継続を停止する場合は、有効期間満了日の 48 時間前までの手続きが案内されています。",
    ],
  },

  {
    slug: "playstation-plus",
    serviceName: "PlayStation Plus",
    companyName: "Sony Interactive Entertainment",
    primaryMethods: "Web / 端末（サブスクリプション管理）",
    loginRequired: "\u5fc5\u8981",
    timeEstimate: "記載なし",
    asOf: "2026年04月",
    officialLinks: [
      {
        label: "PlayStation サポート / PlayStation Plus を解約する方法",
        url: "https://www.playstation.com/ja-jp/support/subscriptions/cancel-playstation-plus/",
      },
      {
        label: "PlayStation サポート / PlayStation Store のサブスクリプション管理",
        url: "https://www.playstation.com/ja-jp/support/store/check-ps-store-transaction-subscription-service/",
      },
    ],
    notes: [
      "公式案内では、解約に相当する手続きとして「サブスクリプションの解約」が案内されています。",
    ],
    cancellationEntryPoint: [
      "公式案内では、解約に相当する手続きとして「サブスクリプションの解約」が案内されています。",
      "アカウントのサブスクリプション管理画面から、現在の状態を確認できます。",
    ],
    billingRouteNotes: [
      "PlayStation Store以外の販売元やプロモーションコード経由の場合は、適用条件や確認先が異なる場合があります。",
    ],
    postCancellationAccess: [
      "サブスクリプションを解約しても、残りの契約期間中はPlayStation Plusを利用できます。",
    ],
    confirmationNotes: [
      "アカウントのサブスクリプション管理画面から、現在の状態を確認できます。",
    ],
    unavailableOrExceptionNotes: [
      "PlayStation Store以外の販売元やプロモーションコード経由の場合は、適用条件や確認先が異なる場合があります。",
    ],
    officialSourceSummary:
      "PlayStation Plusのサポートでは、サブスクリプションの解約方法と、PlayStation Storeのサブスクリプション管理が案内されています。アカウントのサブスクリプション管理画面から現在の状態を確認できます。解約後も残りの契約期間中はPlayStation Plusを利用できる記載があります。",
    afterCancelPoints: [
      "サブスクリプションを解約しても、残りの契約期間中は PlayStation Plus を利用できます。",
    ],
    confirmationPoints: [
      "アカウントのサブスクリプション管理画面から、現在の状態を確認できます。",
    ],
    troubleshootingPoints: [
      "PlayStation Store 以外の販売元やプロモーションコード経由の場合は、適用条件や確認先が異なる場合があります。",
    ],
  },
];

// Convenience helpers
export const PHASE1_SLUGS = PHASE1_SERVICES.map((s) => s.slug);

export function getServiceBySlug(slug: string) {
  return PHASE1_SERVICES.find((s) => s.slug === slug) ?? null;
}
