import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/libs/db";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return {
          ...token,
          ...session.user,
        };
      }

      if (user) {
        return {
          ...token,
          username: user.username,
          password: user.password,
          phoneNumber: user.phoneNumber,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          username: token?.username,
          password: token?.password,
          phoneNumber: token?.phoneNumber,
        },
      };
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", maxAge: 1 * 60 },
  ...authConfig,
});
