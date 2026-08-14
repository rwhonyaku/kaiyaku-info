import type { MetadataRoute } from "next";
import { getCanonicalSiteUrl } from "@/lib/site";

const SITE_URL = getCanonicalSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
