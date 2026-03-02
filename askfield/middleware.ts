import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const userStr = request.cookies.get("user")?.value;
  const { pathname } = request.nextUrl;

  // Not logged in — redirect to login
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Logged in — check role for specific dashboards
  if (token && userStr) {
    try {
      const user = JSON.parse(decodeURIComponent(userStr));
      const role = user.role;

      // Participant trying to access contributor dashboard
      if (pathname.startsWith("/dashboard/contributor") && role !== "contributor") {
        return NextResponse.redirect(new URL("/dashboard/participant", request.url));
      }

      // Contributor trying to access participant dashboard
      if (pathname.startsWith("/dashboard/participant") && role !== "participant") {
        return NextResponse.redirect(new URL("/dashboard/contributor", request.url));
      }

      // Redirect /dashboard base to correct dashboard
      if (pathname === "/dashboard") {
        return NextResponse.redirect(
          new URL(`/dashboard/${role}`, request.url)
        );
      }
    } catch {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }

  // Already logged in — redirect away from auth pages
  if (token && (pathname.startsWith("/auth/login") || pathname.startsWith("/auth/sign-up"))) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/login", "/auth/sign-up/:path*"],
};