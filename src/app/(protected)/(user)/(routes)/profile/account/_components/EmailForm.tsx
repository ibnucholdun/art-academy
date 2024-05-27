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
import { FormEmailSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { changeEmail } from "@/actions/changeEmail";
import { TriangleAlert } from "lucide-react";

type Props = {
  user: any;
};

const EmailForm = ({ user }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof FormEmailSchema>>({
    resolver: zodResolver(FormEmailSchema),
    defaultValues: {
      email: user?.email ?? "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormEmailSchema>) => {
    startTransition(() => {
      changeEmail(values)
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
        Change Email
        <hr className="mt-4 h-1 w-full" />
      </CardHeader>
      <CardContent>
        {user.isOAuth === false && (
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Email</FormLabel>
                      <FormControl>
                        <>
                          <Input type="email" disabled={isPending} {...field} />
                          <p className="text-xs text-muted-foreground">
                            The email will change when you press the
                            verification link sent to your new email.
                          </p>
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {error && <FormError message={error} />}
              {success && <FormSuccess message={success} />}
              <Button type="submit" disabled={isPending}>
                Change Email
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

export default EmailForm;
