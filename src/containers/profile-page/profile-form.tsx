"use client";

import { useTransition } from "react";
import { z } from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
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

import { cn } from "@/libs/utils";
import { ProfileSchema } from "@/schemas";
import { profile } from "@/actions/profile";

const ProfileForm = () => {
  const router = useRouter();
  const { data, update } = useSession();

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      username: data?.user?.username || "",
      phoneNumber: data?.user?.phoneNumber || "",
      oldPassword: "",
      newPassword: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    startTransition(() => {
      profile(values, data?.user?.id)
        .then((data) => {
          if (data?.success) {
            toast.success(data.success);

            // Update session
            update({
              user: {
                username: data.user.username,
                phoneNumber: data.user.phoneNumber,
                password: data.user.password,
              },
            });
            router.refresh();
          }

          if (data.error) {
            toast.error(data.error);
          }
        })
        .catch(() => toast.error("Terjadi kesalahan"));
    });
  };

  return (
    <div className={cn("md:w-1/2 bg-white rounded-lg")}>
      <div className={cn("w-full")}>
        <div className={cn("mb-10")}>
          <h1 className={cn("text-3xl font-extrabold mb-2")}>Edit Profile</h1>
          <p className={cn("text-slate-500 text-sm")}>
            Edit profile anda dengan mengisi form dibawah.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className={cn("mb-10")}>
            <div className={cn("space-y-4 mb-10")}>
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
                        className={cn("h-12 p-5")}
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
                        className={cn("h-12 p-5")}
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
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      Old Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan old password anda..."
                        className={cn("h-12 p-5")}
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
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn("text-slate-900")}>
                      New Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Masukkan new password anda..."
                        className={cn("h-12 p-5")}
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
              size="lg"
              disabled={isPending}
              className={cn("bg-primary font-bold")}
            >
              Edit Profile
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProfileForm;
