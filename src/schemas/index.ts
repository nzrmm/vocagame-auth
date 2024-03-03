import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong!",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong!",
  }),
});

export const RegisterSchema = z
  .object({
    username: z.string().min(1, {
      message: "Username tidak boleh kosong!",
    }),
    phoneNumber: z
      .string()
      .min(10, {
        message: "Nomor Handphone minimal berisi 10 angka!",
      })
      .max(13, {
        message: "Nomor Handphone maksimal berisi 13 angka!",
      }),
    password: z.string().min(1, {
      message: "Password tidak boleh kosong!",
    }),
    confirmPassword: z.string().min(1, {
      message: "Konfirmasi password tidak boleh kosong!",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password dan Konfirmasi Password tidak sesuai!",
    path: ["confirmPassword"],
  });

export const ProfileSchema = z.object({
  username: z.string().min(1, {
    message: "Username tidak boleh kosong!",
  }),
  phoneNumber: z
    .string()
    .min(10, {
      message: "Nomor Handphone minimal berisi 10 angka!",
    })
    .max(13, {
      message: "Nomor Handphone maksimal berisi 13 angka!",
    }),
  oldPassword: z.string().min(1, {
    message: "Old Password tidak boleh kosong!",
  }),
  newPassword: z.string().min(1, {
    message: "New Password tidak boleh kosong!",
  }),
});
