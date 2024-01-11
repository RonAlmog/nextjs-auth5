/**
 * array of routes that are accessible to the public without need to authenticate
 */
export const publicRoutes = ["/"];

/**
 * protected routes. these routes will redirect users to /settings
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * prefix for api auth routes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
