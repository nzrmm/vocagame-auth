"use client";

import { useTransition } from "react";
import { z } from "zod";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Logo from "@/components/logo";

import { cn } from "@/libs/utils";
import { RegisterSchema } from "@/schemas";
import { register } from "@/actions/register";

const RegisterForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { reset, control, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data?.success) {
            reset();
            toast.success(data.success);
            router.push("/login");
          }

          if (data.error) {
            toast.error(data.error);
          }
        })
        .catch(() => toast.error("Terjadi kesalahan"));
    });
  };

  return (
    <div className={cn("md:w-1/2 p-8 md:p-16 bg-white rounded-lg")}>
      <div className={cn("w-full")}>
        <Logo className={cn("mb-14")} />

        <div className={cn("mb-10")}>
          <h1 className={cn("text-5xl font-extrabold mb-5")}>Daftarkan Akun</h1>
          <p className={cn("text-slate-500")}>
            Daftar akun anda dengan mengisi form dibawah.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className={cn("mb-10")}>
            <div className={cn("space-y-5 mb-16")}>
              <FormField
                control={control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan username anda..."
                        className={cn("h-16 p-5")}
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      Nomor Handphone
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan nomor handphone anda..."
                        className={cn("h-16 p-5")}
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan password anda..."
                        className={cn("h-16 p-5")}
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      Konfirmasi Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan kembali password anda..."
                        className={cn("h-16 p-5")}
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              size="xl"
              disabled={isPending}
              className={cn(
                "w-full bg-primary/20 text-primary hover:text-white font-bold"
              )}
            >
              Daftar Sekarang
            </Button>
          </form>
        </Form>

        <div className={cn("text-center")}>
          <p className={cn("font-bold text-slate-500")}>
            Sudah punya akun ?{" "}
            <Link href={"/login"} className={cn("text-primary")}>
              Login sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
