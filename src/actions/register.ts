"use server";

import { z } from "zod";
import { hash } from "bcryptjs";

import { db } from "@/libs/db";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const { username, phoneNumber, password } = RegisterSchema.parse(values);

  // Check if username already exists
  const existingUsername = await db.user.findUnique({
    where: { username },
  });

  if (existingUsername) {
    return { error: "Username sudah terpakai" };
  }

  // Create user
  const hashedPassword = await hash(password, 10);
  const user = await db.user.create({
    data: { username, phoneNumber, password: hashedPassword },
  });

  return { success: "User berhasil dibuat" };
};
