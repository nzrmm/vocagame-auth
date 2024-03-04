import { auth } from "@/auth";
import {
  AUTH_ROUTES,
  PUBLIC_ROUTES,
  API_AUTH_PREFIX,
  DEFAULT_LOGIN_REDIRECT,
} from "@/constants/routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    if (isAuthenticated) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }

    return;
  }

  if (!isAuthenticated && !isPublicRoute) {
    return Response.redirect(new URL("/register", nextUrl));
  }

  return;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
