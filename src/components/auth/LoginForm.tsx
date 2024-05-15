"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CardWrapper from "./CardWrapper";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";
import { EyeIcon, EyeOff } from "lucide-react";
import { login } from "@/actions/login";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {};

const LoginForm = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [visible, setVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((res) => {
          if (res?.error) setError(res?.error);
          if (res?.success) setSuccess(res?.success);
        })
        .catch((error) => {
          setError("Something went wrong!");
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back in Serrla!"
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      showSocial>
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="serrla@academy.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={visible ? "text" : "password"}
                        {...field}
                        placeholder="********"
                        disabled={isPending}
                      />
                      <Button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-0"
                        variant="link"
                        onClick={() => setVisible(!visible)}>
                        {visible ? (
                          <EyeOff className="h-5 w-5 text-gray-700" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-700" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <Button
                    type="button"
                    size="sm"
                    variant="link"
                    className="px-0 text-xs text-muted-foreground"
                    onClick={() => router.push("/auth/reset-password")}>
                    Forgot password?
                  </Button>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
