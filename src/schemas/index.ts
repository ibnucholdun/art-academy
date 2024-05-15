import * as z from "zod";
import { UserRole } from "@prisma/client";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
  name: z.string().min(1, {
    message: "Fullname is required",
  }),
});

export const EditUserSchema = z.object({
  name: z.optional(z.string()),
  role: z.enum([UserRole.USER, UserRole.ADMIN]),
  email: z.optional(z.string().email()),
});

export const FormTitleSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
});

export const FormDescriptionSchema = z.object({
  description: z.string().min(1, {
    message: "Description is required",
  }),
});

export const FormImageSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const FormPriceSchema = z.object({
  price: z.coerce.number(),
});

export const FormAttachmentSchema = z.object({
  url: z.string().min(1),
});

export const FOrmChapterSchema = z.object({
  title: z.string().min(1),
});

export const FormAccessSchema = z.object({
  isFree: z.boolean().default(false),
});

export const FormVideoSchema = z.object({
  videoUrl: z.string().min(1),
});

export const FormTimeSchema = z.object({
  time: z.date(),
});

export const FormLocationSchema = z.object({
  location: z.string().min(1),
});

export const FormProfileSchema = z.object({
  name: z.optional(z.string()),
  role: z.enum([UserRole.USER, UserRole.ADMIN]),
  email: z.optional(z.string().email()),
  image: z.optional(z.string()),
  aboutMe: z.optional(z.string()),
});

export const FormEmailSchema = z.object({
  email: z.string().email(),
});

export const FormPasswordSchema = z
  .object({
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) return false;
      if (!data.password && data.newPassword) return false;
      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) return false;
      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    }
  );
