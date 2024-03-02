"use client";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
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
import { LoginSchema } from "@/schemas";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValidating, isSubmitting },
  } = form;

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    console.log(data);
  };

  return (
    <div className={cn("p-8 md:p-16 flex items-center")}>
      <div className={cn("w-full")}>
        <Logo className={cn("mb-14")} />

        <div className={cn("mb-10")}>
          <h1 className={cn("text-5xl font-extrabold mb-5")}>Silahkan LogIn</h1>
          <p className={cn("text-slate-500")}>
            Masukkan username dan password anda untuk masuk.
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
                        {...field}
                        className={cn("h-16 p-5")}
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
                        {...field}
                        className={cn("h-16 p-5")}
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
              className={cn(
                "w-full bg-primary/20 text-primary hover:text-white font-bold"
              )}
            >
              Masuk Sekarang
            </Button>
          </form>
        </Form>

        <div className={cn("text-center")}>
          <p className={cn("font-bold text-slate-500")}>
            Belum punya akun ?{" "}
            <Link href={"/register"} className={cn("text-primary")}>
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
