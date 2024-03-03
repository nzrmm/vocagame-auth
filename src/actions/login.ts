"use server";

import { z } from "zod";
import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/constants/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const { username, password } = LoginSchema.parse(values);

  if (!username && !password) {
    return { error: "Masukkan data yang valid" };
  }

  try {
    const result = await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Masukkan data yang valid" };
        default:
          return { error: "Terjadi kesalahan" };
      }
    }

    throw error;
  }
};
