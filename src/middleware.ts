import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix, authRoutes, publicRoutes } from "./routes";
import { currentRole } from "./lib/auth";

const { auth } = NextAuth(authConfig);

const onlyAdmin = ["admin"];

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const role = await currentRole();

  const pathname = nextUrl.pathname.split("/")[1];
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = onlyAdmin.includes(pathname);

  if (isApiAuthRoute) return;

  if (isAdminRoute) {
    if (role !== "ADMIN") {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return;
  }

  if (!isPublicRoute && !isLoggedIn) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const endcodeddCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/auth/login?callbackUrl=${endcodeddCallbackUrl}`, nextUrl)
    );
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
