"use server";

import { z } from "zod";
import { hash, compare } from "bcryptjs";

import { db } from "@/libs/db";
import { ProfileSchema } from "@/schemas";

export const profile = async (
  values: z.infer<typeof ProfileSchema>,
  id?: string
) => {
  const { username, phoneNumber, oldPassword, newPassword } =
    ProfileSchema.parse(values);

  // Check if username already exists
  const existingUser = await db.user.findUnique({ where: { id } });
  if (!existingUser) {
    return { error: "User tidak ditemukan" };
  }

  // Compare password
  const passwordMatch = await compare(oldPassword, existingUser.password);
  if (!passwordMatch) {
    return { error: "Masukkan old password dengan benar" };
  }

  // Update user
  const hashedPassword = await hash(newPassword, 10);
  const user = await db.user.update({
    where: { id },
    data: { username, phoneNumber, password: hashedPassword },
  });

  return { success: "User berhasil diedit", user };
};
