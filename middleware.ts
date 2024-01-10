import authConfig from "@/auth.config";
import NextAuth from "next-auth";

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log("is loggged in", isLoggedIn);
  console.log("route: ", req.nextUrl.pathname);
});

// these paths will activate the Middleware
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
