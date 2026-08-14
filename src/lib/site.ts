const DEFAULT_SITE_URL = "https://kaiyaku-info.com";
const CANONICAL_HOST = "kaiyaku-info.com";

export function getCanonicalSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;

  try {
    const url = new URL(configuredUrl);
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}
