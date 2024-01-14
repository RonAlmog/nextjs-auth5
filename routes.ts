/**
 * array of routes that are accessible to the public without need to authenticate
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * these routes are allowed for (only!) non authenticated users
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * prefix for api auth routes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
