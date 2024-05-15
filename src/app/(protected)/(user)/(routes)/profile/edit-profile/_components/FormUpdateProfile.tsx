"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormLabel,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import FormSuccess from "@/components/FormSuccess";
import FormError from "@/components/FormError";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormProfileSchema } from "@/schemas";
import { editProfile } from "@/actions/editProfile";
import { UploadPhotoProfile } from "./UploadPhotoProfile";

type Props = {
  user: any;
};

const FormUpdateProfile = ({ user }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof FormProfileSchema>>({
    resolver: zodResolver(FormProfileSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      image: user?.image || undefined,
      aboutMe: user?.aboutMe || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof FormProfileSchema>) => {
    startTransition(() => {
      editProfile(values)
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
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo Profile</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-12">
                    <Avatar className="h-[80px] w-[80px]">
                      <AvatarImage
                        src={field.value || user?.image || ""}
                        alt="Profile"
                      />
                      <AvatarFallback className="text-4xl">
                        {user?.name[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <UploadPhotoProfile
                      endpoint="profileImage"
                      onChange={(url) => {
                        if (url) {
                          field.onChange(url);

                          startTransition(() => {
                            form.setValue("image", url);
                          });
                        }
                      }}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jhone Doe"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Role</FormLabel>
                <FormControl>
                  <Input type="role" disabled {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="aboutMe"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About Me</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isPending}
                    placeholder="e.g 'This about me is...'"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </form>
    </Form>
  );
};

export default FormUpdateProfile;
