"use server";

import * as z from "zod";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import prisma from "@/lib/prisma";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields" };

  const { email, password, name } = validatedFields.data;

  const hasPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Email already exists" };

  await prisma.user.create({
    data: {
      email,
      name,
      password: hasPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Verification email sent" };
};
