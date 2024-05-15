"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { getPasswordResetTokenByToken } from "./../data/passwordResetToken";
import { NewPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import prisma from "@/lib/prisma";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) return { error: "Missing token!" };

  const validateFields = NewPasswordSchema.safeParse(values);

  if (!validateFields.success) return { error: "Invalid fields!" };

  const { password } = validateFields.data;

  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) return { error: "Invalid token!" };

  const hasExpired = new Date() > new Date(existingToken.expires);
  if (hasExpired) return { error: "Token has expired!" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email does not exist!" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  await prisma.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Password reset successfully!" };
};
