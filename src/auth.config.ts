import { compare } from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "@/libs/db";
import { LoginSchema } from "@/schemas";

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { username, password } = LoginSchema.parse(credentials);

        if (!username || !password) {
          return null;
        }

        const user = await db.user.findUnique({ where: { username } });
        if (!user) return null;

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) return null;

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
