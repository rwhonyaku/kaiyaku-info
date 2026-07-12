import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname !== "www.kaiyaku-info.com") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.hostname = "kaiyaku-info.com";

  return NextResponse.redirect(url, 308);
}
