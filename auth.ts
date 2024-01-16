import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient, UserRole } from "@prisma/client";
import authConfig from "@/auth.config";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { getTwoFactorConfirmationByUserId } from "./data/two-factor-confirmation";

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    // in the case of new social account, set the emailVerified.
    // we trus google, github etc, and don't need to verify email.
    async linkAccount({ user }) {
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      // for credentials only, block unverified user
      const existingUser = await getUserById(user.id);
      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }
      // 2fa check
      if (existingUser.isTwoFactorEnabled) {
        const confirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );
        if (!confirmation) return false;

        // delete the two factor auth token. consider counter to allow sending only once in...
        await db.twoFactorConfirmation.delete({
          where: {
            id: confirmation.id,
          },
        });
      }

      return true;
    },
    // looks like session is receivin the token from jwt callback (below)
    // so we can pass extra params into the session thru the token
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as Boolean;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      // here you can add fields to your token!
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
