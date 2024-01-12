import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// this file is only to solve the typing issue in auth.js
// we are adding role to session.user.
// session.user.role = token.role as "ADMIN" | "USER";
