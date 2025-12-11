import { NextRequest, NextResponse } from "next/server";

// Block access to these public routes by redirecting visitors to the homepage.
// Keeps files in repo but makes the routes inaccessible.
const BLOCKED_PREFIXES = ["/components", "/blog", "/sponsors"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const prefix of BLOCKED_PREFIXES) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/components/:path*",
    "/blog/:path*",
    "/sponsors/:path*",
  ],
};
