"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormPasswordSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff, FileWarning, TriangleAlert } from "lucide-react";
import { changePassword } from "@/actions/changePassword";

type Props = {
  user: any;
};

const PasswordForm = ({ user }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof FormPasswordSchema>>({
    resolver: zodResolver(FormPasswordSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof FormPasswordSchema>) => {
    startTransition(() => {
      changePassword(values)
        .then((data) => {
          if (data?.error) {
            setError(data?.error);
          }

          if (data?.success) {
            setSuccess(data?.success);
          }
        })
        .catch((error) => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <Card className="w-3/4">
      <CardHeader className="font-bold pb-0 text-lg">
        Change Password
        <hr className="mt-4 h-1 w-full" />
      </CardHeader>
      <CardContent>
        {user.isOAuth === false && (
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
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
                            placeholder="Enter the old password"
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={visible ? "text" : "password"}
                            {...field}
                            placeholder="Enter the new password"
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
              <Button type="submit" disabled={isPending}>
                Change Password
              </Button>
            </form>
          </Form>
        )}
        {user.isOAuth && (
          <div className="flex min-h-[200px] items-center justify-center flex-col rounded-md border border-dashed p-7 text-center animate-in fade-in-50">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500/10">
              <TriangleAlert className="h-10 w-10 text-primary text-orange-500" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-orange-500">
              Not available
            </h2>
            <p className="text-muted-foreground mt-2 text-center text-sm leading-6 ">
              This feature is not available for OAuth users
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PasswordForm;
