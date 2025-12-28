// src/components/AdSlot.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type Props = {
  slotId: string;           // your internal identifier (kept for tracking/placement)
  adSlot?: string;          // AdSense ad unit slot (numeric string), optional
  style?: React.CSSProperties;
};

export function AdSlot({ slotId, adSlot, style }: Props) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (!publisherId) return;
    if (!adSlot) return; // If you only use Auto Ads, do nothing here.
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // swallow; AdSense can fail silently in dev/blocked environments
    }
  }, [publisherId, adSlot]);

  // If no publisherId, render nothing (keeps pages clean in dev).
  if (!publisherId) return null;

  // Auto Ads only: render a neutral spacer so layout doesn’t jump.
  if (!adSlot) {
    return <section aria-label="Advertisement" data-slot={slotId} className="ad-slot" />;
  }

  // Manual unit (responsive)
  return (
    <section aria-label="Advertisement" data-slot={slotId} className="ad-slot">
      <ins
        className="adsbygoogle"
        style={{ display: "block", ...(style ?? {}) }}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}
