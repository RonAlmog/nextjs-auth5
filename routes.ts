/**
 * array of routes that are accessible to the public without need to authenticate
 */
export const publicRoutes = ["/"];

/**
 * these routes are allowed for (only!) non authenticated users
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * prefix for api auth routes
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
