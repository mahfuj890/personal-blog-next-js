"use client";
import { NextResponse } from "next/server";
import { useAuthContext } from "./context/UseAuth";
import useTest from "./context/useTest";
// import type { NextRequest } from 'next/server'
export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*"],
};

export function middleware(request) {
  console.log(
    request.url,
    "🚀 ~ file: middleware.js:5 ~ middleware ~ request:",
    request,
    localStorage.getItem("isUserLogin")
  );

  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}
